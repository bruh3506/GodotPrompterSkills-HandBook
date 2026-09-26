# Shader：控制每个像素如何显示

一句话：用 Godot Shader Language 或 VisualShader 定义材质和画面效果。

## 通俗解释

普通材质像挑选现成颜料；Shader 则像告诉画布“每个像素该是什么颜色”，因此能做溶解、描边、水面和后处理。

## 场景例子

敌人受击时给材质一个闪白参数，几帧后恢复；水面 shader 根据时间和 UV 制造波纹；屏幕后处理则在整张画面上加轻微色调。

## 专业要点

选择 `canvas_item`、`spatial` 等 Shader Type，区分 Shader、ShaderMaterial 和渲染阶段。采样、分支、屏幕空间效果和高分辨率 fill rate 会增加成本；先确认效果范围和目标渲染器。

## 什么时候用

需要自定义材质像素逻辑、后处理或屏幕效果时使用。动态视觉粒子可以用 `particles-vfx`；基于节点关键帧控制材质参数可搭配 `animation-system`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| fragment shader | 片段着色器；计算像素颜色的程序 | The fragment shader changes the water color.（片段着色器改变水面的颜色。） |
| screen-space effect | 屏幕空间效果；对最终画面采样或处理 | A screen-space effect can add a vignette.（屏幕空间效果可以加入暗角。） |
