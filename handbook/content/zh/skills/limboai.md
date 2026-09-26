# LimboAI：行为树与分层状态机插件

一句话：用 LimboAI 的可视化行为树与 HSM 构建大型 NPC 决策，并扩展自定义任务。

## 通俗解释

LimboAI 像一套可视化的 NPC 流程工具：行为树选择接下来做什么，分层状态机管理持续的模式，Blackboard 在节点之间保存目标和数据。

## 场景例子

Boss 在“巡逻”状态发现玩家后进入“战斗”状态；行为树选择追击或施放技能，自定义 task 检查距离和技能冷却。

## 专业要点

这是带 C++ GDExtension 的第三方插件，需核实 Godot 和 addon 版本及导出平台。区分行为树短期决策与 HSM 长期状态；自定义 BTTask 应遵守插件任务生命周期，黑板键名需保持一致。

## 什么时候用

已决定安装 LimboAI，且需要复杂 NPC 决策、可视化编辑或 HSM 时使用。轻量 GDScript 行为树可看 Beehave；不需要插件时从 `ai-navigation` 和 `state-machine` 开始。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| hierarchical state machine | 分层状态机；状态可包含子状态 | Combat is a parent state with several child states.（战斗是包含多个子状态的父状态。） |
| custom task | 自定义任务节点 | Add a custom task to check the attack range.（添加自定义任务来检查攻击距离。） |
