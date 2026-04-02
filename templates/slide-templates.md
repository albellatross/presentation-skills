# MAI Slide Templates Library - Pixel-Perfect Edition

This file contains all 18 slide templates from the MAI Design Language, **100% pixel-perfect match to Figma** (1920x1080 canvas).

All positioning values are extracted directly from demo.html which matches the original Figma file.

---

## Required External Resources

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Red+Hat+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Fluent UI Icons (REQUIRED - do not use emoji) -->
<link rel="stylesheet" href="https://unpkg.com/@fluentui/react-icons@2.0.232/fonts/FluentSystemIcons-Regular.css">
```

---

## Animation Classes Reference

| Class | Effect | Use For |
|-------|--------|---------|
| `animate-in` | Fade + slide up | Titles, text |
| `animate-in-right` | Fade + slide from right | Images |
| `animate-in-left` | Fade + slide from left | Side content |
| `animate-scale` | Fade + scale up | Numbers, highlights |
| `animate-number` | Scale + translate up | Big statistics |
| `animate-bar` | Width animation | Progress bars |
| `animate-float` | Subtle bobbing | Icons |
| `animate-glow` | Pulsing glow | Important numbers |
| `animate-blur-in` | Blur to sharp | Dramatic reveals |
| `animate-clip-up` | Reveal from bottom | Images |
| `animate-clip-left` | Reveal from left | Images |
| `animate-stagger-1/2/3/4` | Delayed animation | Cards, lists |

---

## Template Index

| # | Template Name | Background | Use Case |
|---|---------------|------------|----------|
| 1 | Cover Slide | Video | Opening, title page |
| 2 | Agenda Slide (Dark) | #72675b | Meeting agendas |
| 3 | Agenda Slide (Accent) | #3b230e | Meeting agendas (emphasis) |
| 4 | Section Title Slide | Image | Chapter dividers |
| 5 | Divider Slide | #ffeecc | Simple section breaks |
| 6 | Content with Image | #fef9ed | Title + large image |
| 7 | Team Showcase | #fef9ed | Team intros with avatars |
| 8 | Four Image Grid | #fef9ed | Product showcase |
| 9 | Kudos Slide | #fef9ed | Recognition (3 columns) |
| 10 | Image Collage | #ffeecc | Creative scattered layout |
| 11 | Image Gallery | #fef9ed | Grid of images (4x2) |
| 12 | Statement Slide | Image | Key messages |
| 13 | Two Column Text | #fef9ed | Long-form content |
| 14 | Text with Images | #ffeecc | Mixed text + images |
| 15 | Analysis/Status | #ffeecc | Reviews, assessments |
| 16 | Article with Image | #fef9ed | Detailed content |
| 17 | Quote Slide | #72675b / Image | Famous quotes |
| 18 | Vertical Text | #ffeecc | Key themes/pillars |
| 19 | Timeline | #fef9ed | Roadmaps, milestones |
| 20 | Content with Video | #fef9ed | Demo videos, walkthroughs |

---

## Figma Layout Reference

**Canvas:** 1920 x 1080px (16:9)  
**Standard margins:** left/right 64px (3.33%), top 100px (9.26%), bottom footer 37px (3.43%)  
**Gap sizes:** 24px = 1.25cqw, 32px = 1.667cqw  
**Footer position:** bottom 3.43%, left/right 3.33%

---

## 1. Cover Slide (封面页)

**Figma position:**
- Logo: top 5%, left 3.33%, size 3.96% x 3.15%
- Title: left 3.33%, top 34.63%, width 80.16%

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner">
    <img src="{{BACKGROUND_IMAGE}}" alt="" class="mai-bg-image">

    <!-- MAI Logo: top 5%, left 3.33% -->
    <div style="position: absolute; top: 5%; left: 3.33%; width: 3.96%; height: 3.15%;">
      <svg viewBox="0 0 76 34" fill="none" style="width: 100%; height: 100%;">
        <text x="0" y="28" fill="#ffeecc" font-family="'EB Garamond', serif" font-size="28" font-weight="400">MAI</text>
      </svg>
    </div>

    <!-- Title: left 3.33%, top 34.63%, width 80.16% -->
    <div style="position: absolute; left: 3.33%; top: 34.63%; width: 80.16%; color: var(--mai-yellow-1);">
      <p class="mai-header-large animate-in">{{TITLE_LINE_1}}</p>
      <p class="mai-header-large animate-in">{{TITLE_LINE_2}}</p>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 2. Agenda Slide - Dark (议程页-深色)

**Figma position:**
- Background: #72675b
- Title: left 3.33%, vertically centered, width 43.18%
- Topics: left 58.33%, vertically centered, width 38.54%, gap 24px

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-dark-1); color: var(--mai-yellow-1);">
    <!-- Title: left 3.33%, vertically centered, width 43.18% -->
    <div style="position: absolute; left: 3.33%; top: 50%; transform: translateY(-50%); width: 43.18%;">
      <h1 class="mai-header-large animate-in">Agenda</h1>
    </div>

    <!-- Topics: left 58.33%, width 38.54% -->
    <div style="position: absolute; left: 58.33%; top: 50%; transform: translateY(-50%); width: 38.54%; display: flex; flex-direction: column; gap: 1.25cqw;">
      <p class="mai-body-large animate-in">{{TOPIC_1}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_2}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_3}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_4}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_5}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_6}}</p>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 3. Agenda Slide - Accent (议程页-强调色)

**Figma position:** Same as Dark variant but with #3b230e background

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-dark-3); color: var(--mai-yellow-1);">
    <div style="position: absolute; left: 3.33%; top: 50%; transform: translateY(-50%); width: 43.18%;">
      <h1 class="mai-header-large animate-in">Agenda</h1>
    </div>

    <div style="position: absolute; left: 58.33%; top: 50%; transform: translateY(-50%); width: 38.54%; display: flex; flex-direction: column; gap: 1.25cqw;">
      <p class="mai-body-large animate-in">{{TOPIC_1}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_2}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_3}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_4}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_5}}</p>
      <hr class="mai-divider">
      <p class="mai-body-large animate-in">{{TOPIC_6}}</p>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 4. Section Title Slide (章节标题页)

**Figma position:**
- Content: left 3.33%, top 48.75%, width 84.27%, gap 24px

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner">
    <img src="{{BACKGROUND_IMAGE}}" alt="" class="mai-bg-image">

    <!-- Content: left 3.33%, top 48.75%, width 84.27% -->
    <div style="position: absolute; left: 3.33%; top: 48.75%; width: 84.27%; color: var(--mai-yellow-1); display: flex; flex-direction: column; gap: 1.25cqw;">
      <p class="mai-caption-large animate-in">{{SECTION_LABEL}}</p>
      <h1 class="mai-header-large animate-in">{{SECTION_TITLE}}</h1>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 5. Divider Slide (分隔页)

**Figma position:**
- Background: #ffeecc
- Text: left 3.33%, vertically centered, width 84%

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-yellow-1); color: var(--mai-primary-dark-2);">
    <p class="mai-header animate-in" style="position: absolute; left: 3.33%; top: 50%; transform: translateY(-50%); width: 84%;">
      {{DIVIDER_TEXT}}
    </p>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 6. Content with Image Slide (内容+图片页)

**Figma position:**
- Background: #fef9ed
- Text: left 3.33%, vertically centered, width 41.46%, gap 24px
- Image: left 51.3%, top 5.09%, width 46.67%, height 87.04%, mix-blend-mode: multiply

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-3);">
    <!-- Text Content: left 3.33%, vertically centered, width 41.46% -->
    <div style="position: absolute; left: 3.33%; top: 50%; transform: translateY(-50%); width: 41.46%; display: flex; flex-direction: column; gap: 1.25cqw;">
      <h1 class="mai-header animate-in">{{TITLE}}</h1>
      <p class="mai-title-serif animate-in" style="font-style: italic;">{{SUBTITLE}}</p>
    </div>

    <!-- Image: left 51.3%, top 5.09%, width 46.67%, height 87.04% -->
    <div class="mai-image-container animate-in-right" style="position: absolute; left: 51.3%; top: 5.09%; width: 46.67%; height: 87.04%; mix-blend-mode: multiply;">
      <img src="{{IMAGE_SRC}}" alt="" class="mai-image">
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-3);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 7. Team Showcase Slide (团队展示页)

**Figma position:**
- Content: left 3.33%, top 9.26%, width 93.23%
- Body text width: 60.94%
- Avatar stack: -12px margin overlap (-0.625cqw)
- Image row: aspect-ratio 883:600, gap 24px

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-2);">
    <!-- Content Container: left 3.33%, top 9.26%, width 93.23% -->
    <div style="position: absolute; left: 3.33%; top: 9.26%; width: 93.23%; display: flex; flex-direction: column; gap: 1.667cqw;">

      <!-- Header Row -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1.667cqw;">
        <!-- Text -->
        <div style="flex: 1; display: flex; flex-direction: column; gap: 1.25cqw;">
          <p class="mai-caption-large animate-in">{{TEAM_NAME}}</p>
          <h2 class="mai-title animate-in">{{TITLE}}</h2>
          <p class="mai-body animate-in" style="width: 60.94%;">{{DESCRIPTION}}</p>
        </div>

        <!-- Avatar Stack -->
        <div class="mai-avatar-stack animate-in" style="padding-right: 0.625cqw;">
          <div class="mai-avatar"><img src="{{AVATAR_1}}" alt=""></div>
          <div class="mai-avatar"><img src="{{AVATAR_2}}" alt=""></div>
          <div class="mai-avatar"><img src="{{AVATAR_3}}" alt=""></div>
        </div>
      </div>

      <!-- Image Row: aspect 883:600, gap 24px = 1.25cqw -->
      <div style="display: flex; gap: 1.25cqw;">
        <div class="mai-image-container animate-in" style="flex: 1; aspect-ratio: 883 / 600;">
          <img src="{{IMAGE_1}}" alt="" class="mai-image">
        </div>
        <div class="mai-image-container animate-in" style="flex: 1; aspect-ratio: 883 / 600;">
          <img src="{{IMAGE_2}}" alt="" class="mai-image">
        </div>
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 8. Four Image Grid Slide (四图网格页)

**Figma position:**
- Text sidebar: left 3.33%, top 9.26%, width 20.05%, height 81.48%
- Grid: left 25.32%, vertically centered, width 71.61%, height 81.48%, gap 32px (1.667cqw)

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-2);">
    <!-- Text Sidebar: left 3.33%, top 9.26%, width 20.05%, height 81.48% -->
    <div style="position: absolute; left: 3.33%; top: 9.26%; width: 20.05%; height: 81.48%; display: flex; flex-direction: column; gap: 1.667cqw;">
      <h1 class="mai-title-serif animate-in">{{TITLE}}</h1>
      <p class="mai-body-small animate-in" style="flex: 1;">{{DESCRIPTION}}</p>
    </div>

    <!-- Image Grid: left 25.32%, vertically centered, width 71.61%, height 81.48% -->
    <div style="position: absolute; left: 25.32%; top: 50%; transform: translateY(-50%); width: 71.61%; height: 81.48%; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr); gap: 1.667cqw;">
      <div class="mai-image-container animate-in"><img src="{{IMAGE_1}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_2}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_3}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_4}}" alt="" class="mai-image"></div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 9. Kudos Slide (表彰页)

**Figma position:**
- Title "Kudos": left 3.33%, top 9.26%, width 31.25%, 80px font (mai-title-serif-large)
- Column 1: left 3.33%, top 22.22%, width 22.03%
- Column 2: left 50%, centered (translateX -50%), top 22.22%, width 22.03%
- Column 3: left 74.64%, top 22.22%, width 22.03%
- Gap: 20px = 1.04cqw
- Image: aspect-ratio 1:1

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-2);">
    <!-- Title: 80px font, top 9.26% -->
    <h1 class="mai-title-serif-large animate-in" style="position: absolute; left: 3.33%; top: 9.26%; width: 31.25%;">Kudos</h1>

    <!-- Column 1: left 3.33% -->
    <div style="position: absolute; left: 3.33%; top: 22.22%; width: 22.03%; display: flex; flex-direction: column; gap: 1.04cqw;">
      <p class="mai-caption animate-in">{{COL1_DEPT}}</p>
      <p class="mai-title-serif animate-in">{{COL1_NAME}}</p>
      <p class="mai-body-small animate-in">{{COL1_MESSAGE}}</p>
      <!-- Image 1 -->
      <div class="mai-image-container animate-in" style="width: 100%; aspect-ratio: 1; margin-top: 1.04cqw;">
        <img src="{{COL1_IMAGE}}" alt="" class="mai-image">
      </div>
    </div>

    <!-- Column 2: centered in slide -->
    <div style="position: absolute; left: 50%; top: 22.22%; width: 22.03%; transform: translateX(-50%); display: flex; flex-direction: column; gap: 1.04cqw;">
      <p class="mai-caption animate-in">{{COL2_DEPT}}</p>
      <p class="mai-title-serif animate-in">{{COL2_NAME}}</p>
      <p class="mai-body-small animate-in">{{COL2_MESSAGE}}</p>
      <!-- Image 2 -->
      <div class="mai-image-container animate-in" style="width: 100%; aspect-ratio: 1; margin-top: 1.04cqw;">
        <img src="{{COL2_IMAGE}}" alt="" class="mai-image">
      </div>
    </div>

    <!-- Column 3: right side -->
    <div style="position: absolute; left: 74.64%; top: 22.22%; width: 22.03%; display: flex; flex-direction: column; gap: 1.04cqw;">
      <p class="mai-caption animate-in">{{COL3_DEPT}}</p>
      <p class="mai-title-serif animate-in">{{COL3_NAME}}</p>
      <p class="mai-body-small animate-in">{{COL3_MESSAGE}}</p>
      <!-- Image 3 -->
      <div class="mai-image-container animate-in" style="width: 100%; aspect-ratio: 1; margin-top: 1.04cqw;">
        <img src="{{COL3_IMAGE}}" alt="" class="mai-image">
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 10. Image Collage Slide (图片拼贴页)

**Figma exact positions (percentages from Figma):**
- Background: #ffeecc
- Centered text: left 50%, top calc(50% - 10.56%), width 33.96%

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-yellow-1); color: var(--mai-primary-dark-3);">
    <!-- Scattered Images (exact positions from Figma) -->
    <div class="mai-image-container animate-in" style="position: absolute; top: 27.13%; left: 0; width: 19.11%; height: 40.09%; mix-blend-mode: luminosity;">
      <img src="{{IMAGE_1}}" alt="" class="mai-image">
    </div>
    <div class="mai-image-container animate-in" style="position: absolute; top: 18.61%; left: 28.59%; width: 12.5%; height: 22.96%; filter: blur(3px);">
      <img src="{{IMAGE_2}}" alt="" class="mai-image">
    </div>
    <div class="mai-image-container animate-in" style="position: absolute; top: 0; left: 52.71%; width: 9.58%; height: 21.3%;">
      <img src="{{IMAGE_3}}" alt="" class="mai-image">
    </div>
    <div class="mai-image-container animate-in" style="position: absolute; top: 23.89%; left: 74.22%; width: 21.3%; height: 28.43%;">
      <img src="{{IMAGE_4}}" alt="" class="mai-image">
    </div>
    <div class="mai-image-container animate-in" style="position: absolute; top: 50.28%; left: 66.98%; width: 11.82%; height: 26.48%; filter: blur(10px);">
      <img src="{{IMAGE_5}}" alt="" class="mai-image">
    </div>
    <div class="mai-image-container animate-in" style="position: absolute; top: 63.52%; left: 28.59%; width: 7.24%; height: 11.11%; filter: blur(10px);">
      <img src="{{IMAGE_6}}" alt="" class="mai-image">
    </div>
    <div class="mai-image-container animate-in" style="position: absolute; top: 69.07%; left: 33.54%; width: 19.48%; height: 22.32%;">
      <img src="{{IMAGE_7}}" alt="" class="mai-image">
    </div>

    <!-- Centered Text: width 33.96% -->
    <div style="position: absolute; left: 50%; top: calc(50% - 10.56%); transform: translateX(-50%); width: 33.96%; text-align: center;">
      <p class="mai-title-serif-large animate-in">{{CENTERED_TEXT}}</p>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-3);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 11. Image Gallery Slide (图片画廊页)

**Figma position:**
- Title with underline: left 3.23%, top 9.26%, right 3.23%, padding 3.7% 0
- Grid: top 31.5%, left 3.33%, right 3.33%, bottom 9.26%, 4x2, gap 16px (0.833cqw)

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-2);">
    <!-- Title with underline -->
    <div style="position: absolute; left: 3.23%; top: 9.26%; right: 3.23%; border-bottom: 1px solid var(--mai-primary-dark-2); padding: 3.7% 0;">
      <h1 class="mai-title-serif animate-in">{{TITLE}}</h1>
    </div>

    <!-- Image Grid: 4 columns x 2 rows -->
    <div style="position: absolute; top: 31.5%; left: 3.33%; right: 3.33%; bottom: 9.26%; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr); gap: 0.833cqw;">
      <div class="mai-image-container animate-in"><img src="{{IMAGE_1}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_2}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_3}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_4}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_5}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_6}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_7}}" alt="" class="mai-image"></div>
      <div class="mai-image-container animate-in"><img src="{{IMAGE_8}}" alt="" class="mai-image"></div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 12. Statement Slide (陈述页)

**Figma position:**
- Content: left 3.33%, vertically centered, width 60%, gap 24px

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner">
    <img src="{{BACKGROUND_IMAGE}}" alt="" class="mai-bg-image">

    <div style="position: absolute; left: 3.33%; top: 50%; transform: translateY(-50%); width: 60%; color: var(--mai-yellow-1); display: flex; flex-direction: column; gap: 1.25cqw;">
      <p class="mai-caption-large animate-in">{{CAPTION}}</p>
      <h1 class="mai-title-serif-large animate-in">{{STATEMENT}}</h1>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 13. Two Column Text Slide (双栏文字页)

**Figma position:**
- Content: left 3.33%, top 22.22%, width 93.65%
- Divider + gap 40px (2.08cqw)
- Left title: width 27.6%
- Column gap: 168px = 8.75cqw

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-2);">
    <!-- Content with divider -->
    <div style="position: absolute; left: 3.33%; top: 22.22%; width: 93.65%; display: flex; flex-direction: column; gap: 2.08cqw;">
      <!-- Divider Line -->
      <hr class="animate-in" style="border: none; border-top: 1px solid var(--mai-primary-dark-2); width: 100%; opacity: 0.3;">

      <!-- Two Columns -->
      <div style="display: flex; gap: 8.75cqw;">
        <!-- Left: Title (width 27.6%) -->
        <p class="mai-title-serif animate-in" style="width: 27.6%; flex-shrink: 0;">
          {{LEFT_TITLE}}
        </p>
        <!-- Right: Body -->
        <div class="mai-body-small animate-in" style="flex: 1;">
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_1}}</p>
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_2}}</p>
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_3}}</p>
          <p>{{PARAGRAPH_4}}</p>
        </div>
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 14. Text with Images Slide (文字+图片混排页)

**Figma position:**
- Background: #ffeecc
- Content: left 3.33%, top 9.26%, width 93.65%
- Image 1: left 3.33%, top 36.11%, width 18.02%, height 32.04%
- Image 2: left 36.09%, top 59.44%, width 64.22%, height 21.95%

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-yellow-1); color: var(--mai-primary-dark-3);">
    <!-- Content with divider -->
    <div style="position: absolute; left: 3.33%; top: 9.26%; width: 93.65%; display: flex; flex-direction: column; gap: 2.08cqw;">
      <!-- Divider Line -->
      <hr class="animate-in" style="border: none; border-top: 1px solid var(--mai-primary-dark-3); width: 100%; opacity: 0.3;">

      <!-- Two Columns -->
      <div style="display: flex; gap: 8.75cqw;">
        <!-- Left: Title -->
        <p class="mai-title-serif animate-in" style="width: 27.6%; flex-shrink: 0;">
          {{LEFT_TITLE}}
        </p>
        <!-- Right: Body -->
        <div class="mai-body-small animate-in" style="flex: 1;">
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_1}}</p>
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_2}}</p>
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_3}}</p>
          <p style="font-style: italic;">{{SIGNATURE}}</p>
        </div>
      </div>
    </div>

    <!-- Image 1: Left bottom -->
    <div class="mai-image-container animate-in" style="position: absolute; left: 3.33%; top: 36.11%; width: 18.02%; height: 32.04%;">
      <img src="{{IMAGE_1}}" alt="" class="mai-image">
    </div>

    <!-- Image 2: Right bottom -->
    <div class="mai-image-container animate-in" style="position: absolute; left: 36.09%; top: 59.44%; width: 64.22%; height: 21.95%;">
      <img src="{{IMAGE_2}}" alt="" class="mai-image">
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-3);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 15. Analysis/Status Slide (分析/状态页)

**Figma position:**
- Background: #ffeecc
- Title: left 3.33%, top 9.26%, width 76.67%
- Content rows: left 3.33%, top 22.22%, width 93.65%
- Row label: width 20.83%, serif font
- Gap between rows: 32px (1.667cqw)
- Gap between columns: 168px (8.75cqw)

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-yellow-1); color: var(--mai-primary-dark-3);">
    <!-- Title -->
    <h1 class="mai-title-serif-large animate-in" style="position: absolute; left: 3.33%; top: 9.26%; width: 76.67%;">{{TITLE}}</h1>

    <!-- Content Rows -->
    <div style="position: absolute; left: 3.33%; top: 22.22%; width: 93.65%; display: flex; flex-direction: column; gap: 1.667cqw;">
      <!-- Row 1 -->
      <div class="animate-in" style="display: flex; gap: 8.75cqw;">
        <p class="mai-body-large" style="width: 20.83%; flex-shrink: 0; font-family: var(--mai-font-serif);">{{ROW1_LABEL}}</p>
        <ul class="mai-body-small" style="flex: 1; margin: 0; padding-left: 1.875cqw;">
          <li>{{ROW1_ITEM_1}}</li>
          <li>{{ROW1_ITEM_2}}</li>
          <li>{{ROW1_ITEM_3}}</li>
          <li>{{ROW1_ITEM_4}}</li>
        </ul>
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid var(--mai-primary-dark-3); width: 100%; opacity: 0.3;">

      <!-- Row 2 -->
      <div class="animate-in" style="display: flex; gap: 8.75cqw;">
        <p class="mai-body-large" style="width: 20.83%; flex-shrink: 0; font-family: var(--mai-font-serif);">{{ROW2_LABEL}}</p>
        <ul class="mai-body-small" style="flex: 1; margin: 0; padding-left: 1.875cqw;">
          <li>{{ROW2_ITEM_1}}</li>
          <li>{{ROW2_ITEM_2}}</li>
          <li>{{ROW2_ITEM_3}}</li>
        </ul>
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid var(--mai-primary-dark-3); width: 100%; opacity: 0.3;">

      <!-- Row 3 -->
      <div class="animate-in" style="display: flex; gap: 8.75cqw;">
        <p class="mai-body-large" style="width: 20.83%; flex-shrink: 0; font-family: var(--mai-font-serif);">{{ROW3_LABEL}}</p>
        <ul class="mai-body-small" style="flex: 1; margin: 0; padding-left: 1.875cqw;">
          <li>{{ROW3_ITEM_1}}</li>
          <li>{{ROW3_ITEM_2}}</li>
          <li>{{ROW3_ITEM_3}}</li>
        </ul>
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-3);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 16. Article with Image Slide (文章+图片页)

**Figma position:**
- Image: left 3.44%, top 0, width 29.01%, height 84.07%
- Content: left 39.69%, top 9.26%, width 54.11%
- Title + Author gap: 24px (1.25cqw)
- Content sections gap: 56px (2.92cqw)

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1); color: var(--mai-primary-dark-2);">
    <!-- Image: Left side, full height -->
    <div class="mai-image-container animate-in" style="position: absolute; left: 3.44%; top: 0; width: 29.01%; height: 84.07%;">
      <img src="{{IMAGE_SRC}}" alt="" class="mai-image">
    </div>

    <!-- Content: Right side -->
    <div style="position: absolute; left: 39.69%; top: 9.26%; width: 54.11%; display: flex; flex-direction: column; gap: 2.92cqw;">
      <!-- Title + Author -->
      <div style="display: flex; flex-direction: column; gap: 1.25cqw;">
        <p class="mai-title-serif animate-in">{{TITLE}}</p>
        <p class="mai-caption animate-in">{{AUTHOR}}</p>
      </div>

      <!-- Body Content -->
      <div style="display: flex; flex-direction: column; gap: 1.25cqw;">
        <p class="mai-body animate-in" style="font-weight: 400;">{{SUBTITLE}}</p>
        <div class="mai-body-small animate-in">
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_1}}</p>
          <p style="margin-bottom: 1.25cqw;">{{PARAGRAPH_2}}</p>
          <p>{{PARAGRAPH_3}}</p>
        </div>
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 17. Quote Slide (引用页)

**Two variants available:**

### 17A. Quote with Solid Background (纯色背景 - 强烈推荐)

**Figma 精确规格 (100% 还原):**
| 元素 | Figma 值 | CSS 值 |
|------|----------|--------|
| 背景 | #72675b | `var(--mai-primary-dark-1)` |
| 装饰引号字号 | 1060.571px | `55.24cqw` (~55cqw) |
| 引号透明度 | 20% | `opacity: 0.2` |
| 引号颜色 | #ffeecc | `var(--mai-yellow-1)` |
| 左引号位置 | 超出左边界 | `left: -5%; top: 10%` |
| 右引号位置 | 超出右边界 | `right: -5%; top: 10%` |
| 引言字号 | 80px | `4.167cqw` |
| 引言宽度 | 944px | `49.17%` (~50%) |
| 引言位置 | 居中 | `top: 50%; left: 50%; transform: translate(-50%, -50%)` |
| 行高 | 0.95 | `line-height: 0.95` |
| 字间距 | -3.2px | `letter-spacing: -0.04em` |

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background: var(--mai-primary-dark-1); overflow: hidden;">
    
    <!-- Decorative Opening Quote Mark (left) - 超出边界被裁剪 -->
    <div class="quote-mark-left animate-in" style="
      position: absolute; 
      left: -5%; 
      top: 10%; 
      font-size: 55cqw; 
      line-height: 1; 
      font-family: var(--mai-font-serif); 
      color: var(--mai-yellow-1);
      opacity: 0.2;
    ">"</div>
    
    <!-- Decorative Closing Quote Mark (right) - 超出边界被裁剪 -->
    <div class="quote-mark-right animate-in" style="
      position: absolute; 
      right: -5%; 
      top: 10%; 
      font-size: 55cqw; 
      line-height: 1; 
      font-family: var(--mai-font-serif); 
      color: var(--mai-yellow-1);
      opacity: 0.2;
    ">"</div>
    
    <!-- Quote Text - Centered, 精确 Figma 规格 -->
    <p class="mai-title-serif-large animate-in" style="
      position: absolute; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      width: 49%; 
      text-align: center;
      color: var(--mai-yellow-1); 
      font-size: 4.167cqw; 
      line-height: 0.95;
      letter-spacing: -0.04em;
    ">"{{QUOTE_TEXT}}"</p>
    
    <!-- Optional Attribution (如有署名) -->
    <!-- 
    <p class="mai-body animate-in" style="
      position: absolute; 
      top: 68%; 
      left: 50%; 
      transform: translateX(-50%);
      text-align: center;
      color: var(--mai-yellow-1); 
      opacity: 0.7;
    ">— {{ATTRIBUTION}}</p>
    -->

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

**视觉特征:**
- 大引号 " " 从两侧延伸入画面，被边界裁剪，营造视觉张力
- 引言文字完全居中，紧凑行高 (0.95)
- 引号透明度低 (20%)，不干扰阅读

**When to use 17A (Solid Background Quote):**
- User verbatim quotes from research
- Expert quotes and testimonials
- Provocative questions that frame a section
- Any quote that needs emphasis and breathing room

---

### 17B. Quote with Image Background (图片背景)

**Figma position:**
- Background: Statement Slide images
- Quote text: left 3.33%, top 6.48%, width 85.36%

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner">
    <!-- Background Image - use Statement Slide_*.png -->
    <img src="MAI Design Skill/asset/Images/Statement Slide_{{1-5}}.png" alt="" class="mai-bg-image">

    <!-- Quote Text -->
    <p class="mai-title-serif-large text-readable animate-in" style="position: absolute; left: 3.33%; top: 6.48%; width: 85.36%; color: var(--mai-yellow-1);">
      "{{QUOTE_TEXT}}"
    </p>
    
    <!-- Optional Attribution -->
    <p class="mai-body text-readable animate-in stagger-1" style="position: absolute; left: 3.33%; top: auto; bottom: 15%; color: var(--mai-yellow-1); opacity: 0.8;">
      — {{ATTRIBUTION}}
    </p>

    <div class="mai-footer mai-caption" style="color: var(--mai-yellow-1);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

**When to use 17B (Image Background Quote):**
- Atmospheric or mood-setting quotes
- When visual variety is needed after several solid-color slides
- Inspirational or philosophical quotes

---

### Quote vs Statement - 关键区别

| 场景 | 正确模板 | 错误用法 |
|------|---------|---------|
| 用户说的原话 (P01: "...") | **Quote (#17)** | ❌ Statement |
| 专家引言 | **Quote (#17)** | ❌ Statement |
| 你的核心观点/洞察 | **Statement (#12)** | ❌ Quote |
| 研究结论 | **Statement (#12)** | ❌ Quote |
| 引发思考的问题 | **Quote (#17A)** 或 **Statement (#12)** | 取决于是否引用他人 |

**记住:** Quote = 引用他人的话，Statement = 表达你的观点

---

## 18. Vertical Text Slide (垂直文字页)

**Figma position:**
- Background: #ffeecc
- Label: left 3.33%, bottom 12%, serif font weight 700
- Vertical text columns: right 3.33%, top 2.5%, bottom 9.26%, gap 32px (1.667cqw)
- Vertical text font size: 6.14cqw (118px)

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-yellow-1); color: var(--mai-primary-dark-2);">
    <!-- Label at bottom left -->
    <p class="mai-body-large animate-in" style="position: absolute; left: 3.33%; bottom: 12%; font-family: var(--mai-font-serif); font-weight: 700;">
      {{LABEL}}
    </p>

    <!-- Vertical Text Columns -->
    <div style="position: absolute; right: 3.33%; top: 2.5%; bottom: 9.26%; display: flex; gap: 1.667cqw; align-items: flex-end;">
      <!-- Column 1 -->
      <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">
        <p class="mai-header animate-in" style="font-size: 6.14cqw; white-space: nowrap;">{{TEXT_1}}</p>
      </div>
      <!-- Column 2 -->
      <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">
        <p class="mai-header animate-in" style="font-size: 6.14cqw; white-space: nowrap;">{{TEXT_2}}</p>
      </div>
      <!-- Column 3 -->
      <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">
        <p class="mai-header animate-in" style="font-size: 6.14cqw; white-space: nowrap;">{{TEXT_3}}</p>
      </div>
      <!-- Column 4 -->
      <div style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);">
        <p class="mai-header animate-in" style="font-size: 6.14cqw; white-space: nowrap;">{{TEXT_4}}</p>
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

---

## 19. Timeline Slide (时间轴页)

**Figma 精确规格：**

| 元素 | Figma 值 | CSS 值 |
|------|----------|--------|
| 背景 | #fef9ed | `var(--mai-primary-light-1)` |
| 标题位置 | left 62px, top 100px | `left: 3.23%; top: 9.26%` |
| 标题字号 | 46px | `2.396cqw` |
| 时间轴线位置 | top 50% (垂直居中) | `top: 50%` |
| 时间轴线宽度 | 1795px | `93.5%` |
| 节点圆点 | 24px 金色圆 | `1.25cqw`, `#e5b85c` |
| 日期字号 | 24px Bold | `1.25cqw`, `font-weight: 700` |
| 描述字号 | 14px | `0.73cqw` |
| 节点间距 | ~390px | `~20%` |

**布局特征：**
- 节点交替分布在时间轴上下
- 奇数节点 (1, 3, 5): 日期在上，描述在下
- 偶数节点 (2, 4): 描述在上，日期在下
- 虚线连接节点到时间轴

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1);">
    
    <!-- Title with divider -->
    <div style="position: absolute; left: 3.23%; top: 9.26%; width: 93.5%;">
      <hr class="mai-divider" style="margin-bottom: 2cqw;">
      <p class="mai-title-serif animate-in" style="color: var(--mai-primary-dark-2);">
        {{TIMELINE_TITLE}}
      </p>
    </div>

    <!-- Timeline Container -->
    <div style="position: absolute; left: 3.33%; top: 35%; width: 93.5%; height: 50%;">
      
      <!-- Horizontal Timeline Line -->
      <div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--mai-primary-dark-1);"></div>
      
      <!-- Timeline Nodes -->
      <!-- Node 1 (下方) -->
      <div class="timeline-node animate-in" style="position: absolute; left: 0%; top: 50%; transform: translateY(0); text-align: center; width: 10.4%;">
        <!-- 圆点 -->
        <div style="width: 1.25cqw; height: 1.25cqw; background: var(--mai-yellow-3); border-radius: 50%; margin: 0 auto 1cqw;"></div>
        <!-- 日期 -->
        <p style="font-family: var(--mai-font-sans); font-size: 1.25cqw; font-weight: 700; color: var(--mai-primary-dark-2); margin-bottom: 0.5cqw;">{{DATE_1}}</p>
        <!-- 虚线 -->
        <div style="width: 1px; height: 2.5cqw; border-left: 2px dashed var(--mai-primary-dark-1); opacity: 0.5; margin: 0 auto;"></div>
        <!-- 描述 -->
        <p style="font-family: var(--mai-font-sans); font-size: 0.73cqw; color: #343434; line-height: 1.4; margin-top: 0.5cqw;">{{DESC_1}}</p>
      </div>
      
      <!-- Node 2 (上方) -->
      <div class="timeline-node animate-in" style="position: absolute; left: 20%; top: 50%; transform: translateY(-100%); text-align: center; width: 10.4%;">
        <!-- 描述 -->
        <p style="font-family: var(--mai-font-sans); font-size: 0.73cqw; color: #343434; line-height: 1.4; margin-bottom: 0.5cqw;">{{DESC_2}}</p>
        <!-- 虚线 -->
        <div style="width: 1px; height: 2.5cqw; border-left: 2px dashed var(--mai-primary-dark-1); opacity: 0.5; margin: 0 auto;"></div>
        <!-- 日期 -->
        <p style="font-family: var(--mai-font-sans); font-size: 1.25cqw; font-weight: 700; color: var(--mai-primary-dark-2); margin-top: 0.5cqw;">{{DATE_2}}</p>
        <!-- 圆点 -->
        <div style="width: 1.25cqw; height: 1.25cqw; background: var(--mai-yellow-3); border-radius: 50%; margin: 1cqw auto 0;"></div>
      </div>
      
      <!-- Node 3 (下方) -->
      <div class="timeline-node animate-in" style="position: absolute; left: 40%; top: 50%; transform: translateY(0); text-align: center; width: 10.4%;">
        <div style="width: 1.25cqw; height: 1.25cqw; background: var(--mai-yellow-3); border-radius: 50%; margin: 0 auto 1cqw;"></div>
        <p style="font-family: var(--mai-font-sans); font-size: 1.25cqw; font-weight: 700; color: var(--mai-primary-dark-2); margin-bottom: 0.5cqw;">{{DATE_3}}</p>
        <div style="width: 1px; height: 2.5cqw; border-left: 2px dashed var(--mai-primary-dark-1); opacity: 0.5; margin: 0 auto;"></div>
        <p style="font-family: var(--mai-font-sans); font-size: 0.73cqw; color: #343434; line-height: 1.4; margin-top: 0.5cqw;">{{DESC_3}}</p>
      </div>
      
      <!-- Node 4 (上方) -->
      <div class="timeline-node animate-in" style="position: absolute; left: 60%; top: 50%; transform: translateY(-100%); text-align: center; width: 10.4%;">
        <p style="font-family: var(--mai-font-sans); font-size: 0.73cqw; color: #343434; line-height: 1.4; margin-bottom: 0.5cqw;">{{DESC_4}}</p>
        <div style="width: 1px; height: 2.5cqw; border-left: 2px dashed var(--mai-primary-dark-1); opacity: 0.5; margin: 0 auto;"></div>
        <p style="font-family: var(--mai-font-sans); font-size: 1.25cqw; font-weight: 700; color: var(--mai-primary-dark-2); margin-top: 0.5cqw;">{{DATE_4}}</p>
        <div style="width: 1.25cqw; height: 1.25cqw; background: var(--mai-yellow-3); border-radius: 50%; margin: 1cqw auto 0;"></div>
      </div>
      
      <!-- Node 5 (下方) -->
      <div class="timeline-node animate-in" style="position: absolute; left: 80%; top: 50%; transform: translateY(0); text-align: center; width: 10.4%;">
        <div style="width: 1.25cqw; height: 1.25cqw; background: var(--mai-yellow-3); border-radius: 50%; margin: 0 auto 1cqw;"></div>
        <p style="font-family: var(--mai-font-sans); font-size: 1.25cqw; font-weight: 700; color: var(--mai-primary-dark-2); margin-bottom: 0.5cqw;">{{DATE_5}}</p>
        <div style="width: 1px; height: 2.5cqw; border-left: 2px dashed var(--mai-primary-dark-1); opacity: 0.5; margin: 0 auto;"></div>
        <p style="font-family: var(--mai-font-sans); font-size: 0.73cqw; color: #343434; line-height: 1.4; margin-top: 0.5cqw;">{{DESC_5}}</p>
      </div>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

**When to use Timeline:**
- Product roadmap / release schedule
- Project milestones
- Historical progression
- Process stages with dates

---

## 20. Content with Video (文字+视频页)

**Figma 精确规格：**

| 元素 | Figma 值 | CSS 值 |
|------|----------|--------|
| 背景 | #fef9ed | `var(--mai-primary-light-1)` |
| 标题位置 | left 64px, top ~45px | `left: 3.33%; top: 4%` |
| 标题字号 | 46px | `2.396cqw` |
| 视频区域 left | 160px | `8.33%` |
| 视频区域 top | 130px | `12%` |
| 视频区域宽度 | 1600px | `83.33%` |
| 视频区域高度 | 900px | `83.33%` (保持 16:9) |
| 视频圆角 | 5px | `0.26cqw` |

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1);">
    
    <!-- Title -->
    <p class="mai-title-serif animate-in" style="position: absolute; left: 3.33%; top: 4%; color: var(--mai-primary-dark-2);">
      {{VIDEO_TITLE}}
    </p>

    <!-- Video Container -->
    <div style="position: absolute; left: 8.33%; top: 12%; width: 83.33%; height: 83.33%; border-radius: 0.26cqw; overflow: hidden; box-shadow: 0 0.5cqw 2cqw rgba(0,0,0,0.1);">
      <video class="animate-in" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
        <source src="{{VIDEO_SRC}}" type="video/mp4">
      </video>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

### 20B. Content with Video (带播放按钮 - 非自动播放)

用于需要用户点击播放的场景：

```html
<div class="slide" data-slide="{{N}}">
  <div class="slide-inner" style="background-color: var(--mai-primary-light-1);">
    
    <!-- Title -->
    <p class="mai-title-serif animate-in" style="position: absolute; left: 3.33%; top: 4%; color: var(--mai-primary-dark-2);">
      {{VIDEO_TITLE}}
    </p>

    <!-- Video Container with controls -->
    <div style="position: absolute; left: 8.33%; top: 12%; width: 83.33%; height: 83.33%; border-radius: 0.26cqw; overflow: hidden; box-shadow: 0 0.5cqw 2cqw rgba(0,0,0,0.1);">
      <video class="animate-in" controls playsinline poster="{{POSTER_IMAGE}}" style="width: 100%; height: 100%; object-fit: cover;">
        <source src="{{VIDEO_SRC}}" type="video/mp4">
      </video>
    </div>

    <div class="mai-footer mai-caption" style="color: var(--mai-primary-dark-2);">
      <span>{{FOOTER_LEFT}}</span>
      <span>{{FOOTER_CENTER}}</span>
      <span>{{FOOTER_RIGHT}}</span>
    </div>
  </div>
</div>
```

**When to use Content with Video:**
- Demo videos / product walkthroughs
- Screen recordings
- Prototype demonstrations
- Tutorial content

---

## CSS Classes Reference (Required in base-template.html)

These CSS classes must be present in your base template:

```css
/* Divider line */
.mai-divider {
  border: none;
  border-top: 1px solid currentColor;
  opacity: 0.3;
  width: 100%;
}

/* Avatar */
.mai-avatar {
  width: 4.167cqw;  /* 80px / 1920 */
  height: 4.167cqw;
  border-radius: 50%;
  border: 0.208cqw solid var(--mai-primary-light-1);
  overflow: hidden;
  flex-shrink: 0;
}

.mai-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.mai-avatar-stack {
  display: flex;
}

.mai-avatar-stack .mai-avatar {
  margin-right: -0.625cqw;  /* -12px / 1920 */
}

.mai-avatar-stack .mai-avatar:nth-child(1) { z-index: 3; }
.mai-avatar-stack .mai-avatar:nth-child(2) { z-index: 2; }
.mai-avatar-stack .mai-avatar:nth-child(3) { z-index: 1; }

/* Image classes */
.mai-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--mai-radius);
}

.mai-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--mai-radius);
}
```

---

## Quick Reference: Position Values

| Element | Position |
|---------|----------|
| Standard left margin | 3.33% (64px) |
| Standard top margin | 9.26% (100px) |
| Footer bottom | 3.43% (37px) |
| Standard gap (24px) | 1.25cqw |
| Large gap (32px) | 1.667cqw |
| XL gap (168px) | 8.75cqw |
| Avatar size | 4.167cqw |
| Avatar overlap | -0.625cqw |
