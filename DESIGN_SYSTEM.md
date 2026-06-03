# Design System — Arch Linux / AUR Presentation

Based on the **Arch Linux** and **AUR** (Arch User Repository) brand palette,
adapted for a professional and technical slide presentation aesthetic.

---

## 1. Brand Origin

Colors were extracted from the Arch Linux official styles (`archweb.css`, `aurweb.css`).

| Color name | Hex | Usage |
|------------|-----|-------------|
| Arch Blue | `#1794D1` | Primary brand, highlights, top borders |
| Arch Dark | `#333333` | Navbar background, headings, primary text |
| Arch Light BG | `#f6f9fc` | Base background for the content area |
| Arch Box BG | `#ecf2f5` | Secondary background for cards and widgets |
| Arch Border | `#bcd` | Defined borders for boxes and UI elements |

---

## 2. Color Tokens

Defined in `src/index.css` under `:root`.

```css
:root {
  /* Backgrounds */
  --color-bg-deep:      #f6f9fc;   /* Main slide background */
  --color-bg-darker:    #ffffff;   /* Card background */
  --color-bg-darkest:   #e4eeff;   /* Subtle highlight BG */

  /* Arch brand */
  --color-primary:      #1794D1;   /* Arch Blue — main accent */
  --color-primary-alt:  #08c;      /* Border accent */
  --color-slate:        #333333;   /* Arch Dark text */
  --color-arch-border:  #bcd;      /* Standard border */
  --color-arch-box:     #ecf2f5;   /* Box background */
}
```

---

## 3. Typography

| Role | Family | Notes |
|------|--------|-------------|
| Headings | **Outfit** | Technical, modern feel |
| Body | **Inter** | Highly readable sans-serif |
| Monospace | **JetBrains Mono** | For code and technical metadata |

---

## 4. UI Components

### `Card`
Arch cards follow a "box" style: white background, light gray borders, and a **colored top border** (3px).
Variants: `arch` (Blue top), `slate` (Dark top), `glass` (Transparent).

### `Tag` & `Badge`
Tags use the Arch Blue background with white text and a squared-off look. 
Badges use Arch-specific light backgrounds (e.g., `#ecf2f5`) with colored borders.

### `Layer`
Numbered items with a vertical Arch Blue accent on the left. Renders in a white box with a light shadow.

---

## 5. Animations

- **Slide Transitions:** Standard horizontal slides.
- **Ambient Background:** Subtle "float-orbs" in Arch Blue and Slate with very low opacity (`0.02 - 0.04`).
- **Pulse Glow:** Used sparingly on active markers to avoid distracting from technical content.

---

## 6. Rules & Constraints

| Rule | Reason |
|------|--------|
| **Prefer clean borders over glows** | Matches the Arch Linux "utility-first" aesthetic |
| **Primary accent is `#1794D1`** | Official Arch Blue |
| **Rounded corners are minimal** | Use `rounded-sm` (2px) or `rounded-none` for a technical feel |
| **All slides are 16:9** | Optimized for `1280×720` |
