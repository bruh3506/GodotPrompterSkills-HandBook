# 多人游戏基础：连接、RPC 与 authority

一句话：理解 Godot 多人 API 的 peer、远程过程调用和权限模型，搭出可靠的联机起点。

## 通俗解释

网络 peer 像房间里的玩家连接；RPC 是隔空发出的一条带规则的消息，而 authority 表示哪个 peer 有权决定某个对象的状态。

## 场景例子

玩家加入 ENet 房间后，服务器生成角色。客户端请求“开火”，服务器检查弹药与目标，再决定是否广播命中结果，而不是相信客户端报来的伤害数字。

## 专业要点

建立 Peer 后要处理连接、加入、离开和断线。RPC 的调用端、权限、可靠性与 transfer mode 必须按消息用途配置；节点路径需在各端一致。网络输入是请求，不等于可信结果。

## 什么时候用

创建联机原型、房间连接和客户端/服务器通信时使用。连续状态复制和插值看 `multiplayer-sync`；常驻无画面主机看 `dedicated-server`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| remote procedure call (RPC) | 远程过程调用；请求另一端执行函数 | The client sends an RPC to request an attack.（客户端发送 RPC 请求攻击。） |
| authority | 权限归属；决定谁能控制对象状态 | The server has authority over the match.（对局由服务器拥有控制权。） |
