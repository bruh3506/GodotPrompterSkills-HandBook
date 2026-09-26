# Godot UI：Control、容器与 Theme

一句话：用 Control 节点和容器布局构建可缩放、可维护的游戏界面。

## 通俗解释

UI 容器像自动排队的收纳盒：添加按钮时它会帮你排列，而不是每个按钮都写死屏幕坐标。

## 场景例子

背包窗口调整宽度后，物品格仍按 GridContainer 自动排列；标题、按钮和图标通过共享 Theme 保持一致，窗口底部按钮在不同分辨率下仍贴近边缘。

## 专业要点

用 `Control`、Anchor 和 Container 管布局，把 `Theme` 当作跨场景样式资源。先确定布局方向、最小尺寸和输入焦点，再处理响应式比例；不要把 Node2D 的世界坐标思路直接套给 UI。

## 什么时候用

制作菜单、对话框、背包、设置或 HUD 时使用。跨屏幕适配看 `responsive-ui`，游戏内血条、地图和伤害数字看 `hud-system`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| container | 容器；自动排列子控件的节点 | A container arranges the menu buttons.（容器会自动排列菜单按钮。） |
| theme resource | 主题资源；集中配置控件外观 | Apply one theme resource to every menu.（给所有菜单应用同一个主题资源。） |
