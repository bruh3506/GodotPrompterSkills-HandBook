# 多人状态同步：复制、插值与预测

一句话：在网络延迟和带宽限制下，让不同玩家看到的游戏状态尽量平滑、一致。

## 通俗解释

服务器每隔一会告诉客户端角色新位置。网络消息不是连续的电影，所以客户端会在两次位置之间补画动作，减少卡顿感。

## 场景例子

服务器定期发送玩家位置和朝向，客户端用插值平滑移动；本地玩家先立即看到自己的移动，再根据服务器结果修正，避免每个按键都等网络往返。

## 专业要点

选择 `MultiplayerSynchronizer` 复制的属性、频率、可见性和传输模式。插值适合远端对象；预测与回滚更复杂，需要确认 server authority、时间戳、状态历史和纠正策略。不要复制永远不变或可本地推导的数据。

## 什么时候用

基础 RPC 已跑通、需要同步角色状态或改善远端移动观感时使用。连接/权限基础看 `multiplayer-basics`；复杂服务端架构看 `dedicated-server`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| interpolation | 插值；在两次更新之间平滑补值 | Interpolation smooths remote movement.（插值让远端移动更平滑。） |
| prediction | 预测；在服务器确认前先显示预期结果 | Client prediction makes input feel responsive.（客户端预测让输入更灵敏。） |
