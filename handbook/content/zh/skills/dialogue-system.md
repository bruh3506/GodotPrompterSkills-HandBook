# 对话系统：数据、分支与呈现

一句话：把对话内容、分支条件和画面呈现分开，方便扩充故事与替换 UI。

## 通俗解释

对话像一张路线图：每段台词有自己的编号，玩家选不同答案后跳到不同下一段。对话数据不必和气泡框画法写在一起。

## 场景例子

玩家问商人“能便宜一点吗？”：背包里有声望道具时商人降价；没有时展示普通价格。UI 只负责显示当前台词和按钮，数据负责说明下一步去哪。

## 专业要点

用 Resource 或其他清晰结构保存台词、说话人、选项与条件；运行时维护当前节点/行的状态。明确变量插值、条件求值和输入锁定，并考虑保存恢复及本地化。UI 与对话图解耦，便于更换呈现方式。

## 什么时候用

需要分支对白、选项或对话条件，但不依赖特定插件时使用。已经采用 Dialogue Manager 就读 `dialogue-manager`；游戏 UI 结构看 `godot-ui`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| branching dialogue | 分支对话 | A choice creates a branching dialogue.（一个选择可以让剧情分出不同路线。） |
| interpolate a variable | 插入变量值 | Interpolate the player's name into the line.（把玩家名字插入这句台词。） |
