# 技能手册内容维护

中文学习说明位于 `content/zh/skills/`，与供 AI agent 读取的 `skills/<name>/SKILL.md` 分开维护。每篇中文说明应保留“通俗解释、Godot 场景例子、专业要点、使用边界”结构，并在结尾补英语词汇或表达。

常用命令：

```bash
npm run dev:handbook
npm run build:handbook
npm run check:handbook
```

构建会把英文技能原文和参考资料渲染到忽略跟踪的 `handbook/site/public/source/`，并在中文页面提供可展开的英文技能原文。GitHub Actions 会使用仓库名自动设置 Pages 的 URL 前缀。

当英文技能源文件更新时，中文页会显示“待复核”提示。完成对应中文说明的复核后，运行 `npm run handbook:refresh-source-hashes` 更新已复核的来源指纹，再提交变更。不要只为隐藏提示而刷新指纹。

参考资料摘要保存在 `content/zh/reference-summaries.json`，键是原始 Markdown 路径。可以逐条增加中文摘要；未撰写摘要的资料仍会显示英文原文链接。
