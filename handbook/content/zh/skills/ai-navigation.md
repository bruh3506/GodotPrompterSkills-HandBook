# AI 导航：寻路、转向与行为

一句话：让 NPC 找到可走路线，并把“往哪走”与“接下来做什么”分开处理。

## 通俗解释

导航网格像地图上的可通行区域；`NavigationAgent2D/3D` 像拿着路线的向导，会告诉角色下一个目标点。转向行为再决定角色怎样平滑地跟上路线。

## 场景例子

巡逻敌人发现玩家后先追到附近；到了攻击距离就停止前进并挥刀。若玩家躲到墙后，敌人重新请求路线；若路线还没烘焙好，就先等地图准备完成。

## 专业要点

区分导航地图、路径请求、运动积分和 AI 决策。`NavigationAgent` 给出下一个路径位置，角色仍要在正确的物理更新阶段移动；多个 agent 同时移动时要避免每帧重复请求路径。巡逻、追逐、攻击可交给状态机或行为树组合。

## 什么时候用

NPC 需要绕开障碍、巡逻或追击时使用。只需朝目标直线移动不必上导航；复杂决策可搭配 `state-machine`、Beehave 或 LimboAI。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| pathfinding | 寻路；找出一条可走的路线 | The guard uses pathfinding to reach the player.（守卫通过寻路接近玩家。） |
| steering | 转向控制；决定怎样朝路线移动 | Steering makes the turn look smooth.（转向控制让拐弯看起来更平滑。） |
