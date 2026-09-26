# XR 开发：VR/AR 设置、追踪与交互

一句话：用 OpenXR 和 Godot XR 节点连接头显与控制器，并设计舒适可靠的沉浸式交互。

## 通俗解释

XR 场景像玩家真正戴上头显进入的房间：`XROrigin3D` 代表玩家所在位置，头部和手柄姿态持续更新，游戏物体要跟着这些追踪数据响应。

## 场景例子

玩家用手柄抓起桌上的物体，物体跟随手的姿态；UI 面板放在手臂可触及的位置；移动时提供瞬移方式，减少长时间平滑移动带来的晕动。

## 专业要点

配置 OpenXR 插件、启动会话、XR Origin、头显相机与追踪控制器。按目标头显验证控制器输入、手部追踪、 passthrough、空间 UI 和部署；保持帧率稳定，并尊重舒适性、边界空间和设备权限。

## 什么时候用

项目明确支持 VR/AR/XR 设备、手势或透视混合现实时使用。一般 3D 渲染看 `3d-essentials`；抓取碰撞规则可结合 `physics-system`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| tracking pose | 追踪姿态；设备的位置和朝向 | The controller tracking pose updates every frame.（控制器追踪姿态逐帧更新。） |
| passthrough | 透视画面；在头显中看到真实环境 | Passthrough blends the real room with the game.（透视画面把真实房间与游戏画面结合。） |
