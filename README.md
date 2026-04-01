# MAI Presentation Skills

Generate professional HTML presentations following the **MAI (Microsoft AI) Design Language** and **M365 Design Language**.

## Quick Start

### Available Commands

| Command | Description |
|---------|-------------|
| `/mai-presentation` | Generate MAI Design Language presentations (AI insights, research) |
| `/m365-presentation` | Generate M365 product demos and feature presentations |

### Generate a Presentation

In Claude Code, run:

```
/mai-presentation
```

or for M365 product demos:

```
/m365-presentation
```

Then provide your content (Word document, outline, or bullet points). The skill will:

1. Extract the story and build a narrative arc
2. Design information hierarchy (L1 insights, L2 evidence, L3 context)
3. Match content to the correct templates by **purpose**
4. Generate interactive HTML with animations and navigation

### Example Usage

```
/mai-presentation

[Paste your Word document content or outline here]
```

## Features

- **Storytelling Framework** - Setup → Tension → Discovery → Insight → Resolution → Action
- **Template Matching** - 50+ templates matched by content purpose, not just form
- **Breathing Rhythm** - Automatic dense/breathing slide alternation
- **Data Visualization** - Progress bars, big numbers, data cards
- **Accessibility** - WCAG AA compliant color contrast
- **Interactive** - Keyboard, touch, scroll navigation

## Design Rules

| Rule | Description |
|------|-------------|
| **Story First** | Every presentation answers a question or solves a problem |
| **Hierarchy** | L1 = must remember, L2 = evidence, L3 = context, L4 = omit |
| **Rhythm** | Max 2-3 dense slides before a breathing slide |
| **Color** | Section内统一，禁止互补色，对比度≥4.5:1 |
| **Visual Variety** | No same-template consecutively, 40%+ background images |

## File Structure

```
.claude/skills/
├── mai-presentation.md        # MAI skill (/mai-presentation)
├── m365-presentation.md       # M365 skill (/m365-presentation)
└── template-matching-guide.md # Template selection rules

templates/
├── CLAUDE.md                  # Quick reference for Claude
├── base-template.html         # HTML structure template
├── slide-templates.md         # Copy-paste slide snippets
└── demo.html                  # Template showcase

MAI Design Skill/asset/Images/ # Background & placeholder images
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--mai-primary-dark-3` | #3b230e | Main text on light bg |
| `--mai-primary-light-1` | #fef9ed | Light background |
| `--mai-yellow-1` | #ffeecc | Warm background, dividers |
| `--mai-yellow-3` | #e5b85c | Accent, highlights |

## Documentation

- [Template Matching Guide](.claude/skills/template-matching-guide.md) - How to select the right template
- [Slide Templates](templates/slide-templates.md) - HTML snippets for each template type
- [Demo](https://albellatross.github.io/presentation-skills/templates/demo.html) - Live template showcase

## License

Internal use only - Microsoft AI Design Language.
