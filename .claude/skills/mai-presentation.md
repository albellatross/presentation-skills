---
description: Generate MAI Design Language HTML presentations from Word docs or outlines
user_invocable: true
---

# MAI Presentation Generator Skill

Convert Word documents or outlines into polished, interactive HTML presentations following the MAI (Microsoft AI) Design Language.

**CRITICAL: All templates must be 95-100% pixel-perfect match to Figma source files.**

## Workflow

```
Word Document / Outline → Extract Story → Build Narrative Arc → Design Information Hierarchy → Select Templates → Generate HTML
```

## Usage

When user provides content (Word doc, outline, bullet points), generate a presentation by:

1. **Extracting the story** - What is the core narrative? What transformation does it describe?
2. **Building narrative arc** - Structure as: Setup → Tension → Discovery → Resolution → Action
3. **Designing information hierarchy** - What are the 3-5 key insights that MUST land with the audience?
4. **Mapping to appropriate templates** - Use the Template Matching Guide (`.claude/skills/template-matching-guide.md`) to select templates based on content **PURPOSE**, not just content TYPE
5. **Creating rhythm** - Alternate between dense information and breathing room
6. **Generating interactive HTML** - Include animations, navigation, responsive scaling
7. **VERIFY positions** - Cross-check against `templates/slide-templates.md` for exact Figma positions

**CRITICAL:** Before selecting a template, ask:
- What is this content's **purpose**? (inform? persuade? showcase? celebrate?)
- What is its **information hierarchy level**? (L1 insight? L2 evidence? L3 context?)
- Does it need **visual support**? (data viz? image? pure text?)

See **Template Matching Guide** for the full decision tree and common error patterns.

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

**Map your content to this arc BEFORE selecting templates:**

| Arc Phase | Purpose | Typical Templates |
|-----------|---------|-------------------|
| Setup | Establish context, set the stage | Cover, Agenda, Content+Image |
| Tension | Introduce problem/question | Section Title, Statement (question form) |
| Discovery | Present findings with evidence | Quote, Big Number, Analysis, Data Cards |
| Insight | Distill meaning from findings | Statement (answer form), Divider |
| Resolution | Show the opportunity/solution | Vertical Text, Content+Image |
| Action | Clear next steps | Analysis (numbered), Thank You |

### Information Hierarchy

**Not all information is equal.** Before generating slides, categorize every piece of content:

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
- L3 should be minimal — if audience needs lots of context, they're not ready for this presentation
- L4 often belongs in an appendix or leave-behind document, not the presentation

### Breathing Room & Rhythm

**Dense → Breathe → Dense → Breathe**

Presentations need rhythm. After 2-3 slides of dense information, insert a "breathing" slide:

| Slide Type | Information Density | Purpose |
|------------|---------------------|---------|
| **Statement Slide** | LOW - One idea | Let a key insight land; give audience time to absorb |
| **Section Title** | LOW - Topic only | Signal transition; mental reset |
| **Quote Slide** | MEDIUM - One voice | Humanize data; emotional connection |
| **Big Number** | LOW - One data point | Visual punctuation; memorable anchor |
| **Analysis/Detail** | HIGH - Multiple items | Deliver substance |
| **Data Cards** | HIGH - Comparison | Show patterns |

**Pattern Example:**
```
1. Cover (LOW)
2. Question/Setup (LOW) ← Breathing
3. Methodology (MEDIUM)
4. Section Title (LOW) ← Breathing
5. Finding + Evidence (HIGH)
6. User Quote (MEDIUM)
7. Big Number Insight (LOW) ← Breathing
8. Section Title (LOW) ← Breathing
9. Finding + Evidence (HIGH)
10. Statement Insight (LOW) ← Breathing
...
```

**Anti-patterns to avoid:**
- ❌ 5 dense slides in a row (audience fatigue)
- ❌ 3 breathing slides in a row (feels empty/slow)
- ❌ Putting L3 context on full Statement slides (wasted emphasis)
- ❌ Burying L1 insights in bullet lists (missed impact)

### Emphasis Techniques

**Make important things LOOK important:**

| Technique | Use For | Example |
|-----------|---------|---------|
| **Big Number** | Quantitative insights | "9-10 out of 10" rating |
| **Statement Slide** | Qualitative insights | "Invisible until invoked" |
| **Highlight Color** | Key words in text | `<span class="highlight">inertia</span>` |
| **Contrast Cards** | Comparisons | Good vs Bad, Before vs After |
| **Pull Quote** | User voice | Full-bleed quote with attribution |
| **Numbered Steps** | Sequence/priority | "01, 02, 03, 04" recommendations |

**What NOT to emphasize:**
- Methodology details (necessary but not memorable)
- Participant demographics (context, not insight)
- Feature lists without framing (data without meaning)
- Everything (if everything is bold, nothing is bold)

---

## Data Visualization Components

### MAI Progress Bar (Pill-shaped Capsule)

The standard progress bar follows Figma's pill-shaped capsule design with rounded ends.

**CSS Classes:**

| Class | Purpose |
|-------|---------|
| `.mai-progress` | Container - pill shape with border and padding |
| `.mai-progress-dark` | Dark variant for image/dark backgrounds |
| `.mai-progress-fill` | Fill bar - default dark brown |
| `.mai-progress-fill-accent` | Gold accent fill (#e5b85c) |
| `.mai-progress-fill-light` | Light gradient fill for dark backgrounds |
| `.mai-progress-labeled` | Container with label above bar |
| `.mai-progress-label` | Flex container for label text and value |
| `.mai-progress-label-text` | Label text (left side) |
| `.mai-progress-label-value` | Value text (right side, serif font) |
| `.mai-progress-label-subtext` | Optional subtext below bar (e.g., "+10% from March") |

**Basic Usage (in cards on dark bg):**

```html
<div class="mai-progress mai-progress-dark">
  <div class="mai-progress-fill mai-progress-fill-accent animate-bar" style="--bar-width: 85%;"></div>
</div>
```

**With Label (on light bg):**

```html
<div class="mai-progress-labeled">
  <div class="mai-progress-label">
    <span class="mai-progress-label-text">Task Completion</span>
    <span class="mai-progress-label-value" style="color: var(--mai-yellow-3);">85%</span>
  </div>
  <div class="mai-progress">
    <div class="mai-progress-fill mai-progress-fill-accent animate-bar" style="--bar-width: 85%;"></div>
  </div>
  <span class="mai-progress-label-subtext">+12% from last month</span>
</div>
```

**Fill Variants:**

| Variant | Class | Use Case |
|---------|-------|----------|
| Default (dark brown) | `.mai-progress-fill` | Neutral metrics on light bg |
| Gold accent | `.mai-progress-fill-accent` | Highlighted/positive metrics |
| Light gradient | `.mai-progress-fill-light` | Metrics on dark backgrounds |

**Animation:**
- Add `animate-bar` class to `.mai-progress-fill`
- Set `--bar-width` CSS variable for target width
- Bar animates from 0 to target width over 1.2s with delay

### Big Numbers

For single metrics that need maximum impact:

```html
<div class="animate-in">
  <p class="data-number" style="font-size: 10cqw; color: var(--mai-yellow-3);">80%</p>
  <p class="mai-body" style="color: var(--mai-primary-dark-2);">of fairy tales use<br>"good vs evil" structure</p>
</div>
```

| Class | Size | Use Case |
|-------|------|----------|
| `.data-number` | 8cqw | Large hero numbers |
| `.data-number-medium` | 5cqw | Secondary numbers, numbered lists |

### Data Cards

For comparison metrics in card format:

```html
<div class="data-card animate-in">
  <div style="display: flex; align-items: center; gap: 1cqw; margin-bottom: 1.5cqw;">
    <div class="icon-circle icon-animated" style="background: rgba(229, 184, 92, 0.25);">
      <!-- Icon SVG -->
    </div>
    <p class="mai-title-serif" style="color: var(--mai-yellow-1);">Card Title</p>
  </div>
  <p class="mai-title-serif" style="color: var(--mai-yellow-3);">Metric Label</p>
  <p class="mai-body-small" style="color: var(--mai-yellow-1); opacity: 0.8;">Description text</p>
  <div class="mai-progress mai-progress-dark" style="margin-top: 1.2cqw;">
    <div class="mai-progress-fill mai-progress-fill-accent animate-bar" style="--bar-width: 85%;"></div>
  </div>
</div>
```

**Card Variants:**
- `.data-card` - Dark/transparent for image backgrounds
- `.data-card-light` - Light variant for light backgrounds

### Comparison Bars (Horizontal)

For side-by-side comparisons:

```html
<div class="comparison-bar">
  <span class="mai-body" style="width: 8cqw;">Label</span>
  <div class="comparison-bar-fill" style="width: 75%; background: var(--mai-yellow-3);">
    <span class="mai-caption" style="color: var(--mai-primary-dark-3);">75%</span>
  </div>
</div>
```

### When to Use Each

| Data Type | Component | Example |
|-----------|-----------|---------|
| Single hero metric | Big Number | "90% satisfaction" |
| Multiple metrics | Progress Bars | Feature usage comparison |
| Metric with context | Data Card | Character trait with description |
| Before/After | Comparison Bars | Performance improvement |
| Trend/Change | Progress with subtext | "85% (+12% from March)" |

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
- Accent color (#e5b85c) → Use for highlights, numbers, icons on any background
- **Yellow/warm image backgrounds** → Use #fef9ed (warm white) for emphasis, NOT #e5b85c (gold) to avoid muddy appearance

### Typography

```css
/* Serif - Bradford LL (use EB Garamond as web fallback) */
--mai-font-serif: 'EB Garamond', Georgia, serif;

/* Sans - Segoe Sans */
--mai-font-sans: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;

/* Mono - Red Hat Mono */
--mai-font-mono: 'Red Hat Mono', Consolas, monospace;
```

**Font Sizes (cqw = container query width units for responsive scaling):**

| Class | Size | Use Case |
|-------|------|----------|
| `.mai-header-large` | 9.375cqw (180px) | Cover titles, Thank You |
| `.mai-header` | 6.25cqw (120px) | Section titles, statements |
| `.mai-title-serif-large` | 4.167cqw (80px) | Slide main titles |
| `.mai-title-serif` | 2.396cqw (46px) | Subtitles, card headers |
| `.mai-body-large` | 1.875cqw (36px) | Key points, lead text |
| `.mai-body` | 1.458cqw (28px) | Body text |
| `.mai-body-small` | 1.25cqw (24px) | Descriptions, details |
| `.mai-caption-large` | 1.458cqw (28px) | Section labels |
| `.mai-caption` | 0.833cqw (16px) | Footer, metadata |

### Motion Principles

```css
--mai-easing: cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth, natural */
--mai-duration-fast: 300ms;    /* Micro-interactions */
--mai-duration-normal: 500ms;  /* Content transitions */
--mai-duration-slow: 700ms;    /* Image reveals */
```

**Animation Patterns:**
- Content enters from bottom (translateY) with fade
- Images enter from right (translateX) with fade
- Stagger delay: 100ms between elements
- Ken Burns effect on background images (subtle 3% scale over 8s)
- Page exit: scale down slightly (0.98) with fade

---

## Template Library

**18 templates from Figma source file - ALL positions are pixel-perfect:**

| # | Template | Background | Figma Key Positions |
|---|----------|------------|---------------------|
| 1 | Cover | Image | Title: left 3.33%, top 34.63%, width 80.16% |
| 2 | Agenda Dark | #72675b | Title: left 3.33%, Topics: left 58.33%, width 38.54% |
| 3 | Agenda Accent | #3b230e | Same as Dark |
| 4 | Section Title | Image | Content: left 3.33%, top 48.75%, width 84.27% |
| 5 | Divider | #ffeecc | Text: left 3.33%, centered, width 84% |
| 6 | Content+Image | #fef9ed | Text: left 3.33%, width 41.46%; Image: left 51.3%, width 46.67%, height 87.04% |
| 7 | Team Showcase | #fef9ed | Content: left 3.33%, top 9.26%, width 93.23% |
| 8 | Four Image Grid | #fef9ed | Sidebar: width 20.05%; Grid: left 25.32%, width 71.61% |
| 9 | Kudos | #fef9ed | Cols: left 3.33% / 50% / 74.64%, width 22.03% |
| 10 | Image Collage | #ffeecc | 7 scattered images with blur effects |
| 11 | Image Gallery | #fef9ed | Grid: 4x2, gap 0.833cqw |
| 12 | Statement | Image | Content: left 3.33%, centered, width 60% |
| 13 | Two Column Text | #fef9ed | Left: width 27.6%; Gap: 8.75cqw |
| 14 | Text+Images | #ffeecc | Image1: 18.02%x32.04%; Image2: 64.22%x21.95% |
| 15 | Analysis | #ffeecc | Labels: width 20.83%, serif font |
| 16 | Article+Image | #fef9ed | Image: left 3.44%, width 29.01%; Content: left 39.69% |
| 17 | Quote | Image | Text: left 3.33%, top 6.48%, width 85.36% |
| 18 | Vertical Text | #ffeecc | Font: 6.14cqw, gap 1.667cqw |

**Full HTML snippets with exact positions:** See `templates/slide-templates.md`

---

## Critical Figma Position Values (Must Use Exactly)

| Measurement | Figma Value | CSS Value |
|-------------|-------------|-----------|
| Left margin | 64px | 3.33% |
| Top margin | 100px | 9.26% |
| Footer bottom | 37px | 3.43% |
| Gap small | 24px | 1.25cqw |
| Gap medium | 32px | 1.667cqw |
| Gap large | 168px | 8.75cqw |
| Avatar size | 80px | 4.167cqw |
| Avatar overlap | -12px | -0.625cqw |

**Canvas:** 1920 x 1080px (16:9)

---

## Content Analysis Rules

When analyzing user content, follow this sequence:

### Step 1: Extract the Story
Ask yourself:
- What is the central question or problem?
- What did we discover?
- What does it mean?
- What should happen next?

### Step 2: Identify L1 Insights
Find the 3-5 things that audience MUST remember. These become your Statement slides and Big Number slides.

### Step 3: Map Supporting Evidence
For each L1 insight, identify:
- What data/quote proves this? (L2)
- What context is needed to understand it? (L3)

### Step 4: Build the Arc
Arrange in narrative order:
```
Setup → Tension → Discovery → Insight → Resolution → Action
```

### Step 5: Add Breathing Room
After every 2-3 dense slides, insert a breathing slide (Statement, Section Title, or Quote).

### Content Type → Template Mapping

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

### Visual Variety Rules

1. **Never use same template type consecutively** - alternate between styles
2. **Balance light and dark backgrounds** - aim for 40/60 or 50/50 split
3. **Use background images** on at least 40% of slides (Templates: 1, 4, 12, 17)
4. **Break long content** into multiple slides (max 3-4 points per slide)
5. **Follow Dense → Breathe rhythm** - no more than 3 dense slides without a breathing slide

### Slide Purpose Categories

| Category | Templates | When to Use |
|----------|-----------|-------------|
| **Breathing (LOW density)** | Statement, Section Title, Divider, Cover | After 2-3 dense slides; for L1 insights |
| **Voice (MEDIUM density)** | Quote, Big Number | To humanize data or anchor a key metric |
| **Substance (HIGH density)** | Analysis, Two Column, Article+Image, Data Cards | To deliver detailed findings |
| **Visual (VARIABLE density)** | Image Grid, Gallery, Collage | To show not tell |

### Background Color Distribution

| Color | Templates |
|-------|-----------|
| Image bg | 1, 4, 12, 17 |
| #fef9ed (light) | 6, 7, 8, 9, 11, 13, 16 |
| #ffeecc (yellow) | 5, 10, 14, 15, 18 |
| #72675b (dark 1) | 2 |
| #3b230e (dark 3) | 3 |

### Animation Assignment

- **Titles**: `animate-in` (from bottom)
- **Body text**: `animate-in` with stagger delay
- **Images**: `animate-in-right` or `animate-clip-left` (clip reveal)
- **Vertical text**: `animate-in` with staggered delays (100ms, 200ms, 300ms, 400ms)
- **Data numbers**: `animate-in` (simple fade, avoid scale effects outside cards)
- **Progress bars**: `animate-bar` with `--bar-width` CSS variable
- **Cards**: `animate-stagger-1`, `animate-stagger-2`, `animate-stagger-3` + hover effects
- **Icons in cards**: `icon-animated` (hover scale effect only)
- **Highlights**: Only use `animate-glow` inside `.data-card` elements
- **Reveals**: `animate-blur-in`, `animate-clip-up`
- **Background slides**: Add `ambient-light` elements for flowing light effect
- **Rows**: Add `interactive-row` class for hover highlight effect
- **Column cards**: Add `column-card` class for hover scale effect

### Background Ambient Light

For slides with image backgrounds, add flowing ambient light effects:

```html
<!-- Add inside .slide-inner after the background image -->
<div class="ambient-light ambient-light-1"></div>
<div class="ambient-light ambient-light-2"></div>
```

### Hero Dynamic Background (Cover & Thank You pages)

For Cover and Thank You pages, use enhanced dynamic effects with turbulent flow animation:

```html
<!-- Add hero-bg class to background image for flow animation -->
<img src="..." alt="" class="mai-bg-image hero-bg">

<!-- Enhanced dynamic effects for hero pages -->
<div class="hero-ambient hero-ambient-1"></div>
<div class="hero-ambient hero-ambient-2"></div>
<div class="hero-ambient hero-ambient-3"></div>
<div class="hero-wave"></div>
<div class="hero-shimmer"></div>
```

**Hero Animation Features:**
- `hero-bg`: Background image flow animation (scale, translate, brightness/saturation changes) - 12s cycle
- `hero-ambient-1/2/3`: Large floating light orbs with `soft-light` blend mode - 8s cycle
- `hero-wave`: Diagonal gradient wave overlay - 6s cycle  
- `hero-shimmer`: Sweeping light band with `overlay` blend mode - 5s cycle
- `hero-pulse`: Breathing effect on third ambient light - 5s cycle

**Key CSS Properties:**
- Use `mix-blend-mode: soft-light` or `overlay` for natural blending with background
- Larger element sizes (100-120%) for more dramatic effect
- Faster animation cycles (5-8s) for visible movement
- Higher opacity values (0.6-0.9) for more prominent effects

### Accessibility - Text Readability

**For text on image backgrounds, ALWAYS use:**

1. **`.text-backdrop`** - Semi-transparent dark gradient backdrop
   ```html
   <div class="text-backdrop" style="position: absolute; left: 3.33%; top: 30%;">
     <h1 class="mai-header text-readable">Title</h1>
   </div>
   ```

2. **`.text-readable`** - Text shadow for contrast on dark/image backgrounds
   ```html
   <p class="mai-body-large text-readable">Text on image</p>
   ```

3. **`.text-readable-light`** - Subtle shadow for light backgrounds
   ```html
   <p class="mai-body text-readable-light">Text on light bg</p>
   ```

**Rules:**
- Never place text directly on busy image areas without backdrop
- Ensure minimum 4.5:1 contrast ratio for body text
- Large text (>18px) requires minimum 3:1 contrast ratio

### Interactive Elements

**Cards (.data-card):**
- Hover: lift up (-8px), shadow, gold border highlight
- Only apply glow/shimmer animations inside cards

**Rows (.interactive-row):**
- Hover: subtle gold background tint, indent left

**Column cards (.column-card):**
- Hover: subtle scale (1.03), icon enlarges

---

## Icons: Fluent UI System Icons (REQUIRED)

**CRITICAL: Only use Fluent UI System Icons. Do NOT use emoji or other icon libraries.**

### How to Include
```html
<!-- In <head> -->
<link rel="stylesheet" href="https://unpkg.com/@fluentui/react-icons@2.0.232/fonts/FluentSystemIcons-Regular.css">
```

### How to Use (SVG method - recommended)
Use inline SVG for maximum control over size and color:

```html
<!-- Heart Icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="width: 2cqw; height: 2cqw;">
  <path d="M12 5.5C12.6178 4.52665..." stroke="#6fcf97" stroke-width="1.5" stroke-linecap="round"/>
</svg>

<!-- Arrow Right Icon -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="width: 0.9cqw; height: 0.9cqw;">
  <path d="M8.29289 2.29289C8.68342..."/>
</svg>
```

### Common Icons for Presentations

| Use Case | Icon | Color |
|----------|------|-------|
| Positive/Good | Heart, Star, Checkmark | Gold (#e5b85c) |
| Negative/Warning | Alert Triangle, X | Dark brown (#3b230e) - exception to no-gray rule |
| Group/Team | People, Person | Gold (#e5b85c) or Light (#fef9ed) |
| Data/Chart | Chart Bar, Analytics | Match text color |
| Navigation | Arrow Right, Chevron | Match text color |
| Mirror/Reflection | Window, Grid | Gold (#e5b85c) |
| Achievement | Crown, Trophy | Gold (#e5b85c) |
| Nature/Purity | Sparkle, Leaf | Light (#fef9ed) |

**CRITICAL: Do NOT use red (#eb5757) or green (#6fcf97) - these are NOT part of the MAI color system!**

**CRITICAL: Do NOT use gray (#72675b) for icons except for negative/warning imagery. Gray icons have poor contrast against most backgrounds. Use gold (#e5b85c), light (#fef9ed), or dark brown (#3b230e) instead to ensure icon readability.**

### Icon Styling Rules

1. **Size**: Use `cqw` units to scale with slide (e.g., `2cqw` for small, `4cqw` for large)
2. **Stroke icons**: Use `stroke` attribute, set `stroke-width="1.5"`
3. **Fill icons**: Use `fill="currentColor"` to inherit text color
4. **Color**: Use gold (#e5b85c) or light (#fef9ed) for positive icons; dark brown (#3b230e) for negative/warning icons only
5. **Animation**: Add `animate-float` class for subtle movement
6. **CRITICAL**: Do NOT use gray (#72675b) for icons - poor contrast. Exception: negative/warning imagery can use dark brown (#3b230e)

---

## Image Assets - STRICT Usage Rules

Located in `MAI Design Skill/asset/Images/`:

### Background Image Categories (MUST follow these rules)

| Image Type | File Names | ONLY Use For |
|------------|------------|--------------|
| **background_** | `background_1.png` - `background_6.png` | **Cover Page ONLY** (Template #1) |
| **Section_** | `Section_1.png` - `Section_4.png` | **Section Title Page ONLY** (Template #4) |
| **Statement Slide_** | `Statement Slide_1.png` - `Statement Slide_5.png` | **Quote/Statement Pages ONLY** (Templates #12, #17) |

### Placeholder Images
- `image placeholder 01.png` - `image placeholder 31.png`
- Use for: Content areas, galleries, article images, team photos, etc.
- Can be used on ANY template that has image containers

### Usage Examples

```
✅ CORRECT:
- Cover slide → background_1.png
- Section Title → Section_2.png  
- Quote slide → Statement Slide_3.png
- Article image → image placeholder 05.png

❌ WRONG:
- Cover slide → Statement Slide_1.png (WRONG! Use background_*)
- Quote slide → background_3.png (WRONG! Use Statement Slide_*)
- Section Title → background_2.png (WRONG! Use Section_*)
```

---

## Output HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Presentation Title]</title>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Red+Hat+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <style>
    /* MAI Design Tokens */
    /* Typography Classes */
    /* Animation Classes */
    /* Navigation Styles */
  </style>
</head>
<body>
  <div class="progress-bar" id="progress-bar"></div>
  
  <div class="presentation">
    <!-- Slides -->
    <div class="slide active" data-slide="1">
      <div class="slide-inner">
        <!-- Slide Content -->
      </div>
    </div>
    <!-- More slides... -->
  </div>
  
  <!-- Navigation -->
  <nav class="nav-dots" id="nav-dots"></nav>
  <div class="nav-arrows">...</div>
  <div class="slide-counter">...</div>
  
  <script>
    /* Navigation Logic */
  </script>
</body>
</html>
```

---

## Example Prompt

User: "Create a presentation from this content: [paste Word document content]"

Assistant should:
1. Parse the content into logical sections
2. Identify content types (statements, data, quotes, etc.)
3. Map each section to appropriate template
4. Ensure visual variety
5. Generate complete HTML file
6. Include all animations and interactivity

---

## Checklist Before Generating

### Story & Structure
- [ ] Identified the central question/problem the presentation answers
- [ ] Found 3-5 L1 insights (no more, no less)
- [ ] Each L1 insight has a dedicated high-impact slide (Statement/Big Number)
- [ ] Content follows narrative arc (Setup → Tension → Discovery → Insight → Resolution → Action)
- [ ] Dense → Breathe rhythm maintained (no more than 3 dense slides in a row)

### Visual Design
- [ ] Each slide uses exact Figma positions from `templates/slide-templates.md`
- [ ] Each slide has only 1-3 key points (not overcrowded)
- [ ] No two consecutive slides use same template type
- [ ] Background images used on 40%+ slides (templates 1, 4, 12, 17)
- [ ] Colors follow light/dark text pairing rules
- [ ] All text is readable (contrast check)

### Polish
- [ ] Animations are assigned appropriately
- [ ] Footer is consistent across slides (bottom 3.43%, left/right 3.33%)
- [ ] Navigation works (keyboard, touch, mouse wheel)
- [ ] CSS includes `.mai-divider`, `.mai-avatar`, `.mai-avatar-stack`, `.mai-image` classes
