# MAI Presentation Generator

This project contains tools for generating professional HTML presentations following the MAI (Microsoft AI) Design Language.

## Quick Start

When a user provides a Word document, outline, or content to convert into a presentation:

1. Use the skill: `.claude/skills/mai-presentation/SKILL.md`
2. Reference templates: `.claude/skills/mai-presentation/references/SLIDE-TEMPLATES.md`
3. Match templates by purpose: `.claude/skills/mai-presentation/references/TEMPLATE-MATCHING.md`
4. Use base template: `templates/base-template.html`
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

## Content Mapping

**按内容目的选择模板，不是按内容形式：**

| 内容目的 | 正确模板 | 错误示例 |
|---------|---------|---------|
| 核心洞察(L1) - 观点型 | Statement (#12) | ❌ Quote (那是引用他人) |
| 核心洞察(L1) - 数字型 | Big Number | ❌ 文字描述数据 |
| 引用用户/专家的话 | Quote (#17) | ❌ Statement (那是你的观点) |
| 多指标对比 (2-4个) | Data Cards | ❌ 纯文字列举 |
| 结构化分析 (优缺点/状态) | Analysis (#15) | ❌ Quote 或 Statement |
| 深度文字论述 | Two Column (#13) | ❌ 塞进 Quote 页 |
| 图文并重的案例 | Article+Image (#16) | ❌ 只用 Content+Image |
| 3-4个并列主题 | Vertical Text (#18) | ❌ 列表形式 |

**详细匹配规则见:** `.claude/skills/mai-presentation/references/TEMPLATE-MATCHING.md`

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

## File Structure

```
/
├── .claude/
│   └── skills/
│       └── mai-presentation/       # Main skill (Agent Skills format)
│           ├── SKILL.md            # Skill definition & instructions
│           ├── references/
│           │   ├── TEMPLATE-MATCHING.md  # Template selection guide
│           │   ├── SLIDE-TEMPLATES.md    # HTML snippets
│           │   └── DESIGN-REFERENCE.md   # Colors, typography, motion
│           └── assets/
├── templates/
│   └── base-template.html          # Base HTML structure
├── MAI Design Skill/
│   └── asset/
│       └── Images/                 # Background & placeholder images
├── demo.html                       # Template showcase (reference)
└── [output].html                   # Generated presentations
```

## Available Images

Background images (for statement/quote slides):
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
- [ ] Text readable (proper color contrast)

### Polish
- [ ] All animations assigned
- [ ] Navigation works (keyboard, touch, wheel)
