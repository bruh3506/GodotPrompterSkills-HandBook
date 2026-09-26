# Godot 调试：复现、定位、验证

一句话：用日志、断点、远程场景树和 Profiler 找到问题根因，而不是盲目改代码。

## 通俗解释

调试像找漏水点：先确认哪里、何时漏，再沿着水流往上找源头；只擦掉地板上的水并不能修好管道。

## 场景例子

敌人偶尔停在原地：先确定每次都能触发的条件；检查 NavigationAgent 路径、目标坐标和速度，再用 Remote Scene Tree 看运行时节点状态，最后重现并验证修复。

## 专业要点

使用最小复现、断点与变量观察，区分编辑器场景和 Remote 运行状态，沿信号连接追踪事件流；性能问题通过 Profiler 与监视器确认瓶颈。一次只改一个假设，并保留修复前后证据。

## 什么时候用

报错、状态错误、信号未触发、远端场景不符或掉帧时使用。深层且难复现的问题可沿系统化诊断步骤排查，不要在未经验证时把优化当成修 bug。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| reproduce a bug | 复现 bug | Reproduce the bug before changing the code.（改代码前先复现问题。） |
| root cause | 根因；导致问题的最初原因 | The log helped find the root cause.（日志帮助找到了根因。） |
