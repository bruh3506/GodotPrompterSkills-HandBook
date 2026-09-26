# Godot 测试：用小步验证守住行为

一句话：选择合适的 GUT 或 gdUnit4，测试游戏规则并用 RED–GREEN–REFACTOR 引导实现。

## 通俗解释

测试像每次改装后都按一遍检查清单：确认按钮、规则或存档还按预期工作，而不是等到发版才发现旧功能坏了。

## 场景例子

背包堆叠上限是 99：先写测试验证第 100 个物品如何处理，看到测试失败，再实现逻辑，最后整理代码并重跑测试。

## 专业要点

区分单元测试、场景集成测试和运行时端到端测试；为外部依赖提供替身，避免测试相互污染。RED–GREEN–REFACTOR 要求先看到失败，再让它通过，最后保持行为不变地重构。

## 什么时候用

核心规则、数据转换、存档升级和容易回归的 bug 都适合测试。视觉效果更适合场景验证或截图检查，不要只为满足测试数量而测试 Godot 内建 API。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| regression test | 回归测试；确保旧功能未被新改动破坏 | Add a regression test for the inventory bug.（为背包 bug 加一条回归测试。） |
| refactor | 重构；改善结构但不改变外部行为 | Refactor the code after the test passes.（测试通过后再重构代码。） |
