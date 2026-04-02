# Template Matching Guide - 内容到模板的精确匹配

## 核心原则

**内容的功能性决定模板选择，不是内容的表面形式。**

错误示例：
- ❌ 看到"文字+描述" → 随机选择一个有文字的模板
- ❌ 看到数据 → 直接放到 Quote 模板（因为看起来都是文字）
- ❌ 看到多个要点 → 全部堆到一个 Analysis 模板

正确示例：
- ✅ 识别内容的**目的** → 是展示数据？表达观点？列举步骤？
- ✅ 识别内容的**信息层级** → 这是核心洞察(L1)还是支撑证据(L2)？
- ✅ 识别内容的**展示需求** → 需要图片配合？需要数据可视化？纯文字论述？

---

## 模板功能分类矩阵

### 分类维度

| 维度 | 选项 |
|------|------|
| **信息密度** | LOW (1个核心点) / MEDIUM (2-4个点) / HIGH (5+个点或详细论述) |
| **视觉需求** | TEXT-ONLY / TEXT+DATA / TEXT+IMAGE / IMAGE-HEAVY |
| **叙事功能** | 开场/转场 / 核心论点 / 证据支撑 / 详细展开 / 总结收尾 |
| **呼吸节奏** | 呼吸(breathing) / 实质(substance) |

---

## 按功能分类的模板清单

### 🎬 A. 开场与转场类 (Opening & Transition)

#### A1. Cover Slide (封面页)
**模板编号:** #1  
**功能:** 演示开始，建立第一印象  
**信息密度:** LOW  
**视觉:** 全屏背景图 + 大标题  
**呼吸类型:** 呼吸  

**适用内容:**
- 演示主标题
- 项目名称
- 活动名称
- 报告标题

**不适用:**
- ❌ 任何需要解释的内容
- ❌ 数据或结论
- ❌ 多段文字

**HTML 关键结构:**
```
背景: background_*.png (专用)
标题: mai-header-large, top 34.63%
副标题: mai-title-serif (可选)
```

---

#### A2. Section Title (章节标题页)
**模板编号:** #4  
**功能:** 标记内容板块的开始，让观众知道"接下来讲什么"  
**信息密度:** LOW  
**视觉:** 全屏背景图 + 章节名  
**呼吸类型:** 呼吸  

**适用内容:**
- 新章节开始
- 话题转换
- 研究板块切换（如：方法论 → 发现 → 建议）

**不适用:**
- ❌ 带解释的转场（应使用 Divider）
- ❌ 需要配图说明的转场

**⚠️ 背景图片颜色规则:**
| 背景图片 | 色调 | 文字颜色 |
|---------|------|---------|
| `Section_1.png` | 深色 | 浅色 `#ffeecc` |
| `Section_2.png` | 深色 | 浅色 `#ffeecc` |
| `Section_3.png` | **浅色** | **深色** `#3b230e` |
| `Section_4.png` | **浅色** | **深色** `#3b230e` |

**HTML 关键结构:**
```
背景: Section_*.png (专用)
标签: mai-caption-large
标题: mai-header-large, top 48.75%
文字颜色: 根据背景深浅选择 (见上表)
```

---

#### A3. Divider Slide (分隔页)
**模板编号:** #5  
**功能:** 话题过渡，可带简短引导语  
**信息密度:** LOW  
**视觉:** 纯色背景 (#ffeecc) + 中等字号文字  
**呼吸类型:** 呼吸  

**适用内容:**
- 引导性问题 ("What did users tell us?")
- 过渡性陈述 ("Now let's look at the data")
- 反思性语句 ("Before we continue...")

**不适用:**
- ❌ 核心洞察（应使用 Statement）
- ❌ 章节标题（应使用 Section Title）

**HTML 关键结构:**
```
背景: #ffeecc
文字: mai-header, 居中
```

---

### 💡 B. 核心论点类 (Key Insights)

#### B1. Statement Slide (陈述页) - L1 洞察专用
**模板编号:** #12  
**功能:** 展示演示中最重要的 3-5 个核心洞察  
**信息密度:** LOW (1个核心观点)  
**视觉:** 全屏背景图 + 大字号陈述  
**呼吸类型:** 呼吸  

**适用内容:**
- 研究的核心发现 ("Users don't want more features—they want less friction")
- 关键结论
- 战略性判断
- 项目的核心价值主张

**不适用:**
- ❌ 需要解释的观点（应拆分：Statement + 后续展开）
- ❌ 数据展示（应使用 Big Number 或 Data Cards）
- ❌ 引用他人的话（应使用 Quote）

**HTML 关键结构:**
```
背景: Statement Slide_*.png (专用)
标签: mai-caption-large
陈述: mai-title-serif-large, width 60%
```

---

#### B2. Big Number Slide (大数字页) - 数据型 L1 洞察
**模板编号:** 变体 (基于 #6 Content+Image 或自定义)  
**功能:** 用一个震撼的数字传达核心发现  
**信息密度:** LOW (1个数字 + 简短解释)  
**视觉:** 巨大数字 + 简短说明  
**呼吸类型:** 呼吸  

**适用内容:**
- 关键统计数据 ("90% of users...")
- 时间指标 ("3 seconds to first interaction")
- 对比数据 ("10x faster than before")
- NPS/评分 ("9.2 out of 10")

**不适用:**
- ❌ 多个数据点（应使用 Data Cards）
- ❌ 需要图表的数据（应使用数据可视化模板）

**HTML 关键结构:**
```
数字: data-number 或 data-number-medium
单位/标签: mai-body
解释: mai-body-small
```

---

#### B3. Vertical Text (垂直文字页) - 主题/支柱展示
**模板编号:** #18  
**功能:** 展示 3-4 个并列的核心主题或支柱  
**信息密度:** LOW-MEDIUM (3-4个关键词)  
**视觉:** 大字号垂直排列  
**呼吸类型:** 呼吸  

**⚠️ 阅读性警告:** 此模板阅读性较差，应谨慎使用。优先考虑 Analysis (#15) 布局作为替代。

**适用内容:**
- 核心价值观 ("Trust / Innovation / Impact")
- 战略支柱
- 设计原则
- 研究的 3-4 个主要发现（关键词形式）

**不适用:**
- ❌ 需要解释的概念（每个词无法展开）
- ❌ 超过 4 个项目
- ❌ 长短语（每个项目应 ≤3 个词）
- ❌ 用户目标/功能列表 — **使用 Analysis (#15) 替代**

**替代方案:**
当内容需要描述或解释时，使用 **Analysis (#15)** 布局：
- 左侧：标签/关键词 (serif 字体)
- 右侧：详细描述 (bullet list)
- 更清晰、更易读

**HTML 关键结构:**
```
背景: #ffeecc
标签: mai-body-large, bottom 12%
垂直文字: mai-header, font-size 6.14cqw
```

---

### 📣 C. 引用与声音类 (Voice & Quotes)

#### C1. Quote Slide (引用页) - 他人声音
**模板编号:** #17  
**功能:** 展示用户引言、专家观点、名人名言、引发思考的问题  
**信息密度:** MEDIUM (1段引言)  
**视觉:** 两种变体可选  
**呼吸类型:** 呼吸  

**⚠️ 这是最容易与 Statement 混淆的模板！关键区分：**
- **Quote (#17)** = 引用**他人**说的话，或引发思考的问题
- **Statement (#12)** = 表达**你自己**的观点或研究结论

**视觉变体:**

| 变体 | 背景 | 视觉特征 | 使用场景 | 推荐度 |
|------|------|----------|---------|--------|
| **17A (强烈推荐)** | 纯色 #72675b | 居中文字 + 左右大装饰引号 " " | 用户引言、专家观点、问题 | ⭐⭐⭐ |
| **17B** | 图片背景 | 左对齐文字 | 需要氛围感的引言 | ⭐ |

**17A 精确 Figma 规格 (100% 还原):**

| 元素 | Figma 值 | CSS 值 |
|------|----------|--------|
| 背景 | #72675b | `var(--mai-primary-dark-1)` |
| 装饰引号字号 | 1060px | `55cqw` |
| 引号透明度 | 20% | `opacity: 0.2` |
| 引号颜色 | #ffeecc | `var(--mai-yellow-1)` |
| 左引号位置 | 超出左边界 | `left: -5%; top: 10%` |
| 右引号位置 | 超出右边界 | `right: -5%; top: 10%` |
| 引言字号 | 80px | `4.167cqw` |
| 引言宽度 | 944px | `49%` |
| 引言位置 | 居中 | `top: 50%; left: 50%; transform: translate(-50%, -50%)` |
| 行高 | 0.95 | `line-height: 0.95` |
| 字间距 | -3.2px | `letter-spacing: -0.04em` |

**关键实现要点:**
- 容器必须 `overflow: hidden` 以裁剪超出的引号
- 引号从两侧延伸入画面，营造视觉张力
- 引言紧凑行高 (0.95)，负字间距 (-0.04em)
- **优点:** 阅读性好、视觉专业、100% Figma 还原

**适用内容:**
- 用户访谈原话 (P05: "It remembers custom phrases...")
- 专家观点 (Yibo: "Only 10% of features get used")
- 领导者/CEO 的话
- 研究参与者的反馈
- 引发思考的问题 ("Do people leave Microsoft with less attention to detail?")

**不适用:**
- ❌ 你自己的观点（应使用 Statement #12）
- ❌ 研究结论（应使用 Statement #12）
- ❌ 数据陈述（应使用 Big Number）
- ❌ 长段论述（应使用 Two Column Text）

**HTML 关键结构 (17A - 强烈推荐):**
```html
<div class="slide-inner" style="background: var(--mai-primary-dark-1); overflow: hidden;">
  <!-- 左引号 - 超出边界被裁剪 -->
  <div style="position: absolute; left: -5%; top: 10%; font-size: 55cqw; 
              line-height: 1; font-family: var(--mai-font-serif); 
              color: var(--mai-yellow-1); opacity: 0.2;">"</div>
  <!-- 右引号 -->
  <div style="position: absolute; right: -5%; top: 10%; font-size: 55cqw; 
              line-height: 1; font-family: var(--mai-font-serif); 
              color: var(--mai-yellow-1); opacity: 0.2;">"</div>
  <!-- 引言 -->
  <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
            width: 49%; text-align: center; color: var(--mai-yellow-1); 
            font-size: 4.167cqw; line-height: 0.95; letter-spacing: -0.04em;">
    "{{QUOTE_TEXT}}"
  </p>
</div>
```

**HTML 关键结构 (17B):**

**⚠️ Statement Slide 背景图片颜色规则:**
| 背景图片 | 色调 | 文字颜色 |
|---------|------|---------|
| `Statement Slide_1.png` | **浅色** | **深色** `#3b230e` |
| `Statement Slide_2.png` | 深色 | 浅色 `#ffeecc` |
| `Statement Slide_3.png` | 深色 | 浅色 `#ffeecc` |
| `Statement Slide_4.png` | 深色 | 浅色 `#ffeecc` |
| `Statement Slide_5.png` | 深色 | 浅色 `#ffeecc` |

```
背景: Statement Slide_*.png (专用)
引言: mai-title-serif-large, top 6.48%, width 85.36%
来源/署名: mai-caption (可选)
文字颜色: 根据背景深浅选择 (见上表)
```

---

### 📊 D. 数据展示类 (Data Presentation)

#### D1. Data Cards (数据卡片) - 多指标对比
**模板编号:** 变体 (基于自定义布局)  
**功能:** 并排展示 2-4 个相关指标  
**信息密度:** MEDIUM-HIGH  
**视觉:** 卡片布局 + 进度条/数字  
**呼吸类型:** 实质  

**适用内容:**
- 多个用户细分的数据
- 功能对比
- 时间段对比 (Q1 vs Q2)
- 不同维度的评分

**不适用:**
- ❌ 单一指标（应使用 Big Number）
- ❌ 需要详细解释的数据（应使用 Analysis）

**HTML 关键结构:**
```
.data-card / .data-card-light
.mai-progress (进度条)
数字: data-number-medium
标签: mai-body-small
```

---

#### D2. Analysis/Status Slide (分析页) - 详细评估
**模板编号:** #15  
**功能:** 结构化展示多个维度的分析  
**信息密度:** HIGH  
**视觉:** 标签+内容 的行列布局  
**呼吸类型:** 实质  

**适用内容:**
- What's working / What's not / Next steps
- Pros / Cons
- 多维度评估 (质量/速度/成本)
- 项目状态更新
- 研究发现的结构化总结

**不适用:**
- ❌ 简单列表（应使用 Content+Image 或 Two Column）
- ❌ 单一主题的深入讨论（应使用 Article）

**HTML 关键结构:**
```
背景: #ffeecc
标题: mai-title-serif-large
行: 左侧 mai-body-large (serif), 右侧 bullet list
分隔线: 1px solid, opacity 0.3
```

---

### 📝 E. 文字论述类 (Text Content)

#### E1. Two Column Text (双栏文字页) - 深度阅读
**模板编号:** #13  
**功能:** 展示需要认真阅读的长文本  
**信息密度:** HIGH  
**视觉:** 左标题 + 右正文  
**呼吸类型:** 实质  

**适用内容:**
- 方法论详细描述
- 研究背景说明
- 政策/流程文档
- 深度分析文字

**不适用:**
- ❌ 要点列表（应使用 Analysis）
- ❌ 需要配图的内容（应使用 Text+Images 或 Article）
- ❌ 核心洞察（应使用 Statement，不要埋在长文里）

**HTML 关键结构:**
```
背景: #fef9ed
分隔线: top
左列: mai-title-serif, width 27.6%
右列: mai-body-small
间距: gap 8.75cqw
```

---

#### E2. Text with Images (文字+图片混排) - 带装饰的文字
**模板编号:** #14  
**功能:** 长文本配以装饰性图片  
**信息密度:** HIGH  
**视觉:** 文字为主，图片为辅  
**呼吸类型:** 实质  

**适用内容:**
- CEO/领导者的寄语
- 带署名的正式声明
- 需要视觉点缀的长文

**不适用:**
- ❌ 图片是内容核心（应使用 Article+Image）
- ❌ 纯文字即可（应使用 Two Column Text）

**HTML 关键结构:**
```
背景: #ffeecc
文字布局: 同 Two Column
图片1: left 3.33%, top 36.11%, 小尺寸
图片2: left 36.09%, top 59.44%, 横幅
```

---

#### E3. Article with Image (文章页) - 图文并重
**模板编号:** #16  
**功能:** 图片和文字同等重要，深度展开  
**信息密度:** HIGH  
**视觉:** 左大图 + 右文章  
**呼吸类型:** 实质  

**适用内容:**
- 案例研究
- 人物专访/Profile
- 功能/产品介绍
- 详细的发现展开

**不适用:**
- ❌ 图片只是装饰（应使用 Text+Images）
- ❌ 不需要图片（应使用 Two Column Text）

**HTML 关键结构:**
```
背景: #fef9ed
图片: left 3.44%, width 29.01%, height 84.07%
内容: left 39.69%, width 54.11%
标题: mai-title-serif
正文: mai-body-small
```

---

### 🖼️ F. 图片展示类 (Visual Showcase)

#### F1. Content with Image (内容+图片) - 标题配图
**模板编号:** #6  
**功能:** 简短标题配大图，强调视觉  
**信息密度:** LOW  
**视觉:** 左文字 + 右大图  
**呼吸类型:** 可呼吸/可实质  

**适用内容:**
- 话题引入（标题+相关图）
- 人物/嘉宾介绍
- 产品展示（简短标题+产品图）

**不适用:**
- ❌ 需要详细解释（应使用 Article+Image）
- ❌ 多张图（应使用 Gallery 或 Grid）

**HTML 关键结构:**
```
背景: #fef9ed
文字: left 3.33%, width 41.46%
图片: left 51.3%, width 46.67%, height 87.04%
图片模式: mix-blend-mode: multiply
```

---

#### F2. Four Image Grid (四图网格) - 产品/功能展示
**模板编号:** #8  
**功能:** 展示 4 个并列的产品/功能/项目  
**信息密度:** MEDIUM  
**视觉:** 左侧简介 + 右侧 2x2 网格  
**呼吸类型:** 实质  

**适用内容:**
- 4 个核心产品
- 4 个功能模块
- 4 个项目展示
- 4 种用户场景

**不适用:**
- ❌ 图片数量不是 4（用其他 Gallery 类型）
- ❌ 需要详细说明每张图（应使用多个 Article 页）

**HTML 关键结构:**
```
背景: #fef9ed
文字栏: left 3.33%, width 20.05%
网格: left 25.32%, width 71.61%, 2x2, gap 1.667cqw
```

---

#### F3. Image Gallery (图片画廊) - 8 图展示
**模板编号:** #11  
**功能:** 大量图片概览  
**信息密度:** LOW (文字少，图多)  
**视觉:** 4x2 网格  
**呼吸类型:** 可呼吸/可实质  

**适用内容:**
- 设计探索展示
- 活动照片回顾
- 用户界面截图集
- 灵感板 (Moodboard)

**不适用:**
- ❌ 需要解释每张图（应使用 Four Image Grid 或多页）
- ❌ 图片数量少于 6 张

**HTML 关键结构:**
```
背景: #fef9ed
标题: mai-title-serif, 带下划线
网格: 4x2, gap 0.833cqw
```

---

#### F4. Image Collage (图片拼贴) - 创意布局
**模板编号:** #10  
**功能:** 艺术性/创意性的图片展示  
**信息密度:** LOW  
**视觉:** 散落式图片 + 居中文字  
**呼吸类型:** 呼吸  

**适用内容:**
- 创意概念展示
- 品牌故事
- 抽象主题
- 设计氛围展示

**不适用:**
- ❌ 需要清晰展示的图片（散落+模糊效果会影响）
- ❌ 正式/商务场景

**HTML 关键结构:**
```
背景: #ffeecc
图片: 7张，各自绝对定位，部分 blur
文字: 居中, mai-title-serif-large
```

---

### 👥 G. 团队与人物类 (People)

#### G1. Team Showcase (团队展示)
**模板编号:** #7  
**功能:** 介绍团队及其工作  
**信息密度:** MEDIUM  
**视觉:** 头像 + 描述 + 2张图  
**呼吸类型:** 实质  

**适用内容:**
- 团队介绍
- 项目组展示
- 跨职能团队说明

**不适用:**
- ❌ 个人介绍（应使用 Kudos 或 Article）
- ❌ 纯文字团队说明（不需要图）

**HTML 关键结构:**
```
背景: #fef9ed
头像栈: mai-avatar-stack, 3个头像
描述: mai-body, width 60.94%
图片: 2张, aspect 883:600
```

---

#### G2. Kudos Slide (表彰页)
**模板编号:** #9  
**功能:** 表彰/感谢 3 个人  
**信息密度:** MEDIUM  
**视觉:** 3 列，每列 = 部门+姓名+感谢语+照片  
**呼吸类型:** 实质  

**适用内容:**
- 员工表彰
- 贡献者感谢
- 团队成员 spotlight

**不适用:**
- ❌ 人数不是 3
- ❌ 正式介绍（应使用 Article）

**HTML 关键结构:**
```
背景: #fef9ed
标题: mai-title-serif-large ("Kudos")
3列: 等宽分布, 各带 1:1 照片
```

---

### 📅 H. 时间轴与视频类 (Timeline & Video)

#### H1. Timeline Slide (时间轴页)
**模板编号:** #19  
**功能:** 展示路线图、里程碑、发展历程  
**信息密度:** MEDIUM-HIGH (3-5个节点)  
**视觉:** 水平时间轴，节点交替上下分布  
**呼吸类型:** 实质  

**适用内容:**
- 产品路线图 / 发布计划
- 项目里程碑
- 历史发展进程
- 阶段性流程

**不适用:**
- ❌ 超过 5 个节点（信息过载）
- ❌ 无时间/顺序关系的内容

**HTML 关键结构:**
```
背景: #fef9ed
标题: mai-title-serif, left 3.23%, top 9.26%
时间轴线: 水平线 top 50%
节点: 交替上下分布，金色圆点 1.25cqw (#e5b85c)
日期: 1.25cqw, font-weight 700
描述: 0.73cqw, #343434
```

---

#### H2. Content with Video (文字+视频页)
**模板编号:** #20  
**功能:** 展示 Demo 视频、产品演示、教程  
**信息密度:** LOW (标题 + 视频)  
**视觉:** 大尺寸视频占主体  
**呼吸类型:** 可呼吸/可实质  

**适用内容:**
- Demo 视频 / 产品演示
- 屏幕录制
- 原型展示
- 教程内容

**不适用:**
- ❌ 需要详细文字说明的内容（应使用 Article+Image）
- ❌ 静态图片（应使用 Content+Image #6）

**HTML 关键结构:**
```
背景: #fef9ed
标题: mai-title-serif, left 3.33%, top 4%
视频: left 8.33%, top 12%, width 83.33%, height 83.33%
圆角: 0.26cqw (5px)
```

**变体:**
- **20A (自动播放):** `autoplay muted loop playsinline` — 用于背景/展示
- **20B (手动播放):** `controls poster` — 用于需要用户控制的场景

---

### 🔚 I. 收尾类 (Closing)

#### H1. Thank You Slide (致谢页)
**模板编号:** 变体 (类似 Cover)  
**功能:** 演示结束  
**信息密度:** LOW  
**视觉:** 全屏背景 + Thank You + 简短语  
**呼吸类型:** 呼吸  

**适用内容:**
- 演示结束
- 感谢观众
- 结束语/call to action

**HTML 关键结构:**
```
背景: background_*.png
标题: mai-header-large ("Thank You")
结语: mai-title-serif
动效: hero-ambient (同 Cover)
```

---

## 内容匹配决策树

```
收到内容后，按以下顺序判断：

1. 这是开场/转场吗？
   ├── 是演示开始 → Cover (#1)
   ├── 是章节开始 → Section Title (#4)
   ├── 是话题过渡 → Divider (#5)
   └── 是演示结束 → Thank You

2. 这是核心洞察(L1)吗？
   ├── 是数字型洞察 → Big Number
   ├── 是观点型洞察 → Statement (#12)
   ├── 是 3-4 个关键词 → Vertical Text (#18) 或 Analysis (#15)
   └── 不确定 → 继续判断

3. 这是引用他人的话吗？
   ├── 是用户/专家原话 → Quote (#17)
   └── 不是 → 继续判断

4. 这是数据展示吗？
   ├── 是单一数字 → Big Number
   ├── 是 2-4 个对比指标 → Data Cards
   ├── 是结构化分析 → Analysis (#15)
   ├── 是时间线/里程碑 → Timeline (#19)
   └── 不是 → 继续判断

5. 这是视频/演示内容吗？
   ├── 是 Demo 视频/原型演示 → Content+Video (#20)
   └── 不是 → 继续判断

6. 这是纯文字论述吗？
   ├── 是深度阅读内容 → Two Column Text (#13)
   ├── 需要装饰性配图 → Text+Images (#14)
   ├── 图片是内容核心 → Article+Image (#16)
   └── 不是 → 继续判断

6. 这是图片展示吗？
   ├── 1张大图 + 简短标题 → Content+Image (#6)
   ├── 4张图 + 描述 → Four Image Grid (#8)
   ├── 8张图 → Image Gallery (#11)
   ├── 创意/艺术性 → Image Collage (#10)
   └── 不是 → 继续判断

7. 这是人物相关吗？
   ├── 团队介绍 → Team Showcase (#7)
   ├── 3人表彰 → Kudos (#9)
   └── 个人介绍 → Article+Image (#16)

8. 都不是？
   → 重新分析内容目的
   → 考虑拆分成多个slide
```

---

## 常见错误匹配

| 错误 | 正确做法 |
|------|---------|
| 研究发现的详细讨论 → Quote | Quote 是引用他人的话。应使用 Article+Image 或 Two Column |
| 用户数据 → Statement | Statement 是观点性陈述。数据应使用 Big Number 或 Data Cards |
| 方法论 → Statement | 方法论是背景信息(L3)，不该用高强调模板。应使用 Two Column Text |
| 5个并列要点 → Vertical Text | Vertical Text 最多 4 项。应使用 Analysis 或拆分成多页 |
| CEO的话 → Statement | CEO的话是引用，应使用 Quote。Statement 用于你自己的结论 |
| 单一产品图 → Four Image Grid | Four Image Grid 需要 4 张图。单图应使用 Content+Image |
| 8个数据点 → Data Cards | Data Cards 最多 4 个。应使用 Analysis 或拆分成多页 |

---

## 颜色规范与 Accessibility

### 核心原则

1. **Section 内颜色统一** — 同一章节内的 slides 应保持视觉连贯性
2. **符合 Design Language** — 只使用定义好的调色板
3. **Accessibility 优先** — 确保文字可读性，符合 WCAG 标准
4. **禁止互补色冲突** — 不要使用对比强烈的互补色组合

### MAI 调色板

| Token | 色值 | 用途 |
|-------|------|------|
| `--mai-primary-dark-3` | #3b230e | 深色背景上的主文字 |
| `--mai-primary-dark-2` | #5f4e41 | 次要文字、说明文字 |
| `--mai-primary-dark-1` | #72675b | 弱化文字、辅助信息 |
| `--mai-primary-light-1` | #fef9ed | 浅色背景 |
| `--mai-yellow-1` | #ffeecc | 中性暖色背景、Divider 背景 |
| `--mai-yellow-3` | #e5b85c | 强调色、进度条、高亮 |

### 背景与文字配对规则

| 背景类型 | 文字颜色 | 示例 |
|---------|---------|------|
| 深色背景图 (Statement, Section, Cover) | `--mai-yellow-1` (#ffeecc) | 白金色文字在暗图上 |
| 浅色背景 (#fef9ed, #ffeecc) | `--mai-primary-dark-3` (#3b230e) | 深棕色文字在浅底上 |
| 强调色 (#e5b85c) | 仅用于小面积高亮 | 进度条、标签、数字 |

### 禁止的颜色组合

**绝对禁止互补色直接组合：**

| 禁止组合 | 原因 |
|---------|------|
| ❌ 红底 + 绿字 | 互补色，视觉冲突，红绿色盲不友好 |
| ❌ 蓝底 + 橙字 | 互补色，刺眼 |
| ❌ 紫底 + 黄字 | 互补色，难以阅读 |
| ❌ 任意高饱和互补色相邻 | 视觉疲劳 |

**禁止相邻 slides 的颜色跳跃：**

| 禁止序列 | 原因 |
|---------|------|
| ❌ 深色页 → 高饱和亮色页 → 深色页 | 视觉闪烁 |
| ❌ 红色系页 → 绿色系页 | 圣诞节效果，不专业 |
| ❌ 完全不同色调的连续 3 页 | 缺乏视觉连贯性 |

### Section 内颜色一致性

**每个 Section 应保持统一的视觉基调：**

```
Section A: 研究背景
├── Section Title (深色背景图)
├── Two Column (浅色 #fef9ed)      ← 同一浅色系
├── Analysis (浅色 #ffeecc)        ← 同一浅色系
└── Statement (深色背景图)          ← 过渡到下一节

Section B: 核心发现
├── Section Title (深色背景图)
├── Big Number (浅色)
├── Data Cards (浅色)
└── Quote (深色背景图)
```

**规则：**
- Section 内的"实质页"尽量用同一浅色背景 (#fef9ed 或 #ffeecc)
- Section 的"呼吸页"(Section Title, Statement, Quote) 可以用深色背景图
- 深/浅交替应有规律，不要随机切换

### 对比度检查

确保文字与背景的对比度符合 WCAG AA 标准 (≥4.5:1)：

| 组合 | 对比度 | 状态 |
|------|--------|------|
| #3b230e on #fef9ed | ~12:1 | ✅ 优秀 |
| #3b230e on #ffeecc | ~10:1 | ✅ 优秀 |
| #ffeecc on 深色背景图 | ~8:1+ | ✅ 良好 (需 text-shadow) |
| #5f4e41 on #fef9ed | ~7:1 | ✅ 良好 |
| #e5b85c on #fef9ed | ~2.5:1 | ⚠️ 仅用于大字/装饰 |

**深色背景上的文字增强：**
```css
.text-readable {
  filter: drop-shadow(0 1px 2px rgba(59, 35, 14, 0.15))
          drop-shadow(0 2px 8px rgba(59, 35, 14, 0.1));
}
```

### 颜色检查清单

生成 PPT 后，验证：

1. [ ] 所有颜色都来自 MAI 调色板？
2. [ ] 没有互补色直接组合（如红+绿、蓝+橙）？
3. [ ] 相邻 slides 没有剧烈的色调跳跃？
4. [ ] 每个 Section 内的实质页背景一致？
5. [ ] 深色背景上的文字添加了 `.text-readable`？
6. [ ] 小字体(≤1.25cqw)没有使用低对比度颜色？

---

## 呼吸节奏检查表

生成 PPT 后，检查以下规则：

1. [ ] 每 2-3 个实质页后有一个呼吸页？
2. [ ] L1 洞察都用了高强调模板 (Statement/Big Number/Vertical Text)？
3. [ ] 没有连续 3 个以上相同类型的模板？
4. [ ] Quote 只用于引用他人，不用于自己的观点？
5. [ ] 数据都有适当的可视化（进度条/卡片），不是纯文字？
6. [ ] 背景图片类模板占比 ≥ 40%？
