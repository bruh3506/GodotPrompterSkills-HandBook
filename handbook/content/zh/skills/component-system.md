# 组件系统：组合小能力，而非堆继承层级

一句话：把生命值、受击箱、交互等行为做成可组合节点，让不同实体重复使用。

## 通俗解释

角色像乐高模型，由多个小零件拼成。玩家和敌人都可以装上 HealthComponent，但各自保留不同的移动、攻击和动画。

## 场景例子

玩家、木箱和敌人都能受伤：每个对象挂同一个 HealthComponent；武器有 Hitbox，目标有 Hurtbox。木箱销毁时掉落木材，敌人死亡时播放动画，但健康值和伤害规则可以复用。

## 专业要点

组件要有明确边界、稳定接口和低耦合通信。常见实现是 Node 子树加信号，不是每个领域对象都需要“万能组件管理器”。要处理生命周期、重复节点、场景组合与资源所有权；共享的是机制，不是每个对象所有的策略。

## 什么时候用

多个不同场景实体需要同一种独立能力时使用。若继承表达的是稳定的“是一种”关系，可以保留继承；跨对象通知可结合 `event-bus`，数据定义可用 `resource-pattern`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| composition | 组合；用零件拼装对象能力 | Composition lets the crate reuse health logic.（组合让箱子也能复用生命值逻辑。） |
| interface | 接口；组件承诺提供的能力 | The weapon talks to a damage interface.（武器通过伤害接口与目标交互。） |
