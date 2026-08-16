# New Mall Blueprint — Planning Doc

Started: 2026-07-25

Goal: a single blueprint that produces every item on this list — one
combined mall, not individual per-item pieces.

Full ingredient breakdowns are listed under each item below.

## Target item list

### Power
- Ray Receiver
  - 20x Super-Magnetic Ring + 10x Photon Combiner + 5x Processor + 20x High-Purity Silicon + 20x Steel → 1x Ray Receiver (Assembler)
- Wireless Power Tower
  - 3x Plasma Exciter + 1x Tesla Tower → 1x Wireless Power Tower (Assembler)
- Tesla Tower
  - 2x Iron Ingot + 1x Magnetic Coil → 1x Tesla Tower (Assembler)
- Satellite Substation
  - 1x Wireless Power Tower + 2x Frame Material + 10x Super-Magnetic Ring → 1x Satellite Substation (Assembler)
- Artificial Star
  - 20x Frame Material + 10x Annihilation Constraint Sphere + 10x Quantum Chip + 20x Titanium Alloy → 1x Artificial Star (Assembler)

### Collecting
- Advanced Mining Machine
  - 20x Titanium Alloy + 10x Frame Material + 10x Super-Magnetic Ring + 4x Quantum Chip + 40x Grating Crystal → 1x Advanced Mining Machine (Assembler, 20s)
- Oil Extractor
  - 6x Circuit Board + 4x Plasma Exciter + 12x Steel + 12x Stone Brick → 1x Oil Extractor (Assembler)
- Water Pump
  - 2x Circuit Board + 4x Electric Motor + 8x Iron Ingot + 4x Stone Brick → 1x Water Pump (Assembler)
- Orbital Collector
  - 1x Interstellar Logistics Station + 10x Photon Combiner + 10x Reinforced Thruster → 1x Orbital Collector (Assembler, 6s)

### Logistics
- Conveyor Belt Mk.III
  - Internal precursors (not tracked mall outputs, removed 2026-08-12): 2x Iron Ingot + 1x Gear → 1x Conveyor Belt Mk.I; 3x Conveyor Belt Mk.I + 1x Electromagnetic Turbine → 1x Conveyor Belt Mk.II
  - 3x Conveyor Belt Mk.II + 1x Graphene + 1x Super-Magnetic Ring → 1x Conveyor Belt Mk.III (Assembler)
- Pile Sorter
  - Internal precursors (not tracked mall outputs, removed 2026-08-12): 1x Circuit Board + 1x Iron Ingot → 1x Sorter Mk.I; 1x Electric Motor + 2x Sorter Mk.I → 1x Sorter Mk.II; 2x Sorter Mk.II + 1x Electromagnetic Turbine → 1x Sorter Mk.III
  - 2x Sorter Mk.III + 1x Processor + 1x Super-Magnetic Ring → 1x Pile Sorter (Assembler)
- Splitter
  - 1x Circuit Board + 2x Gear + 3x Iron Ingot → 1x Splitter (Assembler)
- Spray Coater
  - 4x Steel + 2x Plasma Exciter + 2x Circuit Board + 2x Microcrystalline Component → 1x Spray Coater (Assembler, 3s)
- Logistics Distributor
  - 8x Iron Ingot + 4x Plasma Exciter + 4x Processor → 1x Logistics Distributor (Assembler, 8s)
- Planetary Logistics Station (PLS)
  - 20x Particle Container + 40x Processor + 40x Steel + 40x Titanium Ingot → 1x Planetary Logistics Station (Assembler)
- Interstellar Logistics Station (ILS)
  - 1x Planetary Logistics Station + 20x Particle Container + 40x Titanium Alloy → 1x Interstellar Logistics Station (Assembler)
- Logistics Bot
  - 2x Iron Ingot + 1x Engine + 1x Processor → 1x Logistics Bot (Assembler)
- Logistics Drone
  - 2x Thruster + 5x Iron Ingot + 2x Processor → 1x Logistics Drone (Assembler)
- Interstellar Logistics Vessel
  - 2x Reinforced Thruster + 10x Processor + 10x Titanium Alloy → 1x Interstellar Logistics Vessel (Assembler)

### Storage
- Storage Mk.I / II
  - Mk.I: 4x Iron Ingot + 4x Stone Brick → 1x Storage Mk.I (Assembler)
  - Mk.II: 8x Steel + 8x Stone Brick → 1x Storage Mk.II (Assembler)

### Production
- Negentropy Smelter
  - Internal precursors (not tracked mall outputs, removed 2026-08-13): 4x Iron Ingot + 2x Stone Brick + 4x Circuit Board + 2x Magnetic Coil → 1x Arc Smelter; 1x Arc Smelter + 5x Frame Material + 4x Plane Filter + 15x Unipolar Magnet → 1x Plane Smelter
  - 1x Plane Smelter + 10x Negentropy Singularity + 30x Energy Shard + 4x Quantum Chip → 1x Negentropy Smelter (Assembler, 6s)
- Re-composing Assembler
  - Internal precursors (not tracked mall outputs): 4x Iron Ingot + 8x Gear + 4x Circuit Board → 1x Assembling Machine Mk.I (removed 2026-08-13); 1x Assembling Machine Mk.I + 8x Graphene + 4x Processor → 1x Assembling Machine Mk.II; 1x Assembling Machine Mk.II + 8x Particle Broadband + 2x Quantum Chip → 1x Assembling Machine Mk.III
  - 1x Assembling Machine Mk.III + 10x Matter Recombinator + 30x Energy Shard + 4x Quantum Chip → 1x Re-composing Assembler (Assembler, 5s)
- Quantum Chemical Plant
  - Internal precursor (not a tracked mall output, removed 2026-08-13): 2x Circuit Board + 8x Glass + 8x Steel + 8x Stone Brick → 1x Chemical Plant
  - 1x Chemical Plant + 10x Titanium Glass + 3x Strange Matter + 3x Quantum Chip → 1x Quantum Chemical Plant (Assembler, 10s)
- Oil Refinery
  - 6x Circuit Board + 6x Plasma Exciter + 10x Steel + 10x Stone Brick → 1x Oil Refinery (Assembler)
- Fractionator
  - 4x Glass + 1x Processor + 8x Steel + 4x Stone Brick → 1x Fractionator (Assembler)
- Miniature Particle Collider
  - 20x Frame Material + 10x Graphene + 50x Super-Magnetic Ring + 8x Processor + 20x Titanium Alloy → 1x Miniature Particle Collider (Assembler)
- Matrix Lab
  - 4x Circuit Board + 4x Glass + 8x Iron Ingot + 4x Magnetic Coil → 1x Matrix Lab (Assembler)
- Self-evolution Lab
  - 1x Matrix Lab + 10x Silicon-Based Neuron + 20x Dark Fog Matrix + 4x Quantum Chip → 1x Self-Evolution Lab (Assembler, 4s)

### Transportation
- EM-Rail Ejector
  - 20x Gear + 10x Super-Magnetic Ring + 5x Processor + 20x Steel → 1x EM-Rail Ejector (Assembler)
- Vertical Launching Silo
  - 30x Frame Material + 20x Graviton Lens + 10x Quantum Chip + 80x Titanium Alloy → 1x Vertical Launching Silo (Assembler)

### Defense (Dark Fog)
- Laser Turret
  - 9x Steel + 6x Plasma Exciter + 6x Circuit Board + 9x Photon Combiner → 1x Laser Turret (Assembler, 6s)
- Plasma Turret
  - 20x Titanium Alloy + 10x Titanium Glass + 10x Super-Magnetic Ring + 5x Plasma Exciter + 5x Processor → 1x Plasma Turret (Assembler, 10s)
- Missile Turret
  - 8x Steel + 6x Electric Motor + 12x Circuit Board + 6x Engine → 1x Missile Turret (Assembler, 6s)
- Signal Tower
  - 2x Wireless Power Tower + 12x Steel + 6x Crystal Silicon → 1x Signal Tower (Assembler, 6s)
- Planetary Shield Generator
  - 20x Steel + 20x Electromagnetic Turbine + 5x Super-Magnetic Ring + 5x Particle Container → 1x Planetary Shield Generator (Assembler, 10s)
- Battlefield Analysis Base
  - 12x Steel + 18x Circuit Board + 6x Microcrystalline Component + 12x Engine → 1x Battlefield Analysis Base (Assembler, 6s)

### Fleet / Combat
- Attack Drone
  - Internal precursor (not a tracked mall output, removed 2026-08-13; shared with Precision Drone below): 3x Iron Ingot + 1x Engine + 2x Circuit Board + 1x Plasma Exciter → 1x Prototype
  - 1x Prototype + 1x Electromagnetic Turbine + 1x Processor + 1x Particle Container → 1x Attack Drone (Assembler, 4s)
- Precision Drone
  - Uses the same inline Prototype precursor as Attack Drone above.
  - 1x Prototype + 1x Electromagnetic Turbine + 2x Circuit Board + 2x Photon Combiner → 1x Precision Drone (Assembler, 4s)
- Corvette
  - 5x Titanium Alloy + 1x Reinforced Thruster + 2x Processor + 3x Particle Container → 1x Corvette (Assembler, 5s)
- Destroyer
  - 20x Frame Material + 4x Reinforced Thruster + 4x Processor + 1x Strange Matter → 1x Destroyer (Assembler, 8s)
- Gravity Missile Set
  - 3x Supersonic Missile Set + 6x Crystal Explosive Unit + 3x Strange Matter → 3x Gravity Missile Set (Assembler, 6s)
- Antimatter Capsule
  - 1x Plasma Capsule + 1x Particle Container + 10x Hydrogen + 10x Antimatter → 1x Antimatter Capsule (Assembler, 2s) — cannot be Replicator-duplicated

### Environment / Utility
- Foundation
  - 3x Stone Brick + 1x Steel → 1x Foundation (Assembler)
- Holo Beacon
  - 3x Iron Ingot + 4x Prism + 2x Plasma Exciter + 2x Circuit Board → 1x Holo Beacon (Assembler, 4s)

## Production Groups (draft — needs your review)

Grouped by shared ingredients so each cluster can realistically run off one
feeder line. Demand tiers (Low/Med/High) are a first-pass guess based on
typical usage volume — correct these as we go, per your note that
drones/bots/satellite substations etc. need much higher throughput than
one-off items like ILS.

### Tier-chain groups (locked — each tier requires the previous as an ingredient)
1. **Belt line** — Conveyor Belt Mk.III (High) — Mk.I/Mk.II removed from tracking 2026-08-12, still built inline as Mk.III's precursors
2. **Sorter line** — Pile Sorter (High) — Sorter Mk.I/II/III removed from tracking 2026-08-12, still built inline as Pile Sorter's precursors
3. **Assembler line** — Re-composing Assembler (High) — Mk.I, Mk.II, and Mk.III are all now built inline as Re-composing Assembler's precursors (Mk.I removed from tracking 2026-08-13), none tracked as their own mall outputs anymore. This tier-chain row is now fully absorbed into 🔒 Group 3.
4. **Smelter line** — Negentropy Smelter (High) — Arc Smelter and Plane Smelter are both now built inline as Negentropy Smelter's precursors (removed from tracking 2026-08-13). This tier-chain row is now fully absorbed into 🔒 Group 3.

### Ingredient-cluster groups
5. **Wireless power chain** (shares Tesla Tower as sub-component) — Tesla Tower (Med), Wireless Power Tower (Med), Satellite Substation (High), Signal Tower (Low)
6. **Magnetic Coil / Matrix Lab line** — Matrix Lab (Med), Self-evolution Lab (Low) — stale row, superseded by 🔒 Group 3; Wind Turbine dropped from mall 2026-08-12
7. **Endgame Titanium+Frame Material+Quantum Chip** — Advanced Mining Machine (Low-Med), Vertical Launching Silo (Low), Artificial Star (Low)
8. **Titanium+Super-Magnetic Ring+Processor** — Miniature Particle Collider (Low), Plasma Turret (Med)
9. **Basic extractors** — Oil Extractor (Low-Med), Water Pump (Low-Med)
10. **Steel+Stone Brick+Circuit Board** — Oil Refinery (Med), Chemical Plant (Med)
11. **Processor+Steel** — Fractionator (Low), EM-Rail Ejector (Low)
12. **Stone Brick basics** — Storage Mk.I (Low), Storage Mk.II (Low), Foundation (High)
13. **Plasma Exciter+Circuit Board mid-tier** — Splitter (High), Logistics Distributor (Med), Spray Coater (Med), Holo Beacon (Low)

14. **Particle Container / PLS chain** — PLS (Low), ILS (Low), Antimatter Capsule (Low)
15. **Thruster fleet** — Logistics Drone (High), Interstellar Logistics Vessel (Low), Corvette (Low-Med), Destroyer (Low)
16. **Engine cluster** — Logistics Bot (High), Missile Turret (Med), Battlefield Analysis Base (Low) — stale row; Prototype removed from tracking 2026-08-13
17. **Electromagnetic Turbine cluster** — Attack Drone (High), Precision Drone (Med), Planetary Shield Generator (Low)
18. **Photon Combiner** — Ray Receiver (Low-Med), Laser Turret (Med)
19. **Strange Matter** — Quantum Chemical Plant (Low), Gravity Missile Set (Med)

## Ingredient-Sharing View (new — every item mapped to the ingredients it needs)

This is the reverse index of the category list above: for each direct ingredient,
which items consume it, and how much per unit. Ranked by item-count so the top
of the list is where a shared feeder belt pays off most. This is the view to
design the floor plan from — route one belt of the ingredient down the row and
splitter off into every assembler listed under it.

### Tier 1 — Core feeders (8+ items share these; build dedicated belts)

**Circuit Board** (15 items, incl. 4 untracked intermediates) — Oil Extractor 6x, Water Pump 2x, Splitter 1x, Spray Coater 2x, Arc Smelter 4x (untracked, built inline for Negentropy Smelter), Assembling Machine Mk.I 4x (untracked, built inline for Re-composing Assembler), Chemical Plant 2x (untracked, built inline for Quantum Chemical Plant), Oil Refinery 6x, Matrix Lab 4x, Missile Turret 12x, Laser Turret 6x, Battlefield Analysis Base 18x, Precision Drone 2x, Prototype 2x (untracked, built inline for Attack Drone/Precision Drone), Holo Beacon 2x

**Iron Ingot** (12 items, incl. 3 untracked intermediates) — Tesla Tower 2x, Water Pump 8x, Splitter 3x, Logistics Distributor 8x, Logistics Bot 2x, Logistics Drone 5x, Storage Mk.I 4x, Arc Smelter 4x (untracked, built inline for Negentropy Smelter), Assembling Machine Mk.I 4x (untracked, built inline for Re-composing Assembler), Matrix Lab 8x, Prototype 3x (untracked, built inline for Attack Drone/Precision Drone), Holo Beacon 3x

**Steel** (15 items, incl. 1 untracked intermediate) — Ray Receiver 20x, Oil Extractor 12x, Spray Coater 4x, PLS 40x, Storage Mk.II 8x, Chemical Plant 8x (untracked, built inline for Quantum Chemical Plant), Oil Refinery 10x, Fractionator 8x, EM-Rail Ejector 20x, Laser Turret 9x, Missile Turret 8x, Signal Tower 12x, Planetary Shield Generator 20x, Battlefield Analysis Base 12x, Foundation 1x

**Processor** (14 items, incl. 1 untracked intermediate) — Ray Receiver 5x, Logistics Distributor 4x, PLS 40x, Logistics Bot 1x, Logistics Drone 2x, Interstellar Logistics Vessel 10x, Assembling Machine Mk.II 4x (untracked, built inline for Re-composing Assembler), Fractionator 1x, Miniature Particle Collider 8x, EM-Rail Ejector 5x, Plasma Turret 5x, Attack Drone 1x, Corvette 2x, Destroyer 4x

**Stone Brick** (9 items, incl. 2 untracked intermediates) — Oil Extractor 12x, Water Pump 4x, Storage Mk.I 4x, Storage Mk.II 8x, Arc Smelter 2x (untracked, built inline for Negentropy Smelter), Chemical Plant 8x (untracked, built inline for Quantum Chemical Plant), Oil Refinery 10x, Fractionator 4x, Foundation 3x

**Plasma Exciter** (9 items, incl. 1 untracked intermediate) — Wireless Power Tower 3x, Oil Extractor 4x, Spray Coater 2x, Logistics Distributor 4x, Oil Refinery 6x, Plasma Turret 5x, Laser Turret 6x, Prototype 1x (untracked, built inline for Attack Drone/Precision Drone), Holo Beacon 2x

**Super-Magnetic Ring** (9 items) — Ray Receiver 20x, Satellite Substation 10x, Advanced Mining Machine 10x, Conveyor Belt Mk.III 1x, Pile Sorter 1x, Miniature Particle Collider 50x, EM-Rail Ejector 10x, Plasma Turret 10x, Planetary Shield Generator 5x

**Titanium Alloy** (8 items) — Artificial Star 20x, Advanced Mining Machine 20x, ILS 40x, Interstellar Logistics Vessel 10x, Miniature Particle Collider 20x, Vertical Launching Silo 80x, Plasma Turret 20x, Corvette 5x

**Quantum Chip** (8 items, incl. 1 untracked intermediate) — Artificial Star 10x, Advanced Mining Machine 4x, Negentropy Smelter 4x, Assembling Machine Mk.III 2x (untracked, built inline for Re-composing Assembler), Re-composing Assembler 4x, Quantum Chemical Plant 3x, Self-evolution Lab 4x, Vertical Launching Silo 10x

### Tier 2 — Secondary feeders (4–7 items)

**Frame Material** (7) — Satellite Substation 2x, Artificial Star 20x, Advanced Mining Machine 10x, Plane Smelter 5x, Miniature Particle Collider 20x, Vertical Launching Silo 30x, Destroyer 20x

**Particle Container** (6) — PLS 20x, ILS 20x, Planetary Shield Generator 5x, Attack Drone 1x, Corvette 3x, Antimatter Capsule 1x

**Gear** (3, incl. 1 untracked intermediate) — Splitter 2x, Assembling Machine Mk.I 8x (untracked, built inline for Re-composing Assembler), EM-Rail Ejector 20x

**Electromagnetic Turbine** (3) — Planetary Shield Generator 20x, Attack Drone 1x, Precision Drone 1x

**Magnetic Coil** (3, incl. 1 untracked intermediate) — Tesla Tower 1x, Arc Smelter 2x (untracked, built inline for Negentropy Smelter), Matrix Lab 4x

**Engine** (4, incl. 1 untracked intermediate) — Logistics Bot 1x, Missile Turret 6x, Battlefield Analysis Base 12x, Prototype 1x (untracked, built inline for Attack Drone/Precision Drone)

### Tier 3 — Minor shared ingredients (2–3 items; only worth a shared belt if those items sit near each other anyway)

- **Glass** (3, incl. 1 untracked intermediate) — Chemical Plant 8x (untracked, built inline for Quantum Chemical Plant), Fractionator 4x, Matrix Lab 4x
- **Electric Motor** (2) — Water Pump 4x, Missile Turret 6x
- **Graphene** (3, incl. 1 untracked intermediate) — Conveyor Belt Mk.III 1x, Assembling Machine Mk.II 8x (untracked, built inline for Re-composing Assembler), Miniature Particle Collider 10x
- **Photon Combiner** (4) — Ray Receiver 10x, Laser Turret 9x, Precision Drone 2x, Orbital Collector 10x
- **Reinforced Thruster** (4) — Interstellar Logistics Vessel 2x, Corvette 1x, Destroyer 4x, Orbital Collector 10x
- **Strange Matter** (3) — Quantum Chemical Plant 3x, Destroyer 1x, Gravity Missile Set 3x
- **Wireless Power Tower** (2, as sub-component) — Satellite Substation 1x, Signal Tower 2x
- **Prototype** (2, as sub-component) — Attack Drone 1x, Precision Drone 1x
- **Microcrystalline Component** (2) — Spray Coater 2x, Battlefield Analysis Base 6x
- **Energy Shard** (2) — Negentropy Smelter 30x, Re-composing Assembler 30x
- **Titanium Glass** (2) — Plasma Turret 10x, Quantum Chemical Plant 10x

### Unique — used by only one item (no grouping benefit, route as a spur off its own line)

High-Purity Silicon (Ray Receiver), Grating Crystal (Advanced Mining Machine), Titanium Ingot (PLS), Crystal Silicon (Signal Tower), Annihilation Constraint Sphere (Artificial Star), Plane Filter & Unipolar Magnet (Plane Smelter), Negentropy Singularity (Negentropy Smelter), Particle Broadband (Assembling Machine Mk.III), Matter Recombinator (Re-composing Assembler), Silicon-Based Neuron & Dark Fog Matrix (Self-evolution Lab), Graviton Lens (Vertical Launching Silo), Crystal Explosive Unit & Supersonic Missile Set (Gravity Missile Set), Plasma Capsule / Hydrogen / Antimatter (Antimatter Capsule), Prism (Holo Beacon)

### Note on the tier-chains (Belt/Sorter/Assembler/Smelter Mk.I→III)

Updated 2026-08-13: the Assembler chain (Mk.I→II→III) and Smelter chain (Arc
Smelter→Plane Smelter) are now **fully absorbed into 🔒 Group 3** as inline
precursors of Re-composing Assembler and Negentropy Smelter respectively —
none of their stages are tracked mall outputs anymore, so they no longer get
their own floor-plan rows. Only the Belt chain (→ Conveyor Belt Mk.III, in
🔒 Group 4) and Sorter chain (→ Pile Sorter, also in 🔒 Group 4) still work
this way. Each chain's intermediate stages still draw their *other* inputs
(Iron Ingot, Circuit Board, Steel, Processor, Gear, etc.) from the Tier 1/2
feeder belts as before — that part is unchanged, just now happening inside
Group 3/4's footprint rather than a separate standalone row.

## Recipe-Overlap Clusters (what you actually asked for — items grouped by shared FULL ingredient sets)

The "Ingredient-Sharing View" above answers "which items touch this one ingredient"
(too broad — nearly everything touches Iron Ingot). This section answers the real
question: **which items are built from almost the same basket of ingredients**,
so a handful of feeder belts can produce several finished items with only one or
two extra spurs per item. Ranked by overlap strength.

### Identical ingredient sets (same inputs, different quantities — build side-by-side, same belts, zero extra spurs)
- **Storage Mk.II + Foundation** — both just Steel + Stone Brick
- **Oil Extractor + Oil Refinery** — both Circuit Board + Plasma Exciter + Steel + Stone Brick
- ~~Splitter + Assembling Machine Mk.I~~ — moot: Assembling Machine Mk.I removed from tracking 2026-08-13 (now built inline in 🔒 Group 3). Splitter has no remaining shared-belt partner from this pairing.

### Strong overlap (3 of 4 ingredients shared — one extra spur per item)
- ~~Iron Ingot + Magnetic Coil + Circuit Board core — Arc Smelter~~ — moot: Arc Smelter removed from tracking 2026-08-13 (now built inline in 🔒 Group 3, feeding Negentropy Smelter). Matrix Lab (the other former member of this cluster) is also already in 🔒 Group 3.
- **Steel + Circuit Board + Engine core** — Missile Turret (+Electric Motor), Battlefield Analysis Base (+Microcrystalline Component)
- **Steel + Circuit Board + Plasma Exciter core** — Laser Turret (+Photon Combiner), Spray Coater (+Microcrystalline Component)
- ~~Iron Ingot + Circuit Board + Plasma Exciter core — Prototype, Holo Beacon~~ — moot: Prototype removed from tracking 2026-08-13 (now built inline, shared precursor for Attack Drone/Precision Drone in 🧪 Group 5). Holo Beacon has no remaining shared-belt partner from this pairing.
- **Titanium Alloy + Processor + Reinforced Thruster core** — Interstellar Logistics Vessel (exact subset, no extra), Corvette (+Particle Container)
- ~~Steel + Glass + Stone Brick core — Chemical Plant, Fractionator~~ — moot: Chemical Plant removed from tracking 2026-08-13 (now built inline for Quantum Chemical Plant, in the tentative Strange Matter Line group). Fractionator has no remaining shared-belt partner from this pairing.

### Moderate overlap (2 shared ingredients — worth co-locating, 2 extra spurs per item)
- ~~Iron Ingot + Magnetic Coil base — Tesla Tower, Wind Turbine~~ — moot: Tesla Tower is locked in Group 1, Wind Turbine dropped from the mall entirely 2026-08-12
- **Prototype + Electromagnetic Turbine base** — Attack Drone (+Processor, +Particle Container), Precision Drone (+Circuit Board, +Photon Combiner)
- **Frame Material + Titanium Alloy + Quantum Chip base** — Artificial Star (+Annihilation Constraint Sphere), Vertical Launching Silo (+Graviton Lens), Advanced Mining Machine (+Super-Magnetic Ring, +Grating Crystal)
- **Super-Magnetic Ring + Titanium Alloy + Processor base** — Miniature Particle Collider (+Frame Material, +Graphene), Plasma Turret (+Plasma Exciter, +Titanium Glass)
- **Photon Combiner base** — ties Orbital Collector loosely to Ray Receiver / Laser Turret / Precision Drone (each shares just Photon Combiner, nothing else)

### Sub-component chains (one item's *output* is a direct ingredient of the next — build the feeder first, tap it twice)
- **Wireless Power Tower chain** — Wireless Power Tower → feeds both Satellite Substation and Signal Tower
  - Factoriolab planner for the full **Tesla Tower → Wireless Power Tower → Satellite Substation** sequence: https://factoriolab.github.io/dsp/list?z=eJwdxbEKgzAUBdC.ecMdim9xu8sLKJQgLaXQ7GYINgiBSqb37UWXc3ZahA6SifvJLI32AgZpfJ5VBqhUpstyGaFScqfdpOXOBxJWbPihY4QtsDfsA9vcvgiTh1lqbQyevHiUg6p.Rt0g5A__&v=11
- **Prototype chain** — Prototype → feeds both Attack Drone and Precision Drone (this is why the "Prototype + Electromagnetic Turbine" cluster above works: build Prototype once, split it into both drones)
- **PLS → ILS → Orbital Collector chain** — PLS feeds ILS directly, and ILS is itself a direct ingredient of Orbital Collector (1x ILS per Orbital Collector). So this is a 3-deep chain: build PLS, tap it into ILS, and tap ILS again into Orbital Collector.

### No meaningful overlap with anything else — SUPERSEDED 2026-08-13
As of 2026-08-13 every tracked item has been placed into a locked or
tentative group (see the group sections below), so this "leftover" list no
longer applies. Kept only as historical record: this section originally
listed Water Pump, Logistics Bot, Logistics Drone, Storage Mk.I, Quantum
Chemical Plant, Antimatter Capsule, Gravity Missile Set, and Destroyer as
having no meaningful overlap. Since then: Water Pump → 🧪 Group 7,
Logistics Bot → 🧪 Group 8, Logistics Drone → 🧪 Group 9, Storage Mk.I →
🧪 Group 7, Quantum Chemical Plant/Gravity Missile Set/Destroyer → 🧪 Group 2
(Strange Matter Line), Antimatter Capsule → 🧪 Group 5.

### 🔒 LOCKED Group 1: Power & Energy Line
**Tesla Tower, Satellite Substation, Wireless Power Tower, Advanced Mining Machine, Artificial Star, Vertical Launching Silo.**

Locked 2026-08-09, corrected same day to add Vertical Launching Silo back in
— no further changes to this group's membership. (Superseded two earlier
drafts: the original 5-item version that used only Vertical Launching Silo
without Advanced Mining Machine, and a 6-item version that added Wind Turbine
alongside Tesla Tower instead. This final list keeps both Advanced Mining
Machine and Vertical Launching Silo, and drops Wind Turbine.)

**Blueprint**: `Planetary Mall Pieces\Planetary Mall 1 of 10.txt` (committed
2026-08-09, part of the blueprint sync) is the in-game build for this group.

Ingredient logic (for reference — group composition itself is locked, not this reasoning):
- **Tesla Tower** (Iron Ingot + Magnetic Coil) → feeds **Wireless Power Tower**
  (+ Plasma Exciter) → feeds **Satellite Substation** (+ Frame Material,
  Super-Magnetic Ring) — the sub-component chain
- **Satellite Substation** shares its **Frame Material** input with
  **Artificial Star** (+ Quantum Chip, Titanium Alloy, Annihilation Constraint
  Sphere), **Advanced Mining Machine** (+ Quantum Chip, Titanium Alloy,
  Super-Magnetic Ring, Grating Crystal), and **Vertical Launching Silo**
  (+ Quantum Chip, Titanium Alloy, Graviton Lens) — Advanced Mining Machine
  additionally ties back to Satellite Substation via Super-Magnetic Ring

Practical layout: run the Tesla Tower → Wireless Power Tower → Satellite
Substation sub-chain first, then continue the Frame Material belt past
Satellite Substation down to Artificial Star, Advanced Mining Machine, and
Vertical Launching Silo, picking up Quantum Chip + Titanium Alloy spurs (plus
Super-Magnetic Ring for Advanced Mining Machine, Graviton Lens for Vertical
Launching Silo) for those last three.

Factoriolab planner (covers Tesla Tower, Wireless Power Tower, Satellite
Substation, Artificial Star, Vertical Launching Silo — predates the Advanced
Mining Machine addition, kept for the Tesla Tower sub-chain reference):
https://factoriolab.github.io/dsp/list?z=eJwlxbEKwjAUBdC.ecMdJFnc7vICFiSIIoLdzRBqbEmpZHrfLo3LOTM1wjuZ-fmnThJx3hmkUu-Ak8rbXmGAl8Kxm7uxu3YXeMmpUQ9SU-MVI16YsKHhCL1AH9AndDJ9I5wsDFJK5WqLZYvypfc.dVUncw__&v=11

### 🔒 LOCKED Group 3: Matrix Lab, Self-evolution Lab, Negentropy Smelter, Re-composing Assembler

Locked 2026-08-12. Anchored on Quantum Chip (Self-evolution Lab, Negentropy
Smelter, and Re-composing Assembler all consume it directly) plus the
Matrix Lab → Self-evolution Lab sub-component chain.

Ingredient logic (for reference — group composition itself is locked, not this reasoning):
- **Matrix Lab** (Iron Ingot + Circuit Board + Glass + Magnetic Coil) → feeds
  **Self-evolution Lab** (+ Silicon-Based Neuron, Dark Fog Matrix, Quantum Chip)
  — sub-component chain
- **Negentropy Smelter** (Plane Smelter + Negentropy Singularity + Energy
  Shard + Quantum Chip) shares Quantum Chip with Self-evolution Lab and
  Re-composing Assembler, and shares Energy Shard with Re-composing Assembler
- **Re-composing Assembler** (Assembling Machine Mk.III [built inline, not a
  tracked output — see note above] + Matter Recombinator + Energy Shard +
  Quantum Chip)

Practical layout: run Iron Ingot + Circuit Board + Glass + Magnetic Coil into
Matrix Lab first, tap its output into Self-evolution Lab alongside Silicon-
Based Neuron and Dark Fog Matrix spurs. Route a shared Quantum Chip belt past
Self-evolution Lab, Negentropy Smelter, and Re-composing Assembler; route a
shared Energy Shard belt past Negentropy Smelter and Re-composing Assembler.
Negentropy Smelter and Re-composing Assembler each build their full precursor
chains inline (Arc Smelter → Plane Smelter → Negentropy Smelter; Assembling
Machine Mk.I → Mk.II → Mk.III → Re-composing Assembler) — none of those
precursor stages are tracked as their own mall outputs anymore (updated
2026-08-13).

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJw1iLEOgjAURf.mDXcw1KjbW14TUINRY0yAUSBatYEUNUz9dkOryzn33I7TBsuEOk4rqCSMOoyWsZ2QkWM5AQk5PkZVUVIDihzrIrY-RKe3X69.fY3eRP3fZrJlDUWWy0ATmAcOgT0UmXZkmZG5tKzJDC9ekGtH3qPwJRo88MaIFWQHOUMKSA25Q56QOXTqdUbWOh58743PyfYDZ.Rhpb6dk0NT&v=11

Note: Quantum Chemical Plant, previously considered for this group, stays
out — it remains in the tentative Strange Matter Line group below instead.

### 🔒 LOCKED Group 2: Strange Matter Line
**Quantum Chemical Plant, Destroyer, Gravity Missile Set, Interstellar Logistics Vessel, Corvette.**

Locked 2026-08-15 — no further changes to this group's membership.

Anchored on Strange Matter (Quantum Chemical Plant, Destroyer, Gravity Missile
Set all use it), extended with Interstellar Logistics Vessel and Corvette
since both bridge in via Reinforced Thruster + Processor overlap with
Destroyer. Gravity Missile Set itself doesn't share anything beyond Strange
Matter with the rest of the group — it's along for the ride on that one
ingredient.

**Next up:** the Quantum Chip group is now locked as 🔒 Group 3 (2026-08-12,
see above). The Frame Material group is now empty — its last member,
Miniature Particle Collider, moved into the 🧪 Super-Magnetic Ring /
Processor Cluster below (2026-08-13). Plane Smelter removed 2026-08-12
(handled as Group 3's Negentropy Smelter tier-chain precursor); Orbital
Collector removed 2026-08-12 (recipe corrected — no Frame Material). Once
Strange Matter Line finalizes, no queued group remains — revisit the
remaining ungrouped items list fresh.

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJwtx7EOgjAURuG3ucM.GKqi011uE0gMMRg1gKPIULFCihqmPruBspwvp2N9QRxRx6tA8lx8L7qgFNjEkz32ETWMw5SUHMsZiMjxKXALSA0ocqzL8DqftKyhyHI118zN5g5zeygyzciyInNvWJMZPrwl14yco0CFB1p8MWIHOUKukBJSQ1ovL8gaOvE6JWsdD773xmdk-4FT-rFSf9x0P4g_&v=11

### 🔒 LOCKED Group 4: Super-Magnetic Ring / Processor Cluster
**Conveyor Belt Mk.III, Pile Sorter, Ray Receiver, Miniature Particle Collider, Logistics Distributor.**

Locked 2026-08-13 (previously an unnumbered/then Group 2 tentative group;
renumbered to Group 4 and locked — Strange Matter Line above took over the
Group 2 slot). Anchored on
Super-Magnetic Ring (Conveyor Belt Mk.III, Pile Sorter, Ray Receiver,
Miniature Particle Collider all use it directly) plus Processor, which
extends the group to Logistics Distributor (ties to Pile Sorter, Miniature
Particle Collider, and Ray Receiver). EM-Rail Ejector, Plasma Turret, and
Planetary Shield Generator also use Super-Magnetic Ring but were explicitly
excluded from this group.

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJwlx7uOwjAUhOG3OcUUKAYWhWKaY4mgVRaBEBAogRQWayVyuKTys6PEzf.NNNzAZHkmDdcnzBbD0ArTXBp-YH6kod0PtyZ-hxQSqHsgk8Bd4pLQG2Ak0Fbp223yL1Em1sfkMpEPeFoY8TyPdWPLsd3YFkZc3VMn4q41rbjuybmEuucWJ5xxxwMv9FhAN9ADtILeoI-o.9Ap7CraQrwP7GIbXSzFtx0LedOYL5cQRDE_&v=11

### 🧪 TENTATIVE Group 5: EM-Rail Ejector, Plasma Turret, Planetary Shield Generator, Attack Drone, Precision Drone, Antimatter Capsule

Numbered 5 per user request (gap before it: Group 4, the Super-Magnetic
Ring / Processor Cluster above, is now locked; Group 3 is the unrelated
locked Matrix Lab group — not this one).

Core (EM-Rail Ejector, Plasma Turret, Planetary Shield Generator) anchored on
Super-Magnetic Ring, extended with:
- **Attack Drone** — strongest add, shares Electromagnetic Turbine, Processor,
  AND Particle Container with the core (Electromagnetic Turbine ties to
  Planetary Shield Generator; Processor ties to EM-Rail Ejector and Plasma
  Turret; Particle Container ties to Planetary Shield Generator)
- **Precision Drone** — comes along with Attack Drone via their existing
  shared Prototype + Electromagnetic Turbine sub-chain (build Prototype once,
  split into both drones)
- **Antimatter Capsule** — ties in via Particle Container, shared with
  Planetary Shield Generator and Attack Drone

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJwtx8sKwjAQRuG3mcW.EFO16mI2E7AiVRTxuvMSJWhoSVXqJs8ubdycj1OwQW9IBU.OSJLG098vBmnj.e8NSiVkGLMmGXmWNdAlz6vIMSIXQJFnvY-vl9F5JI9Mt9FxZNTgWEOR40Nb2zZvW7UtociamqVD9mxYk61e3Cdval5ihwOueOCNGilkAdlA9pAL5BHkCUmgJ0Fn5JznKpTBhpxcWXFGH1bqB9H4RmU_&v=11

### 🧪 TENTATIVE Group 6: Plasma Exciter + Circuit Board + Steel Cluster
**Oil Extractor, Oil Refinery, Laser Turret, Spray Coater.**

Oil Extractor and Oil Refinery share an identical ingredient set (Circuit
Board + Plasma Exciter + Steel + Stone Brick). Laser Turret and Spray Coater
share the same 3-ingredient core (Circuit Board + Plasma Exciter + Steel),
each adding one unique item (Photon Combiner / Microcrystalline Component).

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJwlx7sKwkAQRuG3meIvxI23WEwzC0YlSkTUaKmmWHRJ2Kik2meXZJrzcWqWDZKUapYtJguqeVWq4rCYUcXY9skosByBMQU-KDdFHoChwLbUt4W6U3JlfVaXStrj2cKQ5-tQNzQf2g5tYMhVHcuI3L1iS6798JRC1XGBC6544oUvOswhe8gJUkIekFeUNySBXUWbkfeB29hEF3PyTcsZ.diYP3mxQg8_&v=11

### 🔒 LOCKED Group 7: Steel + Stone Brick / Iron Ingot Cluster
**Fractionator, Storage Mk.II, Foundation, Water Pump, Splitter, Storage Mk.I.**

Locked 2026-08-15 — no further changes to this group's membership.

Two merged sub-cores: Storage Mk.II + Foundation are an identical Steel +
Stone Brick pair, extended by Fractionator (Steel + Stone Brick + Glass +
Processor). Water Pump, Splitter, and Storage Mk.I are tied together by Iron
Ingot instead. The two sub-cores don't fully overlap with each other (e.g.
Water Pump/Splitter don't share Steel or Glass with Fractionator/Storage
Mk.II/Foundation), so this group will need more individual spurs on the
floor plan than the tighter groups.

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJw1yMsKwjAQheG3mcVZSFK8LmYzAStSRRGvS2vBoNGSqHSVZ5c2uvm.mfPkK0YDerI8MBi2OmidtUf2G67.IUArpRRVjHmbnDzLBlDkeZ04JaQENHk2h.SbVXKRKBKzXXKSGLc4NtDk-NjVdi26hq41NNmqYemRPVdsyIYX98lXDa-wxxEX3PBGgyFkCdlCDpAScotyh2Qw02hycs5ziHW0sSBXB87pw1p.AXabRvI_&v=11

### 🔒 LOCKED Group 8: Engine Cluster
**Missile Turret, Battlefield Analysis Base, Holo Beacon, Logistics Bot, Signal Tower.**

Locked 2026-08-15 — no further changes to this group's membership.

Missile Turret, Battlefield Analysis Base, and Logistics Bot all use Engine
directly. Missile Turret + Battlefield Analysis Base additionally share
Steel + Circuit Board (3-of-4-ingredient overlap). Holo Beacon and Signal
Tower are the loosest fits here — Holo Beacon's original tie was to
Prototype (now untracked), and Signal Tower has no strong ingredient overlap
with the rest of this group; both are riding along rather than tightly tied.

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJwlx7sKwkAQRuG3meIvxFXxUkzhLCQiUbxrLNUtFl0MG5VU--ySTHM-zpuzEsMJvTk7qHPM-u06jFvtDsYMyDGWbXKKLHugT5G3ylWRO2Aosr3o2426UgplcVJnylSZK5lvDWxhKHDZ1XctutZdKxjyrmHpkb85tuTrD48ouoY3OKPEA0980WAMWUOOkAvkDnkmeUEGsFmyOYUQuU5V8qmgUNWc04-N-QMcp0eU&v=11

### 🔒 LOCKED Group 9: Logistics Sub-Chain
**Planetary Logistics Station (PLS), Interstellar Logistics Station (ILS), Orbital Collector, Logistics Drone.**

Locked 2026-08-15 — no further changes to this group's membership.

Direct production chain: PLS feeds ILS, and ILS is a direct ingredient of
Orbital Collector — build once, tap twice. Logistics Drone ties in via
Processor, shared with PLS.

Factoriolab planner: https://factoriolab.github.io/dsp/list?z=eJwtzMFqwkAUheG3uYsDSkZEmsVZ9A6YYqOopa261GYx6JAw0ZLVPHsxt5v.42xOywlKaTmHm0lLfZeWJVxRSEOsnqkkUT-AQhJ3xsnQC-Ak0R9s-625Nmrj7cssjRfj1VgGc.L.uH8a6eEk8jg2jK3H9mM7OAnNQJ1KODf0Evo755KagVt844gfXPHAgAV0A.2EHqAX6DXrDTqDX2ZfSYyJfe5yyLXErmclv3TuD-CER0Q_&v=11

### Practical takeaway
The three **identical-set pairs** are the easy wins — build them as literally the
same two-input feeder row with two assemblers side by side. The **strong-overlap**
clusters are next best: one shared 3-input belt row, one extra item-specific spur.
Everything in "no meaningful overlap" should just get its own small dedicated
setup rather than trying to force it into a shared line — the previous
Ingredient-Sharing View is still useful for those since it tells you which single
belt (Iron Ingot, Circuit Board, etc.) to tap for their inputs.

## Open questions
- [ ] Trim this list down to only what you actually want the mall to make (full list above is everything possible, not necessarily desired)
- [ ] Target planet / power source for the mall
- [ ] Footprint / layout constraints (belt count, foundation shape, polar vs. equatorial, etc.)
- [ ] Proliferator usage (spray coater tier, which items get sprayed)

## Next steps
- [ ] Finalize item list above
- [ ] Design production chain / floor layout
- [ ] Build and test in-game
- [ ] Export blueprint, save to repo root, sync
