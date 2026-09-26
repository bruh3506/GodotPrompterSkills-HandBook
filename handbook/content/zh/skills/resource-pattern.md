# Resource 模式：可复用的配置与数据

一句话：用自定义 Resource 保存物品、配置和属性等数据，并让编辑器直接参与配置。

## 通俗解释

Resource 像一张可重复使用的数据卡片；场景节点负责运行，卡片描述“药水回复多少血”或“敌人基础速度是多少”。

## 场景例子

几十种药水共享同一个 `ItemData` 类型，每瓶资源分别设置名称、图标、售价和效果；商店和背包都读取同一份定义。

## 专业要点

继承 `Resource` 保存结构化数据，用导出属性支持 Inspector 配置，资源集合管理目录。Resource 默认可共享引用；若要修改运行时状态，应复制数据或把状态放进独立实例，避免一个物品的修改影响所有使用者。

## 什么时候用

需要编辑器友好、可共享、可序列化的数据定义时使用。树状运行状态适合 Node/对象；大量变化中的实例状态不要直接写回共享配置资源。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| data container | 数据容器；装载结构化信息的对象 | The resource is a data container for the item.（这个 Resource 是物品的数据容器。） |
| shared resource | 共享资源；多个对象引用同一份资源 | Duplicate the shared resource before changing it.（修改共享资源前先复制它。） |
