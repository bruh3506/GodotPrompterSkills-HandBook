# 多线程：把耗时工作移出主线程

一句话：将独立计算放到工作线程执行，并安全地把结果交回 Godot 主线程。

## 通俗解释

主线程像餐厅唯一的服务员。如果它花很久切菜，顾客看到的画面就会卡；可以让帮手准备食材，但端菜和改餐桌仍由服务员完成。

## 场景例子

大型地图的寻路数据在 WorkerThreadPool 中计算；完成后通过 `call_deferred()` 把结果交给主线程更新场景节点，加载进度条保持响应。

## 专业要点

优先使用 `WorkerThreadPool` 处理短任务；只有需要长期运行的工作者时才考虑 Thread/Mutex/Semaphore。很多 SceneTree 和资源操作不是线程安全的；共享数据要同步，线程结束和对象释放要明确管理。

## 什么时候用

Profiler 证实耗时工作阻塞主线程，并且任务可安全隔离时使用。I/O 资源加载优先评估 Godot 的线程加载 API；不要因为“多线程听起来更快”就把简单逻辑搬走。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| thread-safe | 线程安全；多个线程使用时不会破坏状态 | Scene tree changes are not generally thread-safe.（场景树修改通常不是线程安全的。） |
| hand a result back | 把结果交回 | Hand the result back to the main thread.（把结果交回主线程。） |
