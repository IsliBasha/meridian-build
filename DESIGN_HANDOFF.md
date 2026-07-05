# Meridian Build — Design Handoff
**For:** Claude Design / redesign session  
**Version:** 1.0 — 2026-07-02  
**Author:** Development team handoff

---

## 1. Project Brief

**What this is:** Website for a mid-to-large NYC commercial construction contractor. Primary services: electrical installation (primary distribution, emergency systems), commercial fit-out, core-and-shell, project management. Est. 2009. Licensed by NYC DOB.

**Primary audience:** Procurement directors, project managers, and principals at developer firms, GC offices, and institutional owners. They are evaluating Meridian as a subcontractor or prime contractor. They open this site on a desktop browser at 10am at a desk. They are not impressed by flash — they are impressed by evidence of competence.

**The problem with the previous design:** It looked generic. Any contractor, any agency, any professional services firm. Nothing in it said "we are specifically different." The type was restrained but meek. The spacing was clean but unmemorable. It felt assembled from a template, not designed with a point of view.

**The brief in one sentence:** Design a site that feels like the buildings Meridian constructs — structural, exposed, honest, built to last.

---

## 2. Design Direction: Neo-Brutalist Industrial

### The Philosophy

Neo-brutalism here is not irony or internet-edginess. It is a literal translation of the company's work ethic into visual language:

- Concrete has exposed aggregate. This site exposes its grid.
- Steel frames are not hidden behind drywall until handover. This site's structure is visible.
- A building's authority comes from its mass. This site's authority comes from typographic mass.

The result should feel like a **structural drawing that learned to breathe** — rigorous, confident, slightly intimidating, but never cold enough to push away a first-time visitor.

### What This Is NOT

- Not Figma-flavored pastel brutalism (rounded tags, playful shadows, personality-first copy)
- Not startup-edgy (no glitch effects, no random rotations, no "we break rules" attitude)
- Not aggressive/punk (the company is 16 years old — this is institutional, not rebellious)
- Not a dark mode flex — light background, dark type, one accent color used sparingly

---

## 3. Visual Identity System

### 3.1 Color

Palette uses OKLCH throughout. All neutrals carry a warm bronze-graphite tint (hue 80) to avoid pure clinical black/white.

```
--color-surface:      oklch(97% 0.006 80)   /* Near-white, warm — page background */
--color-surface-2:    oklch(93% 0.007 80)   /* Slightly darker surface for alt sections */
--color-surface-3:    oklch(88% 0.008 80)   /* Borders, dividers, secondary panels */

--color-text:         oklch(9%  0.006 80)   /* Primary text — near black, not pure */
--color-secondary:    oklch(42% 0.006 80)   /* Secondary text, captions, labels */

--color-accent:       oklch(36% 0.09 180)   /* Deep teal-green — use at <8% coverage */
--color-accent-mid:   oklch(50% 0.09 180)   /* Lighter teal for hover states */
--color-accent-block: oklch(30% 0.10 180)   /* Darkest teal — solid filled CTA sections */

--color-ink:          oklch(5%  0.004 80)   /* Pure-black equivalent — hard borders, heavy rules */
--color-dark:         oklch(12% 0.008 80)   /* Dark panels — footer, dark-section backgrounds */
```

**Color usage rules:**
- `--color-ink` borders: hard 1–2px lines. Never gray borders on white backgrounds in brutalist sections.
- `--color-accent` is used EXACTLY WHERE a builder would put a structural highlight: one key element per section maximum. Not decorative. Functional signal.
- No gradients. No blurs. No glass effects. No shadows with spread.
- Allowed shadows: hard offset only — `box-shadow: 3px 3px 0 var(--color-ink)` for interactive cards. No blur radius.
- Dark sections (`--color-dark` background) use `--color-surface` text. Full inversion only — no partial treatments.

### 3.2 Typography

**Font:** Space Grotesk. No additional families. The entire range from weight 300 to 700 is used.

**Scale principle:** Extremes, not middles. Type is either very large (display) or deliberately small (label/meta). Avoid medium sizes for things that want to be noticed.

```
--text-display: clamp(4rem, 2rem + 8vw, 10rem)     /* Hero headings — full-bleed */
--text-2xl:     clamp(2.2rem, 1.5rem + 3vw, 4rem)   /* Section headings */
--text-xl:      clamp(1.5rem, 1.2rem + 1.5vw, 2.4rem)
--text-lg:      clamp(1.1rem, 1rem + 0.5vw, 1.35rem)
--text-base:    clamp(1rem, 0.95rem + 0.25vw, 1.1rem)
--text-sm:      clamp(0.875rem, 0.85rem + 0.15vw, 0.95rem)
--text-xs:      clamp(0.72rem, 0.7rem + 0.1vw, 0.78rem)    /* Labels, meta, caps */
```

**Weight usage:**
- `700`: Display headlines, section headings, key stats, CTA buttons
- `600`: Subheadings, card titles, nav links
- `500`: Label text, uppercase tags
- `400`: Body copy, captions, form placeholders
- `300`: Secondary intro paragraphs (hero subtext)

**Tracking:**
- Display / large headings `700`: `-0.05em` to `-0.07em` — tight, architectural
- Section headings: `-0.03em` to `-0.045em`
- Labels uppercase: `+0.08em` to `+0.12em`
- Body: `0` (default)

**Line heights:**
- Display: `0.92` to `0.96` — nearly touching
- Headings: `1.0` to `1.05`
- Body: `1.65` to `1.75`
- Labels: `1.2`

### 3.3 Spacing & Grid

**Grid:** 12 columns. Max width: 1360px. Gutter: `clamp(1.5rem, 4vw, 3rem)`.

**Section rhythm:** Heavy horizontal rule (`2px solid --color-ink`) at every section start. Sections alternate 96px and 128px vertical padding.

**Brutalist spacing rule:** Use extremes. Very tight (8–16px) between related elements, very open (80–128px) between unrelated zones. No "medium" 40px gaps everywhere.

### 3.4 Borders & Structure

The visible structure IS the design:

- **Hard horizontal rules** (`border-top: 2px solid var(--color-ink)`) mark every major section.
- **Section counters**: Small `01 ——`, `02 ——`, `03 ——` in `--text-xs` uppercase at top-left of each container.
- **Cards**: `border: 1.5px solid var(--color-ink)`. Zero border-radius. On hover: `transform: translate(-2px, -2px)` + `box-shadow: 4px 4px 0 var(--color-ink)`.
- **Buttons — Primary**: filled `--color-ink`, `--color-surface` text, 0 radius, no shadow. Hover: `--color-accent` fill.
- **Buttons — Outline**: `border: 1.5px solid --color-ink`, transparent fill. Hover: filled ink.
- **Input fields**: `border: 1.5px solid --color-ink`. Zero radius. Focus: `border-color: --color-accent`.

### 3.5 Motion

Motion feels like a mechanism engaging, not animation playing:

- **Scroll reveals:** `translateY(32px → 0)` + `opacity(0 → 1)`, `400ms ease-out-expo`. No bounce.
- **Hover transitions:** `150ms` max. Hard and immediate.
- **Card hover:** `transform: translate(-2px, -2px)` + hard shadow at `150ms`.
- **Row hover inversions:** `background: --color-ink`, `color: --color-surface` at `120ms`.
- **NO:** parallax, floating elements, continuous animations, scroll-jacking.
- **Reduced motion:** disable all transforms and transitions immediately.

---

## 4. Page Specifications

### 4.1 Global: Navigation

```
┌─────────────────────────────────────────────────────────────────────┐
│  MERIDIAN BUILD         Projects   Services   About   Careers       │
│                                                         [ QUOTE → ] │
├─────────────────────────────────────────────────────────────────────┤
  2px solid --color-ink — always visible below nav
```

- Height: `64px`. Background: `--color-surface`. NO box-shadow ever.
- Logo: `700` weight `--text-base`, all caps `MERIDIAN BUILD`. Typographic, not a logotype.
- Links: `600` weight `--text-sm`, normal case. Active: `--color-accent` `2px` underline.
- CTA: `[ QUOTE → ]` — small ink button, right side.
- Mobile: hamburger opens full-viewport dark panel (`--color-dark` bg), links in `--text-2xl` `700` `--color-surface`.

---

### 4.2 Homepage — PRIORITY SURFACE

#### Section 01: Hero

```
┌─────────────────────────────────────────────────────────────────────┐
│  01 ─────────────────────────────────────────────────────────────── │
│                                                                      │
│  COMMERCIAL              ┊   EST.         NYC DOB                   │
│  CONSTRUCTION            ┊   2009         Licensed                  │
│  AT INSTITUTIONAL        ┊   ─────────────────────                  │
│  SCALE.                  ┊   140+         5                         │
│                           ┊   Projects     Boroughs                  │
│  ───────────────────      ┊                                         │
│  NYC's standard for       ┊   [ REQUEST A QUOTE → ]                 │
│  electrical installation  ┊                                         │
│  since 2009.              ┊                                         │
│                                                                      │
│  ────────────────────────────────────────────────────────────────── │
└─────────────────────────────────────────────────────────────────────┘
```

**Left column (7/12):**
- Section counter `01 ——` in `--text-xs` uppercase `--color-secondary`.
- Headline: Space Grotesk `700`, `--text-display`, tracking `-0.055em`. Line height `0.93`.
  Text: `COMMERCIAL / CONSTRUCTION / AT INSTITUTIONAL / SCALE.`
- `2px solid --color-ink` rule below headline, `64px` margin.
- Subtext: `300` weight, `--text-lg`, `--color-secondary`, max `46ch`.

**Right column (4/12, offset 1):**
- Vertical `1px solid --color-ink` divider on desktop.
- Stats 2×2 grid — value in `700` `--text-2xl`, label in `500` `--text-xs` uppercase `--color-secondary`.
- CTA button below stats, full width of column.

**Bottom:** Hard `2px solid --color-ink` rule.

---

#### Section 02: Featured Project (Explorer Teaser)

```
┌─────────────────────────────────────────────────────────────────────┐
│  02 ─────────────────────────────────────────────────────────────── │
│                                                                      │
│  ONE VANDERBILT                                                      │
│  ──────────────                                                      │
│  Commercial High-Rise  ·  Midtown Manhattan                         │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                [ BUILDING EXPLORER COMPONENT ]                │  │
│  │           Click a floor to explore room-level scope.          │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                       [ VIEW ALL PROJECTS → ]       │
└─────────────────────────────────────────────────────────────────────┘
```

- Project name: `700` weight `--text-2xl`. Rule below. Descriptor: `400` `--text-sm` `--color-secondary`.
- Explorer wrapped in `border: 1.5px solid var(--color-ink)`. No radius. No "DEMO PROJECT" badge.
- Tab switcher above explorer for selecting between 3 projects.

---

#### Section 03: Services (abbreviated rows)

```
┌─────────────────────────────────────────────────────────────────────┐
│  03 ─────────────────────────────────────────────────────────────── │
│                                                                      │
│  01   Electrical Installation                                    →   │
│  ──────────────────────────────────────────────────────────────────  │
│  02   Commercial Construction                                    →   │
│  ──────────────────────────────────────────────────────────────────  │
│  03   Fit-Out & Renovation                                       →   │
│  ──────────────────────────────────────────────────────────────────  │
│  04   Project Management                                         →   │
│  ──────────────────────────────────────────────────────────────────  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

- Full-width rows. `border-bottom: 1px solid --color-ink`. First row has `border-top`.
- Left: service number `700`. Center-left: service name `600`. Right: `→`.
- Hover: entire row background `--color-ink`, text `--color-surface`. `120ms` transition.

---

#### Section 04: Clients

```
┌─────────────────────────────────────────────────────────────────────┐
│  04 ─────────────────────────────────────────────────────────────── │
│  SELECTED CLIENTS                                                    │
│                                                                      │
│  Related Companies ──────────────────── Real Estate Development     │
│  Tishman Speyer ─────────────────────── Commercial Developer        │
│  NYC School Construction ─────────────── Public Infrastructure     │
│  Turner Construction ─────────────────── General Contractor        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

- `--color-surface-2` background. Top + bottom `2px solid --color-ink`.
- Client name: `600` `--text-base`. Sector: `400` `--text-sm` `--color-secondary`.

---

#### Section 05: CTA Dark Block

```
┌─────────────────────────────────────────────────────────────────────┐
│██████████████████████████████████████████████████████████████████████│
│█                                                                    █│
│█  Have a project in mind?              [ REQUEST A QUOTE → ]       █│
│█  We scope and quote within 5 days.                                █│
│█                                                                    █│
│██████████████████████████████████████████████████████████████████████│
```

- `--color-dark` background. Single row on desktop.
- Heading: `700` `--text-xl` `--color-surface`. Button: outline in `--color-surface`.

---

### 4.3 Services Page

- Page header: same asymmetric hero split.
- Service list: numbered rows with hard borders, full page version with expandable bullet points on click.

### 4.4 About Page

- Header: left `BUILT ON / PRECISION.` in `--text-display`, right: 2 company paragraphs.
- Credentials: 4-column grid, large number value + label, `2px solid --color-accent` underline on each.
- Team: 2-column list, initials monogram `64×64` with `1.5px solid --color-ink`, no fill.
- Clients: same row list treatment.

### 4.5 Contact Page

- Left: `LET'S DISCUSS / YOUR PROJECT.` in `--text-2xl` `700` + contact detail list.
- Right: form with `1.5px solid --color-ink` inputs, zero radius.
- Success: `MESSAGE RECEIVED.` in `--text-xl` `700`. No illustration.

### 4.6 Careers Page

- Job rows: same invert-on-hover pattern as services. Empty state: clean single-line message.

---

## 5. Component Summary

| Component | Border | Radius | Shadow | Hover |
|-----------|--------|--------|--------|-------|
| Card | `1.5px solid --color-ink` | `0` | none at rest | `translate(-2px,-2px)` + `4px 4px 0 ink` |
| Button Primary | `1.5px solid --color-ink` | `0` | none | `background: --color-accent` |
| Button Outline | `1.5px solid --color-ink` | `0` | none | fill ink, text surface |
| Input | `1.5px solid --color-ink` | `0` | none | `border-color: --color-accent` on focus |
| List row | `1px` bottom only | `0` | none | full row inverts to ink |
| Section rule | `2px` top | — | — | — |
| Stats block | `2px solid --color-accent` bottom | `0` | none | static |

---

## 6. Do / Don't

| DO | DON'T |
|----|-------|
| Hard 1–2px ink borders | Blurred `box-shadow` |
| Type at extremes (massive or tiny) | Medium text sizing for headings |
| Hard offset shadows `4px 4px 0` | Blurred drop shadows |
| Full-row hover inversions | Subtle background-color hover tints |
| `--color-accent` max once per section | Accent on multiple elements per section |
| Section counters `01 ——` | Decorative divider icons or SVG patterns |
| Asymmetric two-column hero | Centered hero with background image |
| Numbered service rows | Service icon cards |
| Space Grotesk 700/600/300 | Icon libraries or extra font families |
| `oklch()` for all colors | `#hex` values |
| Hard section-start rules | Background color alternation as section break |

---

## 7. Voice & Copy Direction

- **Register:** Institutional. Exact, credible, economical. Like a structural engineer's report, not a marketing brochure.
- **Sentences:** Short declarative. "We build. You move in." Not "We are committed to delivering excellence."
- **Numbers first:** `140+ projects. Est. 2009. 5 boroughs. NYC DOB licensed.`
- **Banned phrases:** "passionate team", "end-to-end solutions", "client-centric", "state-of-the-art", "world-class"
- **Good copy examples:**
  - "In-house management. No brokered work."
  - "We hold the standard — not just the schedule."
  - "Primary distribution to fit-out delivery. Full scope."
- **Headlines:** ALL CAPS for display/hero. Sentence case for body headings.

---

## 8. Implementation Notes

- Colors: `oklch()` exclusively
- Font: Space Grotesk 300/400/500/600/700 from Google Fonts
- Grid: CSS Grid, 12 columns, `--max-width: 1360px`
- Section counters: explicit `<span>` elements, not `::before` pseudo-content, for accessibility
- Hard rules: `<hr>` or `border-top: 2px solid var(--color-ink)` on section container
- Row hover inversions: `transition: background 120ms, color 120ms`
- BuildingExplorer: wrap in `border: 1.5px solid var(--color-ink)` container div
- No `border-radius` anywhere except inside the building explorer SVG rooms (those are architectural shapes, different context)
