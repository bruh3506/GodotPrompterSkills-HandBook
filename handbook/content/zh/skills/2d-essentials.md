# 2D 基础：画面层次、地图、灯光与粒子

一句话：学习搭建 2D 世界的常用工具，让地图、背景、光影和特效各就各位。

## 通俗解释

把 2D 游戏想成舞台：`TileMapLayer` 负责铺地板和墙，Parallax（视差）让远处背景移动得慢一些，`CanvasLayer` 则像固定在观众眼前的字幕层，不会跟着角色跑远。

## 场景例子

做一款横向闯关游戏时，远山缓慢后退、地面和金币随镜头滚动、血量条留在屏幕角落；关卡再用 2D 灯光突出火把，并用粒子表现火星。这些效果各有自己的节点与绘制层级。

## 专业要点

先想清楚坐标空间和绘制顺序，再安排 `CanvasLayer`、世界节点与 UI。地图优先使用 Godot 4 的 `TileMapLayer`；灯光和阴影需要配合 CanvasItem 可见性及遮挡设置。特效很多时还要留意粒子数量、画面覆盖面积与移动平台成本。

## 什么时候用

做 2D 场景、TileMap、视差背景、2D 灯光或粒子效果时使用。若重点是 UI 布局，看 `godot-ui`；若是角色移动，看 `player-controller`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| draw order | 绘制顺序；谁盖在谁上面 | The UI should render above the world.（UI 应显示在游戏世界上方。） |
| parallax scrolling | 视差滚动；远近景移动速度不同 | Distant mountains move more slowly.（远处山脉移动得更慢。） |
