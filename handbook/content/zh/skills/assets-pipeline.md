# 资产导入：图片、模型、音频与设置

一句话：理解 Godot 怎样把源素材导入成游戏可用资源，并为质量、体积和加载速度做取舍。

## 通俗解释

把导入想成厨房备料：PNG、模型和音频是原材料，导入器会按设置压缩、转换并生成 Godot 使用的版本；以后改设置时，Godot 会重新处理原材料。

## 场景例子

同一张大地图贴图，桌面版可以保留较高质量，移动版则选择更省显存的压缩格式。3D 模型导入时检查缩放、材质和动画，避免进游戏后模型巨大、贴图模糊或资源重复。

## 专业要点

源文件和导入缓存不是同一份内容；项目依赖 `.import` 元数据和导入设置复现结果。按使用场景设置压缩、过滤、Mipmaps、模型重导入参数，并区分编辑器导入与运行时 `ResourceLoader` 加载。

## 什么时候用

项目要导入图片、音频、3D 场景或运行时加载资源时使用。运行时路径与延迟加载看 `assets-pipeline` 相关参考或 `multithreading`；平台打包看 `export-pipeline`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| import preset | 导入预设；一组导入转换设置 | Use a smaller import preset on mobile.（移动版使用体积更小的导入预设。） |
| reimport | 重新导入；按新设置重新处理素材 | Godot reimports the texture after the setting changes.（设置变化后，Godot 会重新导入贴图。） |
