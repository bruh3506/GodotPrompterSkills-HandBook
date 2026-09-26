# Godot 性能优化：先测量，再改动

一句话：用 Profiler 找出 CPU、GPU、绘制调用或物理瓶颈，再做有证据的优化。

## 通俗解释

卡顿像房间里某台机器过热：先测温找出是哪台，再修那一台；盲目给所有机器降速，会让整间屋子都变差。

## 场景例子

屏幕上出现很多敌人后掉帧：Profiler 显示脚本时间正常、绘制调用过多，于是合并重复材质并减少透明特效，而不是先重写敌人 AI。

## 专业要点

区分 CPU 脚本/物理耗时、GPU fill rate、绘制调用和内存压力。用目标硬件、可重复场景和采样数据比较基线；对象池、LOD、遮挡剔除和物理调优各自有管理成本，必须测量收益。

## 什么时候用

有可复现掉帧、加载延迟、内存增长或设备性能目标时使用。优化之前先通过 `godot-debugging` 明确现象；没有证据时不要把“看起来贵”当成瓶颈。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| bottleneck | 瓶颈；限制整体速度的部分 | The profiler revealed a physics bottleneck.（Profiler 揭示了物理瓶颈。） |
| baseline | 基线；优化前的测量结果 | Compare the new frame time with the baseline.（把新帧时间和优化前基线比较。） |
