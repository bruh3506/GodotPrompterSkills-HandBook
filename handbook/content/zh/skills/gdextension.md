# GDExtension：在 Godot 中接入原生代码

一句话：用 C++ 或 Rust 编写原生扩展，在不重新编译整个 Godot 引擎的情况下增加底层能力。

## 通俗解释

GDExtension 像给游戏引擎接上一块外部模块：Godot 仍负责场景和游戏循环，动态库则提供额外类、现成 C/C++ 库封装或性能关键逻辑。

## 场景例子

项目需要复用一套成熟的物理库，或者某个大型数据处理步骤经过分析确实太慢；可以把这段能力做成扩展类，再由 GDScript 或 C# 创建和调用。

## 专业要点

选择 C++ `godot-cpp` 或 Rust `gdext` 工具链，定义绑定类、入口和 `.gdextension` 配置。构建产物必须匹配目标平台与 Godot API/兼容约束；原生内存与线程错误可能直接导致进程崩溃。

## 什么时候用

需要原生库互操作、扩展引擎类或经过测量的底层优化时使用。优先用 GDScript、C# 或引擎已有节点；GDExtension 会增加编译、分发和跨平台维护成本。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| shared library | 共享库；可被程序加载的原生模块 | Godot loads the shared library at startup.（Godot 在启动时加载这个共享库。） |
| bind a class | 绑定类；把原生类暴露给 Godot | Bind the class so scripts can create it.（绑定这个类，让脚本可以创建它。） |
