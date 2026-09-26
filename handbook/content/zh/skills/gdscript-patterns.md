# GDScript 常用模式：类型、信号、匹配与导出

一句话：用清晰的类型和常见语言习惯编写更容易检查、维护的 GDScript。

## 通俗解释

类型标注像给盒子贴标签：看代码的人能更快知道变量装的是什么，编辑器也能更早发现拼错名称或传错数据。

## 场景例子

敌人脚本把 `health` 明确设为 `int`，攻击目标设为 `Node2D`；Inspector 中可调的速度用 `@export`。敌人死亡时 `await` 一个动画完成信号，再释放节点。

## 专业要点

覆盖静态类型、类型化集合、`match`、Lambda、内部类和导出注解。异步 `await` 会把函数变成分段执行流程；覆盖虚方法时遵守父类签名。新增类型应提升边界清晰度，而不是堆叠无意义标注。

## 什么时候用

写一般 Godot 脚本时都可参考。若重点转向 `@tool`、反射、性能或信号/Callable 取舍，进一步看 `gdscript-advanced`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| type hint | 类型提示；声明变量或参数的数据类型 | Add a type hint to the target parameter.（给 target 参数加上类型提示。） |
| await a signal | 等待一个信号后继续执行 | Await the animation signal before freeing the node.（等待动画信号后再释放节点。） |
