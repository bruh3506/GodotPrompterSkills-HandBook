# Tween：让属性和数值平滑变化

一句话：用 Tween 对属性、方法返回值和时间序列做代码驱动的过渡。

## 通俗解释

Tween 像滑动推子：告诉它从现在的值到目标值要花多久、怎样加速减速，它会自动填上中间变化。

## 场景例子

按钮悬停时轻轻放大，确认购买后弹出提示，再等待半秒淡出；三个动作按先后顺序串起来，不用每帧自己算 alpha 和尺寸。

## 专业要点

用 `create_tween()` 创建短期动画，可串行或并行加入 Tweener，并明确目标对象释放和 Tween 生命周期。Tween 适合一次性运行时过渡；复杂关键帧编辑和长循环更适合 AnimationPlayer。

## 什么时候用

UI 动效、受击闪烁、镜头缓动和短暂属性变化时使用。动画要由美术编辑大量关键帧时选 `animation-system`；不要把 Tween 当成持久状态机。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| easing | 缓动；控制变化速度曲线 | Use easing to make the panel settle softly.（用缓动让面板柔和地停下来。） |
| chain tweens | 串联 Tween；一个动画结束后再做下一个 | Chain the fade after the slide.（滑动结束后再串接淡出。） |
