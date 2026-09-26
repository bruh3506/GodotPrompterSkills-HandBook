# 场景组织：拆分、组合与节点通信

一句话：决定哪些节点属于同一场景、哪些能力适合组合，以及对象之间怎样沟通。

## 通俗解释

场景像可复用的家具模块：玩家、门和 UI 各自是独立组装好的家具，再按需要摆进关卡，而不是把整个房子写成一张巨大蓝图。

## 场景例子

玩家场景包含 Sprite、碰撞体、HealthComponent 和武器挂点；关卡只实例化玩家场景，不需要知道每个子节点如何实现血量和受击。

## 专业要点

按独立复用、生命周期和团队边界切分场景；优先组合而非建立很深的继承链。父节点拥有子节点生命周期，跨场景关系优先使用信号或注入的接口，不依赖脆弱的多层 `get_parent()`。

## 什么时候用

项目场景树开始过大、节点职责不清或多处重复结构时使用。组件接口细节看 `component-system`；系统间松耦合事件看 `event-bus`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| composition over inheritance | 优先组合而非继承 | Composition lets the player reuse the health component.（组合让玩家复用生命值组件。） |
| scene boundary | 场景边界；一个场景负责的内容范围 | Keep the UI outside the player scene boundary.（把 UI 留在玩家场景边界之外。） |
