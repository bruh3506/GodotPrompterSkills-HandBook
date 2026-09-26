# 动画系统：播放、混合与状态

一句话：为角色和场景选择合适的动画工具，并让动画切换自然、可维护。

## 通俗解释

`AnimationPlayer` 像一台按时间表播放的录影机；`AnimationTree` 更像混音台，可以按速度、方向和状态把多段动作混在一起。

## 场景例子

角色站立时播放 idle，跑动时按脚步速度调节 run 动画；玩家边跑边转向，BlendSpace 混合不同方向的动作。受击动画结束后再回到合适的移动状态。

## 专业要点

用 AnimationPlayer 管理关键帧和事件，用 AnimationTree 管理参数化混合与动画状态机。游戏状态机应负责“角色能否攻击”，动画状态机负责“当前播放哪种动作”；避免二者彼此循环驱动。注意重定向、骨骼修饰器和混合层级。

## 什么时候用

角色、UI、场景物件需要关键帧、动作混合或骨骼动画时使用。简单属性过渡可选 `tween-animation`；游戏逻辑状态的切换看 `state-machine`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| blend | 混合；平滑组合多段动画 | Blend the idle and walk animations.（混合站立和行走动画。） |
| transition | 过渡；从一种动画状态切换到另一种 | The transition starts when speed increases.（速度提高时触发过渡。） |
