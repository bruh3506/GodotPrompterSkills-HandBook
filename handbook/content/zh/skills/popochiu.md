# Popochiu：点选式冒险游戏框架

一句话：学习 Popochiu 插件的房间、角色、热点、物品和对话工作流。

## 通俗解释

Popochiu 像一套冒险游戏制作片场：房间放在舞台上，热点代表可点击的物件，角色执行走路和对话，GUI 管理指令与物品。

## 场景例子

玩家点击桌上的钥匙热点，角色自动走到桌边并播放拾取动作；物品进入库存后，点击它再点击门，触发开门对话或动画。

## 专业要点

这是带明确版本和 GDScript 工作流的第三方插件。先理解房间和角色生命周期、热点交互与命令 GUI，再扩展库存、对话和存档；按插件安装要求管理资源，不要把通用 Godot 节点语义与插件 API 混淆。

## 什么时候用

制作房间切换、热点点击、角色走位和库存谜题的 point-and-click 游戏时使用。只需要普通对话、库存或存档时分别看 `dialogue-system`、`inventory-system`、`save-load`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| hotspot | 热点；可被点击或交互的场景区域 | Click the hotspot to inspect the painting.（点击热点查看画作。） |
| point-and-click | 点选式；用鼠标选择场景目标 | Point-and-click games often use room hotspots.（点选式游戏通常使用房间热点。） |
