# 状态机：把角色行为拆成清晰状态

一句话：根据复杂度选择 enum、节点或 Resource 状态机，并明确状态进入、更新和退出规则。

## 通俗解释

状态机像红绿灯：当前只有一个主要状态，状态决定哪些动作允许发生；事件到来后按规则切换，不必用十几个互相冲突的布尔值。

## 场景例子

玩家处于 Idle、Run、Jump 或 Attack。按下攻击后进入 Attack 状态，期间忽略新的攻击输入；动画结束再回到 Run 或 Idle。

## 专业要点

少量状态用 enum/switch 简洁；状态拥有大量独立逻辑时用节点式 FSM；可配置行为可用 Resource 状态。明确转场条件、退出清理与同帧切换限制。动画状态机和 gameplay FSM 各自负责不同问题。

## 什么时候用

行为模式互斥、布尔条件互相打架或状态逻辑难以维护时使用。动画混合图看 `animation-system`；AI 移动可以结合 `ai-navigation`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| transition condition | 转换条件；允许状态切换的规则 | Check the transition condition before attacking.（攻击前检查状态转换条件。） |
| enter / exit state | 进入 / 退出状态 | Reset the timer when entering the state.（进入状态时重置计时器。） |
