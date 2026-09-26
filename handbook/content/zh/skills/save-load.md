# 存档与读档：选格式、管版本、守数据

一句话：按数据用途选择 ConfigFile、JSON 或 Resource，并设计能兼容后续版本的存档流程。

## 通俗解释

设置像玩家偏好清单，进度存档像一张记录当前冒险状态的快照。不同数据需要不同格式；游戏升级后，旧快照也要能读懂。

## 场景例子

音量和语言保存在 ConfigFile；任务、角色位置与背包序列化成 JSON；版本更新时把旧版缺失的字段填入默认值，再保存到新版格式。

## 专业要点

区分配置、运行状态和资源定义，明确用户数据目录、原子写入、错误恢复和版本号。不要随意序列化整个场景树；迁移逻辑要覆盖旧版本、缺字段和未知字段，并保留可回滚备份。

## 什么时候用

需要保存设置、关卡进度或角色状态时使用。可复用静态定义看 `resource-pattern`；包含物品和运行时堆叠的存档需要与 `inventory-system` 合作。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| save migration | 存档迁移；把旧结构转换成新结构 | Run a save migration before loading the game.（加载游戏前先迁移存档。） |
| default value | 默认值；缺少数据时使用的备用值 | Add a default value for the new setting.（为新增设置补一个默认值。） |
