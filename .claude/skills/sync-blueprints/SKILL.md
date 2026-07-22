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
   robocopy "C:\Users\buffy\Documents\Dyson Sphere Program\Blueprint" "C:\Users\buffy\dsp_blueprints" /MIR /XD .git .claude /XF .gitignore "*.swp"
   Write-Output "EXIT:$LASTEXITCODE"
   ```

   Robocopy exit codes 0-7 are success (bit flags for copied/extra/mismatched files); only 8+ is a real failure. Check for `EXIT:` >= 8 and stop to report the error if so.

2. **Stage everything** in the repo:

   ```bash
   cd "/c/Users/buffy/dsp_blueprints"
   git add -A
   ```

3. **Check if there's anything to commit.** If `git diff --cached --stat` is empty, tell the user the repo is already in sync and stop — do not create an empty commit.

4. **Commit** with a short, factual message (no need to ask the user for wording):

   ```bash
   git commit -m "$(cat <<'EOF'
   Sync blueprints from Dyson Sphere Program - <YYYY-MM-DD>
   
   Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
   EOF
   )"
   ```

5. **Push**:

   ```bash
   git push
   ```

6. **Report a brief summary** — counts of files added / modified / deleted (from `git show --stat HEAD` or the staged diff), and confirm the push succeeded. Keep it short; no need to list every filename unless the user asks.

## Notes

- Never touch `.git/`, `.claude/`, `.gitignore`, or `*.swp` files — they're excluded from the mirror on both the copy and delete side.
- Never write anything back into the `Documents\Dyson Sphere Program\Blueprint` folder — sync is one-way.
- If robocopy or git reports a real error (exit code >= 8 for robocopy, non-zero for git push), stop and surface the error instead of retrying blindly.
