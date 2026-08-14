#!/usr/bin/env node
// Generates/updates a "<name>.readme.md" companion file next to every
// blueprint .txt in the repo, containing its in-game name + description,
// decoded straight from the blueprint's own plaintext header (no need to
// touch the gzipped/base64 binary blob). Run as part of the
// sync-blueprints skill, after the robocopy mirror and before staging.
//
// Usage: node generate-readmes.js <repoRoot>

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..', '..', '..'));
const SKIP_DIRS = new Set(['.git', '.claude', 'node_modules']);

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), files);
    } else if (entry.isFile() && entry.name.endsWith('.txt')) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function readHeader(filePath) {
  const fd = fs.openSync(filePath, 'r');
  try {
    for (const size of [8192, 65536, 1048576]) {
      const buf = Buffer.alloc(size);
      const bytesRead = fs.readSync(fd, buf, 0, buf.length, 0);
      const chunk = buf.toString('utf8', 0, bytesRead);
      const quoteIdx = chunk.indexOf('"');
      if (quoteIdx !== -1) return chunk.slice(0, quoteIdx);
      if (bytesRead < size) break; // file is smaller than this chunk, no point growing further
    }
  } finally {
    fs.closeSync(fd);
  }
  return null;
}

function parseNameAndDescription(header) {
  if (!header.startsWith('BLUEPRINT:')) return null;
  const fields = header.slice('BLUEPRINT:'.length).split(',');
  const versionIdx = fields.findIndex((f) => /^\d+\.\d+\.\d+\.\d+$/.test(f));
  if (versionIdx === -1 || versionIdx + 1 >= fields.length) return null;
  const nameField = fields[versionIdx + 1];
  const descField = fields[fields.length - 1];
  const decode = (s) => {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  };
  return { name: decode(nameField).trim(), description: decode(descField).trim() };
}

let created = 0,
  updated = 0,
  deleted = 0,
  unchanged = 0,
  skipped = 0;

for (const file of walk(ROOT, [])) {
  const readmePath = file.slice(0, -4) + '.readme.md';
  const header = readHeader(file);
  const parsed = header && parseNameAndDescription(header);
  if (!parsed) {
    skipped++;
    continue;
  }

  if (!parsed.description) {
    if (fs.existsSync(readmePath)) {
      fs.unlinkSync(readmePath);
      deleted++;
    }
    continue;
  }

  const content = `# ${parsed.name}\n\n${parsed.description}\n`;
  const existing = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : null;
  if (existing === content) {
    unchanged++;
    continue;
  }
  fs.writeFileSync(readmePath, content, 'utf8');
  if (existing === null) created++;
  else updated++;
}

console.log(JSON.stringify({ created, updated, deleted, unchanged, skipped }));
