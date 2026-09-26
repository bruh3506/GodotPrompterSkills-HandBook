# Dialogue Manager：用对话文件驱动分支剧情

一句话：学习 Dialogue Manager 插件的 `.dialogue` 格式、条件、变量与运行时对话框。

## 通俗解释

对话文件像一份可读的剧本：写明谁说什么、玩家有哪些回答，以及某个条件成立时剧情走向哪里。

## 场景例子

村民先问玩家有没有拿到钥匙：有钥匙就开启后续台词并更新任务状态，没有就给出寻找提示。设计者直接编辑对话文本，不需要在 UI 脚本里维护一串分支编号。

## 专业要点

这是第三方插件工作流，须按对应版本安装并验证 API。清楚区分对话变量、游戏状态与 UI 表现；自定义 Balloon 用于呈现选项，文本本地化可与 `localization` 配合。

## 什么时候用

项目已经选用 Dialogue Manager，或希望以 `.dialogue` 文件维护有分支的对白时使用。想从 Godot 原生结构自己构建对话，可看 `dialogue-system`；完整冒险游戏流程另看 Popochiu。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| response | 回应；对话中的可选回答 | Choose a response to continue the conversation.（选择一个回答继续对话。） |
| condition | 条件；决定分支能否出现或执行 | Show this line only if the player has the key.（只有玩家持有钥匙时才显示这句。） |
