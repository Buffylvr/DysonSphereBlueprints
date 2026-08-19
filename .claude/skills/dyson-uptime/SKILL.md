---
name: dyson-uptime
description: Given screenshots of a Dyson Sphere Program star system (the star's info panel plus each planet's info panel), determine which planets can host a full-coverage ray receiver build with 100% uptime and the system's total Dyson Sphere power output. Use whenever the user uploads or references DSP system screenshots and asks about uptime, dark spots, ray receiver builds, or Dyson Sphere power for a system.
tools: Read, Edit
---

# Dyson Sphere Uptime & Power Analysis

Given screenshots from a Dyson Sphere Program star system (star info panel + each planet's info panel), determine:
1. Which planets can host a full-coverage ray receiver build (5385 receivers, photon direct-power mode, Mk.3 proliferated lenses) with 100% uptime — no dark spot.
2. The system's total Dyson Sphere power output potential.

This is the standing workflow for an ongoing project. **Before doing any computation, read the full project memory file** — it holds the current formulas, calibration constants, empirically-confirmed pass/fail thresholds, and known caveats, all of which get refined over time as new in-game tests land:

`C:\Users\buffy\.claude\projects\C--Users-buffy-dsp-blueprints\memory\dyson_ray_receiver_uptime_math.md`

Do not hardcode formula constants in this skill file — always pull the current version from that memory file, since it is actively revised as new data comes in.

## Steps

1. **Read every provided screenshot** (star panel + each planet panel) with the Read tool.

2. **From the star panel**, note: the Type label (dwarf/main-sequence vs Giant — this determines which sphere-radius formula applies), Spectral Class, and Luminosity. Also note whether it's O or B type — the user's actual build scope going forward (A/G/K/M/Giant types are lower priority; still compute if asked, but don't chase further calibration work for them unprompted).

3. **Determine the max Dyson Sphere layer radius (`grossRadius`)**:
   - If a real in-game confirmed value for this star is already in memory, use it and say so.
   - Else if a dwarf/main-sequence star: use the current luminosity piecewise formula from the memory file (typically <1% error).
   - Else if a Giant-type star: use the current radius-based power-law fallback from the memory file, and flag its ~20–30% error explicitly.

4. **From each planet's panel**, note:
   - Planet type — **skip Gas Giant / Ice Giant entirely** (not buildable), and **skip Desolus entirely** (airless — ray receivers don't function at all, per the hard exclusion rule in memory). Label these with a one-line reason instead of computing a ratio.
   - Orbit radius in AU, and whether it orbits the star directly or orbits another planet (gas-giant-satellite case — use the host body's own orbit AU as the distance approximation, per memory).
   - Obliquity (axial tilt) — flag anything over ~15° as a caveat that lowers confidence in the worst-case-dot approximation the whole model relies on.

5. **Compute R = grossRadius ÷ (orbit AU × 40,000)** for every buildable planet.

6. **Classify each planet** against the current pass/fail/uncertain thresholds in the memory file. As a shortcut for O/B-type stars, check the discrete orbit-slot model in memory first — it can often classify a planet directly from its orbit AU alone (and flags whether a planet sits in a range that's likely a structural impossibility for that star type), without needing the full ratio computation.

7. **Compute power output** (by default, alongside uptime — the user wants both together to decide what to build): use the current supply-side master formula in memory. Report both the single max-radius layer output and the full up-to-10-layer stepped buildout (1,000 m spacing, 10-layer hard cap), flagging if a layer radius would collide with a known planet's orbit. For context, compare against the reference full-planet demand figures in memory (2.6 TW critical-photon, 1.45 TW antimatter-rod).

8. **Report one clean table**: Planet | Type | Orbit (AU) | R | Verdict — followed by the power output figures. Non-buildable planets (Gas/Ice Giant, Desolus) get a one-line skip reason instead of a row with a ratio.

9. **If anything found is new or notable** — a result that would newly confirm/refute a threshold, a planet landing inside a currently-open gap, a star outside prior calibration range — say so explicitly and offer to update the memory file. This project's value compounds through that file staying current; don't let a notable finding go unlogged.

## Notes

- Use only what's visible in the screenshots — never guess or backfill a missing stat.
- If a screenshot looks wrong (duplicated, mislabeled, wrong planet), say so rather than silently proceeding.
- Frame results against prior data where relevant (e.g. "matches the existing pass cluster around 0.56x" or "this is new — first planet found inside the open gap") rather than presenting each system in isolation — the memory file has a lot of history and the user reads results comparatively.
