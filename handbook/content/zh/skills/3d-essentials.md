# 3D 基础：材质、灯光、环境与性能

一句话：从 Godot 的 3D 节点和坐标开始，逐步搭好可信、清晰且跑得动的场景。

## 通俗解释

3D 场景像搭电影布景：网格是物体外形，材质决定表面像金属还是木头，灯光决定它怎样被看见，`WorldEnvironment` 则负责天空、雾和整体氛围。

## 场景例子

制作一个小型洞穴：岩石用不同粗糙度的材质，入口的方向光投下阴影，环境雾让远处逐渐变淡；洞穴外的石块较少显示细节，避免镜头看不到的地方也耗费资源。

## 专业要点

区分网格、材质、光源和环境各自的责任。先用 `StandardMaterial3D` 与 Godot 原生灯光建立场景，再依据目标平台选择阴影、全局照明、雾、LOD 和遮挡剔除；这些效果有明显的 GPU 与内存成本。

## 什么时候用

搭建 3D 场景、材质、灯光、环境、雾、LOD 或 Decal 时使用。自定义像素着色逻辑看 `shader-basics`，碰撞和物理响应看 `physics-system`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| roughness | 粗糙度；表面反光有多模糊 | Higher roughness makes the stone look dull.（粗糙度高时，石头看起来不那么亮。） |
| occlusion culling | 遮挡剔除；不画被挡住的物体 | Occlusion culling can skip hidden rooms.（遮挡剔除可以跳过被挡住的房间。） |
