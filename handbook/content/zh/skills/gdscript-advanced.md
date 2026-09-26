# 进阶 GDScript：性能、工具脚本与异步陷阱

一句话：在掌握基础语法后，学习生产代码中的 GDScript 性能习惯和生命周期边界。

## 通俗解释

代码跑得慢时，不要先把所有脚本改成“高级写法”；先用 Profiler 找到真正拖慢游戏的地方，再针对热点处理。

## 场景例子

一千个敌人每帧都用路径查找节点，造成卡顿。分析后发现重复遍历是热点，于是改为在 `_ready()` 缓存引用；普通玩家脚本仍保持简单易读。

## 专业要点

重点覆盖 profiler 驱动优化、反射/元编程、`@tool` 在编辑器中的生命周期、`await` 后对象可能已释放、signal 与 Callable 的选择。编辑器执行路径必须保护场景资源；缓存也要考虑生命周期和引用失效。

## 什么时候用

基础脚本已能读写，遇到性能、工具脚本或异步控制问题时使用。日常语法与常见写法先看 `gdscript-patterns`，不要为微优化牺牲可读性。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| profile the code | 为代码做性能分析 | Profile the scene before optimizing it.（先分析场景性能再优化。） |
| lifecycle | 生命周期；对象创建、运行和销毁阶段 | Check the node lifecycle after `await`.（`await` 之后要检查节点生命周期。） |
