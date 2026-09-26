# 物理系统：碰撞体、刚体、区域与射线

一句话：选择正确的物理节点和碰撞形状，让运动、触发和检测符合 Godot 的物理更新规则。

## 通俗解释

`StaticBody` 像不动的墙，`RigidBody` 像会被推倒的箱子，`CharacterBody` 像由游戏逻辑控制的角色，`Area` 则像只检测“谁进来了”的感应区。

## 场景例子

玩家用 CharacterBody 沿地面行走；可推动的木桶用 RigidBody 接受冲量；门口 Area 检测玩家进入后播放提示；射线向前判断能否交互。

## 专业要点

按运动所有权选 Body 类型，碰撞层/遮罩要设计成明确矩阵。物理状态应在 physics tick 修改；RigidBody 安全调整要用物理状态 API。碰撞形状尽量简单，Area 触发与 RayCast 命中也需验证更新时机。

## 什么时候用

处理碰撞、刚体、区域、射线、布娃娃或物理插值时使用。玩家移动细节看 `player-controller`；物理查询数学可看 `math-essentials`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| collision layer | 碰撞层；对象属于哪类碰撞对象 | Put enemies on the enemy collision layer.（把敌人放在敌人碰撞层。） |
| impulse | 冲量；一次性推力 | Apply an impulse to knock the barrel away.（施加冲量把木桶撞开。） |
