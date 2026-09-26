# Beehave：用行为树组织 NPC 决策

一句话：学习 Beehave 插件的行为树节点、黑板和调试器，把敌人的决策拆成可组合的小任务。

## 通俗解释

行为树像一张工作流程图：先检查“看见玩家了吗？”，看见就追击或攻击；否则巡逻。每个节点只做一类判断或动作，组合起来形成 NPC 的行为。

## 场景例子

守卫行为树依次检查：玩家是否在视野？若在，距离够近就攻击，否则追赶；若不在，就沿巡逻点移动。黑板保存当前目标和巡逻点，运行时调试器显示卡在哪个节点。

## 专业要点

Beehave 是第三方、纯 GDScript 插件。理解 Sequence、Selector、Decorator 与 Leaf 的成功/失败/运行状态，再把可复用行为放到黑板变量。不要把整个游戏状态机硬套成行为树；持续移动和长期状态可能更适合状态机。

## 什么时候用

项目已安装 Beehave，且 NPC 行为需要组合、观察和调试时使用。还没选 AI 方案时先看 `godot-brainstorming` 与 `ai-navigation`；LimboAI 是另一种含 C++ 扩展的方案。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| selector | 选择节点；尝试子任务直到一个成功 | The selector attacks or chases the player.（选择节点会攻击或追赶玩家。） |
| blackboard | 黑板；行为节点共享的数据区 | Store the current target on the blackboard.（把当前目标存进黑板。） |
