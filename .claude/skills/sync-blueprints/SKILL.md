---
name: sync-blueprints
description: Sync this repo with the live Dyson Sphere Program Blueprint folder and push to GitHub. Use whenever the user asks to sync, update, refresh, or push their DSP blueprints, e.g. "sync my blueprints", "push my blueprints to github", "update the blueprint repo".
tools: Bash, PowerShell
---

# Sync DSP Blueprints

Mirrors `Documents\Dyson Sphere Program\Blueprint` into this repo (`~/dsp_blueprints`) and pushes the result to GitHub. One-way sync: game folder -> repo, never the reverse. Run this end-to-end without stopping for confirmation — that's the point of the skill.

Source: `C:\Users\buffy\Documents\Dyson Sphere Program\Blueprint`
Destination: this repo's root

## Steps

1. **Mirror-copy** with robocopy via the PowerShell tool (not Bash — Git Bash mangles leading-slash flags like `/MIR` into Windows drive paths). This is a true mirror: files deleted from the game folder are also deleted from the repo.

   ```powershell
   robocopy "C:\Users\buffy\Documents\Dyson Sphere Program\Blueprint" "C:\Users\buffy\dsp_blueprints" /MIR /XD .git .claude /XF .gitignore "*.swp" "*.readme.md"
   ```

   Run robocopy as the sole command in the call — don't append a second statement (e.g. `Write-Output "EXIT:$LASTEXITCODE"`). A string with an embedded `$variable` expansion trips the permission classifier's "expandable strings with embedded expressions" check and forces a prompt even when the base command is allowlisted. The PowerShell tool's own result already reports the exit code — read that directly instead of echoing it.

   Robocopy exit codes 0-7 are success (bit flags for copied/extra/mismatched files); only 8+ is a real failure. Check the reported exit code and stop to report the error if it's >= 8.

2. **Generate/update per-blueprint readmes.** Every blueprint `.txt` has its in-game name and long-form description stored as URL-encoded plaintext in its header, before the gzipped/base64 blob — no need to decode the binary to read them. Run the bundled script, which walks the whole repo, decodes each blueprint's header, and writes/updates a `<blueprint name>.readme.md` next to it (skips `.git`/`.claude`; deletes the companion readme if a blueprint's description is empty; deletes orphaned readmes whose blueprint was renamed/removed by step 1's mirror; leaves files untouched if content is unchanged):

   ```bash
   node ".claude/skills/sync-blueprints/generate-readmes.js" .
   ```

   It prints a JSON summary (`created`/`updated`/`deleted`/`orphaned`/`unchanged`/`skipped`, plus a `needsTranslation` array of readme paths). Fold the counts into the final report in step 7.

3. **Translate non-English readmes.** For every path in `needsTranslation`, read that file and translate its `# name` and description into English (the script itself has no translation ability — this is why it's a separate step, done by you). Keep the file's first line (the `<!-- dsp-readme-source-hash: ... -->` comment) **exactly as written by the script** — don't touch or regenerate it; it's how the script recognizes on future runs that this file's source hasn't changed and skips re-flagging/overwriting your translation. Replace everything after that line with the English translation, same `# name` / blank line / description shape as the English-native readmes.

4. **Stage everything** in the repo. The Bash tool's working directory is already this repo — do not `cd` into it first; prepending `cd` changes the literal command string and breaks the permission allowlist, forcing an approval prompt:

   ```bash
   git add -A
   ```

5. **Check if there's anything to commit.** If `git diff --cached --stat` is empty, tell the user the repo is already in sync and stop — do not create an empty commit.

6. **Commit** with a short, factual message (no need to ask the user for wording):

   ```bash
   git commit -m "$(cat <<'EOF'
   Sync blueprints from Dyson Sphere Program - <YYYY-MM-DD>
   
   Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
   EOF
   )"
   ```

7. **Push**:

   ```bash
   git push
   ```

8. **Report a brief summary** — counts of files added / modified / deleted (from `git show --stat HEAD` or the staged diff), plus the readme created/updated/deleted/translated counts from steps 2-3, and confirm the push succeeded. Keep it short; no need to list every filename unless the user asks.

## Notes

- Never touch `.git/`, `.claude/`, `.gitignore`, `*.swp`, or `*.readme.md` files — they're excluded from the mirror on both the copy and delete side. `*.readme.md` is repo-only (generated in step 2), so if it's ever missing from the robocopy `/XF` list, `/MIR` will delete every readme on the next sync, right before step 2 regenerates them from scratch — destroying the idempotency hash and re-triggering translation on every non-English one. Double-check this flag stays in the command if this skill is ever edited.
- Never write anything back into the `Documents\Dyson Sphere Program\Blueprint` folder — sync is one-way.
- If robocopy or git reports a real error (exit code >= 8 for robocopy, non-zero for git push), stop and surface the error instead of retrying blindly.
- The `<name>.readme.md` files are fully derived from each blueprint's own header (name + description fields) — they're regenerated every sync, so don't hand-edit them; edit the blueprint's description in-game (or via a direct header patch, see [[dsp_blueprint_editing]]) instead.
