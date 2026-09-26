# 输入处理：键盘、手柄、鼠标与触屏

一句话：把玩家的意图映射为游戏动作，并正确处理不同设备和 UI 输入。

## 通俗解释

输入动作像“跳跃”这样的命令，而键盘空格、手柄 A 键只是不同的按钮入口；游戏逻辑不应该到处判断某个物理按键。

## 场景例子

玩家可按空格或手柄 A 跳跃；设置菜单允许重新绑定按键；点击 UI 的鼠标事件不会再穿透到场景里让角色误开火。

## 专业要点

用 Input Map 定义动作，明确 `_input()`、`_unhandled_input()` 与 `Input` 状态查询的职责。区分事件边沿与持续按下；UI 要消费已处理事件。处理手柄死区、输入缓存、触屏区域和重绑定持久化。

## 什么时候用

实现角色控制、游戏手柄、鼠标、触屏或按键重绑定时使用。角色物理移动模式看 `player-controller`，界面焦点和控制器导航看 `godot-ui`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| input action | 输入动作；玩家想执行的操作 | Map the A button to the jump action.（把 A 键映射到跳跃动作。） |
| dead zone | 死区；忽略摇杆的小幅漂移范围 | Increase the dead zone if the stick drifts.（摇杆漂移时增大死区。） |
