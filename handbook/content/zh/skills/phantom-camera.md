# Phantom Camera：用插件管理镜头切换

一句话：学习 Phantom Camera 插件的 Host、相机优先级、跟随模式和过渡动画。

## 通俗解释

场景里可以准备多个“摄影机方案”：一个跟随玩家，一个看 Boss，一个展示过场；插件根据优先级决定当前哪个镜头接管画面。

## 场景例子

玩家走进 Boss 房间后，Boss 镜头优先级提高，画面平滑拉远并锁定 Boss；击败后优先级降低，镜头交回普通跟随相机。

## 专业要点

这是第三方插件，页面对应的技能文档会标明适用版本。按插件的 host/camera 模型配置节点，再用 priority 和 tween 控制切换；避免再叠加一套手写相机控制器抢写同一 Camera 属性。

## 什么时候用

项目已经采用 Phantom Camera，并需要多视角优先级或平滑转场时使用。无需插件的简单跟随、区域和分屏方案看 `camera-system`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| priority | 优先级；决定哪个镜头当前生效 | Give the boss camera a higher priority.（提高 Boss 镜头的优先级。） |
| hand over control | 交出控制权 | The host hands over control to the new camera.（Host 把控制权交给新镜头。） |
