#!/usr/bin/env python3
"""
Figma Slides 批量截图导出工具
使用 Figma REST API 的 /images 端点直接截图导出
"""

import urllib.request
import json
import os
import time

FIGMA_TOKEN = os.environ.get('FIGMA_ACCESS_TOKEN', '')
if not FIGMA_TOKEN:
    print("❌ 请设置环境变量 FIGMA_ACCESS_TOKEN")
    print("   export FIGMA_ACCESS_TOKEN='your-token-here'")
    exit(1)
FILE_KEY = 'VhGLPdQrI8yGPSgo0emmyz'
OUTPUT_DIR = '/Users/aa123/Documents/presentation skills/MAI Design Skill/asset/Images'

os.makedirs(OUTPUT_DIR, exist_ok=True)

print("=" * 70)
print("FIGMA SLIDES 批量导出工具")
print("=" * 70)
print(f"文件: https://www.figma.com/slides/{FILE_KEY}")
print(f"输出: {OUTPUT_DIR}")
print()

# 策略：直接使用页面的根节点ID来截图
# Figma Slides 的页面通常从 0:1 开始
# 我们尝试导出常见的节点ID范围

# 尝试导出策略：猜测常见的Slides节点ID
common_node_patterns = [
    '0:1',   # 通常是文档根节点
    '1:2', '1:3', '1:4', '1:5', '1:6', '1:7', '1:8', '1:9', '1:10',
    '2:1', '2:2', '2:3', '2:4', '2:5', '2:6', '2:7', '2:8', '2:9', '2:10',
    '3:1', '3:2', '3:3', '3:4', '3:5', '3:6', '3:7', '3:8', '3:9', '3:10',
    '4:1', '4:2', '4:3', '4:4', '4:5',
    '5:1', '5:2', '5:3', '5:4', '5:5',
]

print(f"📊 尝试导出节点ID范围：{len(common_node_patterns)} 个节点")
print()

# 批量请求图片导出URL
ids_param = ','.join(common_node_patterns)
export_url = f'https://api.figma.com/v1/images/{FILE_KEY}?ids={ids_param}&format=png&scale=2'

headers = {'X-Figma-Token': FIGMA_TOKEN}
req = urllib.request.Request(export_url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        export_data = json.loads(response.read())
        
        images = export_data.get('images', {})
        errors = export_data.get('err', {})
        
        print(f"✅ 成功获取 {len(images)} 个图片URL")
        if errors:
            print(f"⚠️  部分节点不存在: {len(errors)} 个")
        print()
        
        # 下载所有图片
        downloaded = 0
        for i, (node_id, url) in enumerate(images.items(), 1):
            if url:
                # 使用节点ID作为文件名
                safe_id = node_id.replace(':', '-')
                filename = f'{OUTPUT_DIR}/figma_node_{safe_id}.png'
                
                try:
                    urllib.request.urlretrieve(url, filename)
                    file_size = os.path.getsize(filename)
                    print(f"  [{i:02d}] ✓ {node_id} → {os.path.basename(filename)} ({file_size // 1024} KB)")
                    downloaded += 1
                    time.sleep(0.2)  # 避免请求过快
                except Exception as e:
                    print(f"  [{i:02d}] ✗ {node_id} 下载失败: {e}")
        
        print()
        print("=" * 70)
        print(f"✅ 导出完成！")
        print(f"   成功: {downloaded} 个文件")
        print(f"   位置: {OUTPUT_DIR}")
        print("=" * 70)
        print()
        print("💡 下一步：")
        print("   1. 打开文件夹查看所有导出的图片")
        print("   2. 根据内容重命名文件（如 slide_01_cover.png）")
        print("   3. 删除空白或无用的图片")
        print()
        
except urllib.error.HTTPError as e:
    error_data = json.loads(e.read())
    print(f"❌ 导出失败: {error_data}")
    print()
    print("可能的原因：")
    print("  - Figma Slides 文件不支持此API端点")
    print("  - 节点ID不存在或无法访问")
    print()
    print("建议改用手动导出：运行 ./export_slides_images.sh")

