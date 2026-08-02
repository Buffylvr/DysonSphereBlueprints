# New Mall Blueprint — Planning Doc

Started: 2026-07-25

Goal: a single blueprint that produces every item on this list — one
combined mall, not individual per-item pieces.

Full ingredient breakdowns are listed under each item below.

## Target item list

### Power
- Wind Turbine
  - 6x Iron Ingot + 3x Magnetic Coil + 1x Gear → 1x Wind Turbine (Assembler)
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

### Logistics
- Conveyor Belt Mk.I
  - 2x Iron Ingot + 1x Gear → 1x Conveyor Belt Mk.I (Assembler)
- Conveyor Belt Mk.II
  - 3x Conveyor Belt Mk.I + 1x Electromagnetic Turbine → 1x Conveyor Belt Mk.II (Assembler)
- Conveyor Belt Mk.III
  - 3x Conveyor Belt Mk.II + 1x Graphene + 1x Super-Magnetic Ring → 1x Conveyor Belt Mk.III (Assembler)
- Sorter Mk.I
  - 1x Circuit Board + 1x Iron Ingot → 1x Sorter Mk.I (Assembler)
- Sorter Mk.II
  - 1x Electric Motor + 2x Sorter Mk.I → 1x Sorter Mk.II (Assembler)
- Sorter Mk.III
  - 2x Sorter Mk.II + 1x Electromagnetic Turbine → 1x Sorter Mk.III (Assembler)
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
- Arc Smelter
  - 4x Iron Ingot + 2x Stone Brick + 4x Circuit Board + 2x Magnetic Coil → 1x Arc Smelter (Assembler)
- Plane Smelter
  - 1x Arc Smelter + 5x Frame Material + 4x Plane Filter + 15x Unipolar Magnet → 1x Plane Smelter (Assembler)
- Negentropy Smelter
  - 1x Plane Smelter + 10x Negentropy Singularity + 30x Energy Shard + 4x Quantum Chip → 1x Negentropy Smelter (Assembler, 6s)
- Assembling Machine Mk.I / II / III
  - Mk.I: 4x Iron Ingot + 8x Gear + 4x Circuit Board → 1x Assembling Machine Mk.I (Assembler)
  - Mk.II: 1x Assembling Machine Mk.I + 8x Graphene + 4x Processor → 1x Assembling Machine Mk.II (Assembler)
  - Mk.III: 1x Assembling Machine Mk.II + 8x Particle Broadband + 2x Quantum Chip → 1x Assembling Machine Mk.III (Assembler)
- Re-composing Assembler
  - 1x Assembling Machine Mk.III + 10x Matter Recombinator + 30x Energy Shard + 4x Quantum Chip → 1x Re-composing Assembler (Assembler, 5s)
- Chemical Plant
  - 2x Circuit Board + 8x Glass + 8x Steel + 8x Stone Brick → 1x Chemical Plant (Assembler)
- Quantum Chemical Plant
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
  - 1x Prototype + 1x Electromagnetic Turbine + 1x Processor + 1x Particle Container → 1x Attack Drone (Assembler, 4s)
- Precision Drone
  - 1x Prototype + 1x Electromagnetic Turbine + 2x Circuit Board + 2x Photon Combiner → 1x Precision Drone (Assembler, 4s)
- Corvette
  - 5x Titanium Alloy + 1x Reinforced Thruster + 2x Processor + 3x Particle Container → 1x Corvette (Assembler, 5s)
- Destroyer
  - 20x Frame Material + 4x Reinforced Thruster + 4x Processor + 1x Strange Matter → 1x Destroyer (Assembler, 8s)
- Prototype
  - 3x Iron Ingot + 1x Engine + 2x Circuit Board + 1x Plasma Exciter → 1x Prototype (Assembler, 2s)
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
1. **Belt line** — Conveyor Belt Mk.I (High), Mk.II (High), Mk.III (High)
2. **Sorter line** — Sorter Mk.I (High), Mk.II (High), Mk.III (High)
3. **Assembler line** — Assembling Machine Mk.I (High), Mk.II (High), Mk.III (High), Re-composing Assembler (High)
4. **Smelter line** — Arc Smelter (High), Plane Smelter (High), Negentropy Smelter (High)

### Ingredient-cluster groups
5. **Wireless power chain** (shares Tesla Tower as sub-component) — Tesla Tower (Med), Wireless Power Tower (Med), Satellite Substation (High), Signal Tower (Low)
6. **Magnetic Coil / Matrix Lab line** — Wind Turbine (Med), Matrix Lab (Med), Self-evolution Lab (Low)
7. **Endgame Titanium+Frame Material+Quantum Chip** — Advanced Mining Machine (Low-Med), Vertical Launching Silo (Low), Artificial Star (Low)
8. **Titanium+Super-Magnetic Ring+Processor** — Miniature Particle Collider (Low), Plasma Turret (Med)
9. **Basic extractors** — Oil Extractor (Low-Med), Water Pump (Low-Med)
10. **Steel+Stone Brick+Circuit Board** — Oil Refinery (Med), Chemical Plant (Med)
11. **Processor+Steel** — Fractionator (Low), EM-Rail Ejector (Low)
12. **Stone Brick basics** — Storage Mk.I (Low), Storage Mk.II (Low), Foundation (High)
13. **Plasma Exciter+Circuit Board mid-tier** — Splitter (High), Logistics Distributor (Med), Spray Coater (Med), Holo Beacon (Low)

14. **Particle Container / PLS chain** — PLS (Low), ILS (Low), Antimatter Capsule (Low)
15. **Thruster fleet** — Logistics Drone (High), Interstellar Logistics Vessel (Low), Corvette (Low-Med), Destroyer (Low)
16. **Engine cluster** — Logistics Bot (High), Missile Turret (Med), Battlefield Analysis Base (Low), Prototype (Med)
17. **Electromagnetic Turbine cluster** — Attack Drone (High), Precision Drone (Med), Planetary Shield Generator (Low)
18. **Photon Combiner** — Ray Receiver (Low-Med), Laser Turret (Med)
19. **Strange Matter** — Quantum Chemical Plant (Low), Gravity Missile Set (Med)

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
