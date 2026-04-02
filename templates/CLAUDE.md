# MAI Presentation Generator

This project contains tools for generating professional HTML presentations following the MAI (Microsoft AI) Design Language.

## Quick Start

When a user provides a Word document, outline, or content to convert into a presentation:

1. Read the skill documentation: `.claude/skills/mai-presentation.md`
2. **Read the template matching guide: `.claude/skills/template-matching-guide.md`** (CRITICAL for correct template selection)
3. Use the base template: `templates/base-template.html`
4. Reference slide templates: `templates/slide-templates.md`
5. Output to a new HTML file in the project root

## Workflow

```
User Content → Extract Story → Build Narrative Arc → Design Hierarchy → Match Templates by PURPOSE → Generate HTML
```

## Core Philosophy

**A presentation is NOT a document export.** Documents inform; presentations persuade.

### The Three Laws
1. **Story First** - Every presentation answers a question or solves a problem
2. **Hierarchy Matters** - Not all information is equal; make important things LOOK important
3. **Rhythm Creates Impact** - Alternate dense slides with breathing room

## Key Principles

### Narrative Arc
Structure content as:
```
Setup → Tension → Discovery → Insight → Resolution → Action
```

### Information Hierarchy

| Level | What | Visual Treatment |
|-------|------|------------------|
| **L1: Core Insight** | 3-5 things audience MUST remember | Big Number, Statement slide |
| **L2: Evidence** | Data/quotes that prove L1 | Quote, Data Cards |
| **L3: Context** | Background to understand L1 | Body text, smaller type |
| **L4: Detail** | Nice-to-know | Omit or appendix |

### Breathing Rhythm

**Dense → Breathe → Dense → Breathe**

- After 2-3 dense slides, insert a breathing slide
- **Breathing slides:** Statement, Section Title, Quote, Big Number
- **Dense slides:** Analysis, Two Column, Data Cards

### Content Mapping

**按内容目的选择模板，不是按内容形式：**

| 内容目的 | 正确模板 | 错误示例 |
|---------|---------|---------|
| 核心洞察(L1) - 观点型 | Statement (#12) | ❌ Quote (那是引用他人) |
| 核心洞察(L1) - 数字型 | Big Number | ❌ 文字描述数据 |
| 引用用户/专家的话 | Quote (#17) - **优先17A纯色版** | ❌ Statement (那是你的观点) |
| 多指标对比 (2-4个) | Data Cards | ❌ 纯文字列举 |
| 结构化分析 (优缺点/状态) | Analysis (#15) | ❌ Quote 或 Statement |
| 深度文字论述 | Two Column (#13) | ❌ 塞进 Quote 页 |
| 图文并重的案例 | Article+Image (#16) | ❌ 只用 Content+Image |
| 3-4个并列主题 | Analysis (#15) — **Vertical Text 阅读性差** | ❌ 列表形式 |
| 路线图/里程碑 | Timeline (#19) | ❌ 纯文字列表 |
| Demo视频/产品演示 | Content+Video (#20) | ❌ 静态截图 |
| 单UI详细介绍 | Phone Mockup+Article (#21) | ❌ Content+Image |
| 多UI界面展示 | Four Phone Gallery (#22) | ❌ Image Gallery |
| 功能+双UI对比 | Text+Two Phones (#23) | ❌ Four Image Grid |

**详细匹配规则见:** `.claude/skills/template-matching-guide.md`

### Visual Rules
- **Never** use same template type consecutively
- Use background images on **40%+** of slides
- Balance light/dark backgrounds (aim for 50/50)
- **Max 3-4 points** per slide - break up long content
- **Max 3 dense slides** before a breathing slide
- Visualize data (don't just show as text)

### Color Rules
- Light bg → Dark text (#3b230e)
- Dark bg → Light text (#ffeecc)
- Accent: #e5b85c (gold) for highlights and L1 emphasis

### Color Consistency Rules (NEW)
- **Section内统一** — 同一章节的slides保持视觉连贯
- **禁止互补色** — 不要红+绿、蓝+橙等刺眼组合
- **禁止颜色跳跃** — 相邻slides不要剧烈变色
- **Accessibility** — 确保对比度≥4.5:1，深色背景加 `.text-readable`

**详细颜色规范见:** `.claude/skills/template-matching-guide.md`

## Data Visualization

### Progress Bars (Pill-shaped Capsule)
```html
<!-- Basic (light bg) -->
<div class="mai-progress">
  <div class="mai-progress-fill mai-progress-fill-accent animate-bar" style="--bar-width: 85%;"></div>
</div>

<!-- Dark background variant -->
<div class="mai-progress mai-progress-dark">
  <div class="mai-progress-fill mai-progress-fill-accent animate-bar" style="--bar-width: 85%;"></div>
</div>

<!-- With label -->
<div class="mai-progress-labeled">
  <div class="mai-progress-label">
    <span class="mai-progress-label-text">Metric Name</span>
    <span class="mai-progress-label-value">85%</span>
  </div>
  <div class="mai-progress">
    <div class="mai-progress-fill mai-progress-fill-accent animate-bar" style="--bar-width: 85%;"></div>
  </div>
</div>
```

### Fill Variants
- `.mai-progress-fill` - Default dark brown
- `.mai-progress-fill-accent` - Gold (#e5b85c)
- `.mai-progress-fill-light` - Light gradient for dark backgrounds

### Big Numbers
```html
<p class="data-number">80%</p>           <!-- 8cqw - hero metrics -->
<p class="data-number-medium">42</p>      <!-- 5cqw - numbered lists -->
```

### Data Cards
- `.data-card` - Dark/transparent (for image bg)
- `.data-card-light` - Light variant (for light bg)

## File Structure

```
/
├── .claude/
│   └── skills/
│       └── mai-presentation.md    # Full skill documentation
├── templates/
│   ├── base-template.html         # Base HTML structure
│   └── slide-templates.md         # Copy-paste slide snippets
├── MAI Design Skill/
│   └── asset/
│       └── Images/                # Background & placeholder images
├── demo.html                      # Template showcase (reference)
└── [output].html                  # Generated presentations
```

## Available Assets

### Video Backgrounds (Cover & Thank You - REQUIRED)
| File | Recommended Use |
|------|-----------------|
| `cover_01.mp4` - `cover_06.mp4` | Cover page or Thank You page |

**规则:** Cover 和 Thank You 页面必须使用视频背景，不要用静态图片。

### Background images (for statement/quote slides):
- `background_1.png` - `background_6.png`
- `Section_1.png` - `Section_4.png`
- `Statement Slide_1.png` - `Statement Slide_5.png`

Placeholder images (for content areas):
- `image placeholder 01.png` - `image placeholder 31.png`

## Checklist Before Delivery

### Story & Structure
- [ ] Identified central question the presentation answers
- [ ] Found 3-5 L1 insights with high-impact slides
- [ ] Follows narrative arc (Setup → Action)
- [ ] Dense → Breathe rhythm maintained

### Visual Design
- [ ] Content split into digestible slides (not overcrowded)
- [ ] Visual variety (no consecutive same-template)
- [ ] 40%+ slides have background images
- [ ] Data is visualized with cards/bars/numbers
- [ ] Cover/Thank You 使用 video 背景 (cover_*.mp4)
- [ ] Quote 页面使用 17A 纯色版 (#72675b + 装饰引号)
- [ ] 避免使用 Vertical Text (#18)，优先 Analysis (#15)
- [ ] 有 Figma 设计时导出真实截图而非 placeholder

### Polish
- [ ] All animations assigned
- [ ] Navigation works (keyboard, touch, wheel)
