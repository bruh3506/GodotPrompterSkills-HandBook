# 使用 GodotPrompter：选择合适的技能

一句话：根据任务找到对应的 Godot 技能，并按设计、实现和评审流程组合使用。

## 通俗解释

GodotPrompter 像一本按需打开的专业工具书：提出移动问题就选角色控制技能，需要保存进度就选存档技能，避免让 AI 只凭通用经验猜做法。

## 场景例子

你说“做一个带跳跃缓冲的横版角色”，先用 `player-controller` 和 `input-handling`；若状态转换还没想好，先用 `godot-grill`/`godot-brainstorming`，写完再用 `godot-code-review`。

## 专业要点

不同平台通过各自的 skill discovery 和 agent-instruction 文件加载技能；会话启动卡负责路由，领域技能负责具体模式。选择工具前确认当前宿主支持的安装方式，多个流程插件可与 Godot 领域知识互补。

## 什么时候用

第一次安装、选择技能、排查宿主如何发现技能，或需要组合流程时使用。进入具体 Godot 领域后，还应加载对应技能而不是只依赖总目录。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| load a skill | 加载技能 | Load the matching skill before implementation.（实现前加载对应技能。） |
| on demand | 按需；需要时才加载 | The agent loads domain knowledge on demand.（代理按需加载领域知识。） |
