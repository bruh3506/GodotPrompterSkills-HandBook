# HUD：生命值、分数、小地图与提示

一句话：组织运行时游戏信息，让玩家看得到关键状态，又不干扰游戏画面。

## 通俗解释

HUD 像驾驶舱仪表盘：把生命值、弹药、地图和通知放在玩家容易看到的位置，同时不要挡住路况。

## 场景例子

玩家受到伤害时，HealthComponent 发出变化信号，屏幕角落的 ProgressBar 更新；拿到金币时分数数字跳动，小地图保持在固定位置，不随世界镜头移动。

## 专业要点

常用 CanvasLayer 将 HUD 与世界摄像机分离；控件订阅领域状态变化，不要每帧轮询所有值。生命条用 ProgressBar 或 TextureProgressBar；伤害数字与通知要管理数量和生命周期。

## 什么时候用

制作常驻游戏内信息、地图、伤害数字和通知时使用。Control 布局、主题与焦点导航看 `godot-ui`，分辨率伸缩看 `responsive-ui`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| heads-up display (HUD) | 抬头显示；不离开游戏就能看到的信息层 | The HUD shows the player's health.（HUD 显示玩家生命值。） |
| damage number | 伤害数字 | A damage number appears above the enemy.（敌人上方出现伤害数字。） |
