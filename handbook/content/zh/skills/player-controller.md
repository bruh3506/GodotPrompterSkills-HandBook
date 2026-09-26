# 玩家控制器：平台跳跃、俯视角与 3D 移动

一句话：用 CharacterBody 实现稳定、可调、符合物理节奏的玩家移动。

## 通俗解释

控制器每个物理帧收集输入、更新速度，再请 Godot 检查碰撞并移动角色；它不是直接把角色瞬移到新坐标。

## 场景例子

平台跳跃角色按下跳跃后向上起跳；离开平台后仍有短暂的 coyote time，提前按跳跃会进入缓冲，落地瞬间自动起跳。

## 专业要点

用 `CharacterBody2D/3D` 和 `_physics_process()` 更新运动，正确处理重力、地面状态、斜坡和滑动。将输入采集、运动算法与动画状态拆开；跳跃缓冲和 coyote time 都依赖明确的计时规则。

## 什么时候用

实现由玩家直接控制的 2D/3D 移动时使用。输入映射和设备兼容看 `input-handling`；碰撞形状与物理查询看 `physics-system`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| coyote time | 土狼时间；离开平台后仍可跳跃的短暂窗口 | Coyote time makes edge jumps forgiving.（土狼时间让边缘起跳更宽容。） |
| jump buffering | 跳跃缓冲；提前按下并等待起跳机会 | Jump buffering remembers the button press.（跳跃缓冲会记住提前按下的指令。） |
