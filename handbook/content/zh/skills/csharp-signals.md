# C# 信号：声明、连接与异步等待

一句话：用 C# 委托正确声明和订阅 Godot 信号，让对象通过事件协作。

## 通俗解释

信号像门铃：发送方按铃，不需要知道谁会来开门；接收方订阅信号，在事件发生时执行自己的反应。

## 场景例子

HealthComponent 生命值降到零时发出 `Died` 信号。UI 更新血条，关卡管理器开始结算，音频系统播放音效；HealthComponent 不必直接抓取这些对象。

## 专业要点

C# 信号使用 `[Signal]` 委托并由 Godot 生成对应事件 API。优先用类型安全的事件连接；Lambda 订阅要保存委托，才能在需要时正确断开。等待一次性事件可转成异步流程，但必须处理节点释放与取消。

## 什么时候用

C# 脚本之间需要通知状态变化、等待动画/计时器完成时使用。只调用某个对象的稳定方法且双方关系明确时，直接调用通常更简单。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| emit a signal | 发出信号 | Emit a signal when health reaches zero.（生命值降到零时发出信号。） |
| subscribe to | 订阅；开始接收事件 | The HUD subscribes to the health event.（HUD 订阅生命值事件。） |
