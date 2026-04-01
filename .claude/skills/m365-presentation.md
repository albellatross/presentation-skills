---
description: Generate Microsoft 365 product presentations with M365 design language
user_invocable: true
---

# M365 Presentation Generator Skill

Convert Word documents or outlines into polished HTML presentations for **Microsoft 365** product demos and showcases.

## Usage

```
/m365-presentation
```

Then provide your content (Word document, outline, or bullet points).

## Workflow

```
Content → Extract Product Story → Build Demo Flow → Design Hierarchy → Select Templates → Generate HTML
```

## M365 vs MAI Design

| Aspect | MAI Design | M365 Design |
|--------|------------|-------------|
| Purpose | General AI presentations | M365 product demos |
| Color Palette | Warm browns/golds | Microsoft brand colors |
| Tone | Storytelling, insights | Product features, demos |
| Templates | Same base templates | Same base templates |

## When to Use

- Microsoft 365 product launches
- Feature demonstrations
- Product training materials
- Sales enablement presentations

## Design Tokens (M365)

```css
/* TODO: Add M365-specific color tokens if different from MAI */
--m365-primary: #0078d4;      /* Microsoft Blue */
--m365-secondary: #106ebe;
--m365-accent: #ffb900;       /* Microsoft Yellow */
--m365-text-dark: #323130;
--m365-text-light: #ffffff;
--m365-bg-light: #faf9f8;
```

## Template Selection

Use the same Template Matching Guide as MAI:
- `.claude/skills/template-matching-guide.md`

The templates are the same; only the color scheme and content focus differ.

## Output

Generates interactive HTML presentation with:
- M365 brand colors (if configured)
- Keyboard/touch/scroll navigation
- Responsive scaling
- Animations

## Notes

This skill shares the base template system with `/mai-presentation`. 
The main difference is the design language context and expected content type.
