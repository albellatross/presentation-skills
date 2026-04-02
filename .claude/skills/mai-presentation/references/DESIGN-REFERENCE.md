# MAI Design Language Reference

## Color System

```css
/* Primary Colors */
--mai-primary-dark-1: #72675b;   /* Neutral dark - subtle text */
--mai-primary-dark-2: #5f4e41;   /* Warm dark - secondary text */
--mai-primary-dark-3: #3b230e;   /* Deepest - primary text on light bg */

/* Light Colors */
--mai-primary-light-1: #fef9ed;  /* Warm white - light backgrounds */
--mai-yellow-1: #ffeecc;         /* Light yellow - text on dark bg */
--mai-yellow-2: #fde095;         /* Timeline line/point color */
--mai-yellow-3: #e5b85c;         /* Gold accent - highlights, numbers */
```

### Color Pairing Rules

| Background | Text Color | Accent |
|------------|-----------|--------|
| Light (#fef9ed, #ffeecc) | Dark (#3b230e, #5f4e41) | Gold (#e5b85c) |
| Dark (#3b230e, #5f4e41, #72675b) | Light (#ffeecc, #fef9ed) | Gold (#e5b85c) |

**WCAG Contrast Requirements:**
- Normal text: minimum 4.5:1 contrast ratio
- Large text (24px+): minimum 3:1 contrast ratio
- Always test dark text on light bg, and light text on dark bg

---

## Typography

```css
/* Font Families */
--mai-font-serif: 'EB Garamond', Georgia, serif;
--mai-font-sans: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
--mai-font-mono: 'Red Hat Mono', Consolas, monospace;
```

### Type Scale (Container Query Units)

| Element | Font Size | Line Height | Font Family |
|---------|-----------|-------------|-------------|
| Cover Title | 4.167cqw | 1.15 | EB Garamond |
| Section Title | 3.75cqw | 1.2 | EB Garamond |
| Slide Title | 2.5cqw | 1.2 | EB Garamond |
| Body Large | 1.667cqw | 1.5 | Segoe UI |
| Body | 1.25cqw | 1.5 | Segoe UI |
| Caption | 1.042cqw | 1.4 | Segoe UI |
| Footer | 0.833cqw | 1.4 | Segoe UI |

---

## Spacing & Layout

### Canvas
- **Dimensions:** 1920 x 1080px (16:9)
- **Safe Area:** 64px margins on all sides

### Critical Figma Position Values

| Measurement | Figma Value | CSS Value |
|-------------|-------------|-----------|
| Left margin | 64px | 3.33% |
| Right margin | 64px | 3.33% |
| Top margin | 100px | 9.26% |
| Bottom margin | 100px | 9.26% |
| Footer bottom | 37px | 3.43% |
| Gap small | 24px | 1.25cqw |
| Gap medium | 32px | 1.667cqw |
| Gap large | 168px | 8.75cqw |

### Container Query Setup

```css
.slide {
  container-type: size;
  container-name: slide;
  aspect-ratio: 16/9;
}
```

---

## Animation System

### Base Animations

```css
/* Fade in from bottom */
.animate-in {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Fade in from right */
.animate-in-right {
  animation: slideInRight 0.6s ease-out forwards;
  opacity: 0;
}

/* Clip reveal from left */
.animate-clip-left {
  animation: clipRevealLeft 0.8s ease-out forwards;
  clip-path: inset(0 100% 0 0);
}

/* Progress bar fill */
.animate-bar {
  animation: barFill 1s ease-out forwards;
  width: 0;
}
```

### Stagger Delays

```css
.animate-stagger-1 { animation-delay: 0.1s; }
.animate-stagger-2 { animation-delay: 0.2s; }
.animate-stagger-3 { animation-delay: 0.3s; }
.animate-stagger-4 { animation-delay: 0.4s; }
.animate-stagger-5 { animation-delay: 0.5s; }
```

### Animation Assignment Guide

| Element Type | Animation | Notes |
|--------------|-----------|-------|
| Titles | animate-in | From bottom |
| Body text | animate-in + stagger | Delayed appearance |
| Images | animate-in-right or animate-clip-left | Visual interest |
| Data numbers | animate-in | Emphasize impact |
| Progress bars | animate-bar | Use --bar-width variable |
| Cards | animate-stagger-1/2/3 | Sequential reveal |
| Timeline nodes | animate-in + stagger | Left to right |

---

## Image Assets

Located in `MAI Design Skill/asset/Images/`:

### Background Images

| Type | Files | Use For |
|------|-------|---------|
| Cover backgrounds | `background_1.png` - `background_6.png` | Cover Page (#1) ONLY |
| Section backgrounds | `Section_1.png` - `Section_4.png` | Section Title (#4) ONLY |
| Statement backgrounds | `Statement Slide_1.png` - `Statement Slide_5.png` | Quote/Statement (#12, #17) ONLY |

### Special Assets

| Asset | File | Use For |
|-------|------|---------|
| Timeline node | `Point.svg` | Timeline slide (#19) nodes |
| Quote open | `quote-open.svg` | Quote slide (#17) opening mark |
| Quote close | `quote-close.svg` | Quote slide (#17) closing mark |
| Video covers | `cover_01.mp4` - `cover_06.mp4` | Video background slides |

### Placeholder Images

| Files | Use For |
|-------|---------|
| `01.png` - `38.png` | Content areas, galleries, team photos |

---

## Visual Rules

1. **Never use same template type consecutively** - alternate between styles
2. **Balance light and dark backgrounds** - aim for 40/60 or 50/50 split
3. **Use background images** on at least 40% of slides
4. **Break long content** into multiple slides (max 3-4 points per slide)
5. **Follow Dense → Breathe rhythm** - no more than 3 dense slides without a breathing slide
6. **Timeline styling:**
   - Line color: #FDE095
   - Node: Point.svg centered on line
   - Node container needs `height: 100%` for proper vertical centering
