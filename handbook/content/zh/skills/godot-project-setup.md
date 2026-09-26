# Godot 项目起步：目录、设置与版本控制

一句话：新项目早期就确定可扩展的目录、Autoload、输入映射和 `.gitignore` 基础。

## 通俗解释

项目结构像房间收纳：脚本、场景、资源和测试有固定位置，队友不用猜文件在哪，也不会把临时缓存一起打包进版本库。

## 场景例子

新建俯视角游戏时，先分好 `scenes/`、`scripts/`、`resources/` 和 `assets/`；设置移动输入与游戏主场景，再把 `.godot/` 这类本机缓存排除出 Git。

## 专业要点

目录按资源类型或功能域组织要保持一致，Autoload 只放应用级服务，Input Map 命名应表达动作而非设备按键。设置与 `.gitignore` 需要团队共享并适配实际 Godot 版本，不要提前制造空壳模块。

## 什么时候用

开始新 Godot 项目、初始化团队仓库或项目规模增长导致文件难找时使用。若要设计具体游戏系统，转到 `godot-brainstorming`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| project scaffold | 项目骨架；初始文件和目录结构 | Create a project scaffold before adding features.（先创建项目骨架再加功能。） |
| version control | 版本控制 | Keep generated cache files out of version control.（不要把生成缓存放进版本控制。） |
