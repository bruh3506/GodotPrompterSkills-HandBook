# 在 Godot 中使用 C#

一句话：掌握 Godot .NET 项目的 C# 约定、引擎 API 差异和与 GDScript 的协作方式。

## 通俗解释

Godot 的 C# 不是把 GDScript 逐字翻译成另一套语法：节点类型、集合、资源引用和信号在 C# 中都有各自的 API 形状。

## 场景例子

你用 C# 编写玩家控制器时，脚本继承 `CharacterBody2D`，公开给 Inspector 的字段用 Godot 导出标记；Godot 要生成部分类，因此类声明需要 `partial`。

## 专业要点

遵循 Godot C# 的节点生命周期、导出属性、信号委托和 `Godot.Collections` 等 API 约定。异步工作要正确等待 Godot 信号；避免在每帧代码中制造大量临时对象或频繁跨语言调用。引擎版本和 .NET SDK 必须匹配。

## 什么时候用

项目选择 C#、已有 .NET 代码或需要 C# 生态库时使用。不要假设 GDScript 示例可机械转换；信号细节继续看 `csharp-signals`，通用脚本思路看 `gdscript-patterns` 作对照。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| partial class | 分部类；允许编译器生成同一类的另一部分 | Godot scripts are declared as partial classes.（Godot 脚本声明为分部类。） |
| exported property | 导出属性；能在 Inspector 中配置的字段 | Export the speed so designers can tune it.（导出速度属性，方便设计者调节。） |
