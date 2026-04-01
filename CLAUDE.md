# MAI Presentation Generator

This project contains tools for generating professional HTML presentations following the MAI (Microsoft AI) Design Language.

## Quick Start

When a user provides a Word document, outline, or content to convert into a presentation:

1. Read the skill documentation: `.claude/skills/mai-presentation.md`
2. Use the base template: `templates/base-template.html`
3. Reference slide templates: `templates/slide-templates.md`
4. Output to a new HTML file in the project root

## Workflow

```
User Content → Analyze → Select Templates → Generate HTML → Live Presentation
```

## Key Principles

### Content Mapping
- Opening/Title → Cover Slide with image
- Key insights → Statement Slide
- Quotes → Quote Slide with background
- Stories/details → Article with Image
- Statistics → Data Cards or Big Number
- Comparisons → Three Column or Two Column
- Processes → Numbered Steps
- Themes → Vertical Text
- Assessments → Analysis Rows
- Closing → Thank You Slide

### Visual Rules
- **Never** use same template type consecutively
- Use background images on **40%+** of slides
- Balance light/dark backgrounds (aim for 50/50)
- **Max 3-4 points** per slide - break up long content
- Visualize data (don't just show as text)

### Color Rules
- Light bg → Dark text (#3b230e)
- Dark bg → Light text (#ffeecc)
- Accent: #e5b85c (gold) for highlights

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

## Available Images

Background images (for statement/quote slides):
- `background_1.png` - `background_6.png`
- `Section_1.png` - `Section_4.png`
- `Statement Slide_1.png` - `Statement Slide_5.png`

Placeholder images (for content areas):
- `image placeholder 01.png` - `image placeholder 31.png`

## Checklist Before Delivery

- [ ] Content split into digestible slides (not overcrowded)
- [ ] Visual variety (no consecutive same-template)
- [ ] 40%+ slides have background images
- [ ] Data is visualized with cards/bars/numbers
- [ ] Text readable (proper color contrast)
- [ ] All animations assigned
- [ ] Navigation works (keyboard, touch, wheel)
