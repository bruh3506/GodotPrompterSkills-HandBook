# 粒子特效：火焰、烟尘、轨迹与碰撞

一句话：用 GPU/CPU 粒子和过程材质制作可控的环境效果与游戏反馈。

## 通俗解释

粒子系统像一群遵守规则的小点：系统告诉它们从哪出现、往哪飞、多久消失，以及颜色和大小怎样变化。

## 场景例子

火球命中时一次喷出火星，连续几秒冒烟；玩家冲刺时尾部出现短轨迹。火球爆炸的子发射器再产生少量烟尘层。

## 专业要点

按模拟类型选择 GPU 或 CPU 粒子；设置 emission shape、process material、生命周期、one-shot 与 trails。屏幕上粒子数量、透明 overdraw 和碰撞模拟有成本。特效应和 gameplay hitbox 分离，不能用视觉粒子代替判定。

## 什么时候用

制作火焰、雨雪、爆炸、轨迹和局部环境效果时使用。材质像素效果看 `shader-basics`；完整灯光和 3D 环境看 `3d-essentials`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| emission shape | 发射形状；粒子从何处产生 | Use a ring emission shape for the portal.（用环形发射形状表现传送门。） |
| lifetime | 生命周期；粒子存活时长 | Shorten the particle lifetime to reduce overdraw.（缩短粒子生命周期以减少重复覆盖。） |
