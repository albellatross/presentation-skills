# MAI Template 图片导出指南

## 文件信息
- **Figma 文件**: https://www.figma.com/slides/VhGLPdQrI8yGPSgo0emmyz
- **本地存储路径**: `/Users/aa123/Documents/presentation skills/MAI Design Skill/asset`

---

## 方法 1: Figma Desktop 手动导出（推荐）

### 步骤：

1. **打开文件**
   - 在 Figma Desktop 中打开: https://www.figma.com/slides/VhGLPdQrI8yGPSgo0emmyz
   - 或在浏览器中打开，点击 "Open in Desktop App"

2. **选择要导出的元素**
   - 点击左侧页面列表
   - 选择想要导出的 Frame、Component 或 Image
   - 可以按住 Cmd (Mac) / Ctrl (Windows) 多选

3. **导出设置**
   - 在右侧面板找到 "Export" 部分
   - 点击 "+" 添加导出设置
   - 选择格式: PNG
   - 选择缩放: 2x (高清) 或 1x
   - 点击 "Export [元素名称]"

4. **保存位置**
   - 选择保存到: `/Users/aa123/Documents/presentation skills/MAI Design Skill/asset`
   - 点击保存

---

## 方法 2: 使用 Figma REST API

### 前提条件：
需要 Figma Access Token

### 获取 Token：
1. 访问: https://www.figma.com/developers/api#access-tokens
2. 点击 "Get personal access token"
3. 复制 token

### 使用 Token 导出：

```bash
# 设置环境变量
export FIGMA_ACCESS_TOKEN='your_token_here'

# 运行导出脚本
python3 << 'EOF'
import urllib.request
import json
import os

FILE_KEY = "VhGLPdQrI8yGPSgo0emmyz"
TOKEN = os.environ.get('FIGMA_ACCESS_TOKEN')
OUTPUT_DIR = "/Users/aa123/Documents/presentation skills/MAI Design Skill/asset"

# 获取文件结构
headers = {'X-Figma-Token': TOKEN}
req = urllib.request.Request(f'https://api.figma.com/v1/files/{FILE_KEY}', headers=headers)

with urllib.request.urlopen(req) as response:
    data = json.loads(response.read())
    print(f"File: {data['name']}")
    print(f"Pages: {len(data['document']['children'])}")

    # 收集所有 node IDs
    node_ids = []
    for page in data['document']['children']:
        print(f"  - {page['name']}")
        if 'children' in page:
            for child in page['children']:
                if child.get('type') in ['FRAME', 'COMPONENT']:
                    node_ids.append(child['id'])

    print(f"\nFound {len(node_ids)} exportable nodes")

    # 导出图片
    ids_param = ','.join(node_ids[:10])  # 限制前10个
    export_url = f'https://api.figma.com/v1/images/{FILE_KEY}?ids={ids_param}&format=png&scale=2'

    req = urllib.request.Request(export_url, headers=headers)
    with urllib.request.urlopen(req) as response:
        export_data = json.loads(response.read())
        images = export_data.get('images', {})

        os.makedirs(OUTPUT_DIR, exist_ok=True)

        for i, (node_id, url) in enumerate(images.items()):
            if url:
                filename = f"{OUTPUT_DIR}/image_{i+1:02d}.png"
                urllib.request.urlretrieve(url, filename)
                print(f"Downloaded: {filename}")

EOF
```

---

## 方法 3: 批量导出（使用 Figma Plugin）

### 推荐插件：
1. **Image Exporter** - 批量导出所有图片
2. **Figma to Code** - 导出设计资源

### 使用步骤：
1. 在 Figma 中打开文件
2. 右键 → Plugins → Browse plugins
3. 搜索 "Image Exporter"
4. 安装并运行
5. 选择导出格式和路径

---

## 需要导出的关键资源

根据 MAI Design System 分析，建议导出：

### 1. Cover 页面元素
- Logo (Copilot icon)
- Badge 组件
- 背景图案

### 2. 插图资源
- 装饰性图标（如 Think Deeper icon）
- 背景渐变
- 视觉元素

### 3. 组件库
- UI Kit 组件示例
- Card 组件样式
- Label 组件样式

### 4. 图标库
- 从 Iconography 文件导出常用图标
- 建议导出 SVG 格式（矢量）

---

## 文件命名建议

```
asset/
├── backgrounds/
│   ├── bg-warm-beige.png
│   └── bg-gradient-subtle.png
├── icons/
│   ├── icon-smart-48.png
│   ├── icon-think-deeper-180.png
│   └── icon-copilot-100.png
├── components/
│   ├── badge-yellow.png
│   ├── label-green.png
│   └── card-white-shadow.png
└── illustrations/
    ├── apple-silhouette.png
    └── decorative-shapes.png
```

---

## 当前状态

✅ 文件夹已创建: `/Users/aa123/Documents/presentation skills/MAI Design Skill/asset`

⚠️ 需要手动操作:
- Figma Access Token 未设置或无效
- 建议使用 Figma Desktop App 手动导出

---

## 快速导出命令（如果有 Token）

```bash
# 1. 设置 token
export FIGMA_ACCESS_TOKEN='paste_your_token_here'

# 2. 验证 token
curl -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" \
  https://api.figma.com/v1/me

# 3. 获取文件信息
curl -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" \
  https://api.figma.com/v1/files/VhGLPdQrI8yGPSgo0emmyz | \
  python3 -m json.tool > /tmp/figma_file_structure.json

# 4. 查看文件结构
cat /tmp/figma_file_structure.json | grep -A 2 '"name"'
```

---

## 需要帮助？

如果您有 Figma Access Token，请运行：
```bash
export FIGMA_ACCESS_TOKEN='your_token'
```

然后告诉我，我可以帮您自动导出所有图片！
