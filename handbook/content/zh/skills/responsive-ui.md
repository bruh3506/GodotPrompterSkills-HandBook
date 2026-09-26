# 响应式 UI：适配分辨率、比例与 DPI

一句话：设置 viewport/stretch 和容器策略，让 UI 在不同屏幕尺寸与像素密度下仍然可用。

## 通俗解释

同一张 UI 设计图会出现在宽屏显示器、掌机和手机上。响应式布局像有弹性的书架，会调整间距和区域，而不是把内容硬挤在固定坐标里。

## 场景例子

主菜单在宽屏左右并排显示插画和按钮，在手机竖屏改为上下排列；Pixel Art 保持整数缩放，文字和触控区域在高 DPI 屏幕上仍清楚。

## 专业要点

根据画面目标选择 viewport、canvas_items 等 stretch 模式，并明确 aspect ratio 处理。控件依靠 Anchor 和 Container 布局；像素画需整数缩放，移动 UI 需验证安全区、触摸目标和横竖屏。

## 什么时候用

目标设备分辨率、纵横比或 DPI 不唯一时使用。Control 层级和主题看 `godot-ui`；项目导出平台设置看 `export-pipeline`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| aspect ratio | 纵横比；屏幕宽度与高度的比例 | Keep the UI readable at a different aspect ratio.（在不同纵横比下保持 UI 清晰可读。） |
| integer scaling | 整数倍缩放；按整数倍放大像素画 | Use integer scaling for crisp pixel art.（像素画使用整数倍缩放会更清晰。） |
