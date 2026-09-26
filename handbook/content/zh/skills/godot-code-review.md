# Godot 代码评审：检查结构、正确性和风险

一句话：用一套稳定检查点发现代码里的架构问题、错误模式和 Godot 特有陷阱。

## 通俗解释

代码评审不是只看“能不能运行”，而是像检查桥梁一样看结构是否牢靠、边界是否清楚、以后改动会不会牵一发而动全身。

## 场景例子

玩家脚本连续 `get_parent().get_parent()` 找 HUD。评审指出这是场景树耦合，建议由 HealthComponent 发信号，让 HUD 订阅生命值变化。

## 专业要点

检查节点/场景责任、信号与依赖边界、GDScript/C# 类型习惯、物理更新时机、资源生命周期、性能热点和 Godot API 版本。反馈聚焦能复现或能解释的具体问题，并给出严重程度和文件位置。

## 什么时候用

功能完成、准备合并或发现潜在反模式时使用。代码评审不代替测试；若程序已经报错，先用 `godot-debugging` 定位并复现问题。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| code review | 代码评审 | The code review found a scene-tree dependency.（代码评审发现了场景树依赖。） |
| anti-pattern | 反模式；常见但容易造成问题的做法 | Deep parent lookups are an anti-pattern.（多层向上查父节点是一种反模式。） |
