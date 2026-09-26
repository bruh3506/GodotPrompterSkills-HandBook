# 程序化生成：噪声、洞穴、地牢与种子

一句话：用算法生成地图内容，同时保留可复现性和关卡质量控制。

## 通俗解释

程序化生成像按菜谱变化食材：seed 固定时每次做出同一张地图，换 seed 则产生不同布局；规则决定结果是否仍然可玩。

## 场景例子

用噪声创建高低起伏的地形，再用细胞自动机把随机墙格整理成洞穴；地牢用 BSP 划分房间，WFC 则根据邻接规则拼接瓦片。

## 专业要点

先保证 RNG seed 可追踪，便于复现 bug 和保存关卡。不同算法解决的问题不同：噪声适合连续场，BSP 适合切分空间，细胞自动机适合平滑格点洞穴，WFC 需要约束规则且可能失败回溯。

## 什么时候用

需要可重复随机地图、洞穴、地牢或地形时使用。TileMap 和 2D 呈现看 `2d-essentials`；路径可达性仍要用导航系统验证。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| random seed | 随机种子；决定一组可复现的随机结果 | Save the seed to reproduce the dungeon.（保存种子以复现地牢。） |
| constraint | 约束；生成结果必须满足的规则 | The tile constraint prevents water from touching lava.（瓦片约束会阻止水和岩浆相邻。） |
