---
description: Generate MAI Design Language HTML presentations from Word docs or outlines. Use when user provides content to convert into a presentation, mentions slides, pitch deck, or asks for a presentation.
user_invocable: true
---

# MAI Presentation Generator Skill

Convert Word documents or outlines into polished, interactive HTML presentations following the MAI (Microsoft AI) Design Language.

**CRITICAL: All templates must be 95-100% pixel-perfect match to Figma source files.**

## Workflow

```
Word Document / Outline → Extract Story → Build Narrative Arc → Design Information Hierarchy → Select Templates → Generate HTML
```

## Related Files

- **Template HTML snippets:** `.claude/skills/slide-templates.md`
- **Template selection guide:** `.claude/skills/template-matching-guide.md`
- **Base HTML structure:** `templates/base-template.html`
- **Image assets:** `MAI Design Skill/asset/Images/`

## Usage

When user provides content (Word doc, outline, bullet points), generate a presentation by:

1. **Extracting the story** - What is the core narrative? What transformation does it describe?
2. **Building narrative arc** - Structure as: Setup → Tension → Discovery → Resolution → Action
3. **Designing information hierarchy** - What are the 3-5 key insights that MUST land with the audience?
4. **Mapping to appropriate templates** - Use the Template Matching Guide to select templates based on content **PURPOSE**, not just content TYPE
5. **Creating rhythm** - Alternate between dense information and breathing room
6. **Generating interactive HTML** - Include animations, navigation, responsive scaling
7. **VERIFY positions** - Cross-check against `slide-templates.md` for exact Figma positions

---

## Storytelling Framework

### The Golden Rule
**A presentation is not a document export.** Documents inform; presentations persuade. Every slide must earn its place in the narrative arc.

### Narrative Arc Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  1. SETUP          2. TENSION        3. DISCOVERY              │
│  "Here's the       "Here's the       "Here's what              │
│   context"          problem"          we found"                │
│                                                                 │
│  4. INSIGHT        5. RESOLUTION     6. ACTION                 │
│  "Here's what      "Here's the       "Here's what              │
│   it means"         opportunity"      to do"                   │
└─────────────────────────────────────────────────────────────────┘
```

### Information Hierarchy

| Level | What It Is | Visual Treatment | Example |
|-------|------------|------------------|---------|
| **L1: Core Insight** | The 3-5 things audience MUST remember | Big Number, Statement slide, full-bleed | "90% of features never get used" |
| **L2: Supporting Evidence** | Data/quotes that prove L1 | Quote slides, Data Cards | User quote about bloat |
| **L3: Context** | Background needed to understand L1 | Body text, smaller type | Methodology, participant demographics |
| **L4: Detail** | Nice-to-know, can be cut | Footnotes, or omit entirely | Specific edge cases |

**Rules:**
- Every presentation needs 3-5 L1 insights (no more, no less)
- L1 content gets its own slide with maximum visual impact
- L2 supports L1 — never let supporting evidence overshadow the insight

### Breathing Room & Rhythm

**Dense → Breathe → Dense → Breathe**

| Slide Type | Information Density | Purpose |
|------------|---------------------|---------|
| **Statement Slide** | LOW - One idea | Let a key insight land |
| **Section Title** | LOW - Topic only | Signal transition |
| **Quote Slide** | MEDIUM - One voice | Humanize data |
| **Big Number** | LOW - One data point | Memorable anchor |
| **Analysis/Detail** | HIGH - Multiple items | Deliver substance |
| **Data Cards** | HIGH - Comparison | Show patterns |

---

## Content → Template Mapping (Quick Reference)

| Content Type | Template # | Template Name |
|--------------|------------|---------------|
| Opening/Title | 1 | Cover |
| Meeting agenda | 2/3 | Agenda Dark/Accent |
| Chapter start | 4 | Section Title |
| Section break | 5 | Divider |
| Title + visual | 6 | Content with Image |
| Team intro | 7 | Team Showcase |
| Multi-image showcase | 8 | Four Image Grid |
| Recognition | 9 | Kudos |
| Creative/artistic | 10 | Image Collage |
| Photo gallery | 11 | Image Gallery |
| Key statement | 12 | Statement |
| Long text | 13 | Two Column Text |
| Mixed content | 14 | Text with Images |
| Assessment/review | 15 | Analysis/Status |
| Detailed article | 16 | Article with Image |
| Quote/testimonial | 17 | Quote |
| Key themes/pillars | 18 | Vertical Text |
| Timeline/roadmap | 19 | Timeline |
| Demo video | 20 | Content with Video |

**Full decision tree:** See `.claude/skills/template-matching-guide.md`

---

## MAI Design Language Reference

### Color System

```css
--mai-primary-dark-1: #72675b;   /* Neutral dark - subtle text */
--mai-primary-dark-2: #5f4e41;   /* Warm dark - secondary text */
--mai-primary-dark-3: #3b230e;   /* Deepest - primary text on light bg */
--mai-primary-light-1: #fef9ed;  /* Warm white - light backgrounds */
--mai-yellow-1: #ffeecc;         /* Light yellow - text on dark bg */
--mai-yellow-3: #e5b85c;         /* Gold accent - highlights, numbers */
```

**Color Pairing Rules:**
- Light background (#fef9ed, #ffeecc) → Dark text (#3b230e, #5f4e41)
- Dark background (#3b230e, #5f4e41, #72675b) → Light text (#ffeecc, #fef9ed)
- Accent color (#e5b85c) → Use for highlights, numbers, icons

### Typography

```css
--mai-font-serif: 'EB Garamond', Georgia, serif;
--mai-font-sans: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
--mai-font-mono: 'Red Hat Mono', Consolas, monospace;
```

### Critical Figma Position Values

| Measurement | Figma Value | CSS Value |
|-------------|-------------|-----------|
| Left margin | 64px | 3.33% |
| Top margin | 100px | 9.26% |
| Footer bottom | 37px | 3.43% |
| Gap small | 24px | 1.25cqw |
| Gap medium | 32px | 1.667cqw |
| Gap large | 168px | 8.75cqw |

**Canvas:** 1920 x 1080px (16:9)

---

## Visual Rules

1. **Never use same template type consecutively** - alternate between styles
2. **Balance light and dark backgrounds** - aim for 40/60 or 50/50 split
3. **Use background images** on at least 40% of slides (Templates: 1, 4, 12, 17)
4. **Break long content** into multiple slides (max 3-4 points per slide)
5. **Follow Dense → Breathe rhythm** - no more than 3 dense slides without a breathing slide

---

## Image Assets

Located in `MAI Design Skill/asset/Images/`:

| Image Type | File Names | ONLY Use For |
|------------|------------|--------------|
| **background_** | `background_1.png` - `background_6.png` | **Cover Page ONLY** |
| **Section_** | `Section_1.png` - `Section_4.png` | **Section Title Page ONLY** |
| **Statement Slide_** | `Statement Slide_1.png` - `Statement Slide_5.png` | **Quote/Statement Pages ONLY** |
| **image placeholder** | `01.png` - `38.png` | Content areas, galleries |

### Special Assets

| Asset | File | Use For |
|-------|------|---------|
| Timeline node | `Point.svg` | Timeline slide (#19) nodes |
| Quote marks | `quote-open.svg`, `quote-close.svg` | Quote slide (#17) decorative marks |
| Timeline line | #FDE095 color | Timeline horizontal line |

---

## Animation Assignment

- **Titles**: `animate-in` (from bottom)
- **Body text**: `animate-in` with stagger delay
- **Images**: `animate-in-right` or `animate-clip-left`
- **Data numbers**: `animate-in`
- **Progress bars**: `animate-bar` with `--bar-width` CSS variable
- **Cards**: `animate-stagger-1`, `animate-stagger-2`, `animate-stagger-3`

---

## Checklist Before Generating

### Story & Structure
- [ ] Identified the central question/problem
- [ ] Found 3-5 L1 insights
- [ ] Each L1 insight has a dedicated high-impact slide
- [ ] Content follows narrative arc
- [ ] Dense → Breathe rhythm maintained

### Visual Design
- [ ] Each slide uses exact Figma positions
- [ ] Each slide has only 1-3 key points
- [ ] No two consecutive slides use same template type
- [ ] Background images used on 40%+ slides
- [ ] Colors follow light/dark text pairing rules

### Polish
- [ ] Animations are assigned appropriately
- [ ] Footer is consistent across slides
- [ ] Navigation works (keyboard, touch, mouse wheel)
