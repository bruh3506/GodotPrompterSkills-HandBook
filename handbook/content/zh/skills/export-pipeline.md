# 导出与发布：把项目交付给玩家

一句话：配置平台导出、构建自动化和发行流程，让游戏能在目标设备上稳定安装和运行。

## 通俗解释

编辑器里的项目像厨房里的菜谱，导出则是打包成能送到玩家手中的成品。不同平台需要不同的模板、图标、权限和签名。

## 场景例子

每次合并主分支后，CI 自动运行检查并导出 Windows 测试包；发布标签再生成正式版本，并把安装包放到下载页面。

## 专业要点

明确导出预设、模板版本、Feature Tags、密钥管理和构建产物。CI 密钥必须存入加密 Secrets，不能写进 `export_presets.cfg` 或仓库。测试构建、签名发布和上传发行平台应是可重复的阶段。

## 什么时候用

需要导出到桌面、移动端或 Web，或者建立自动构建和发布流水线时使用。移动端签名与平台权限也看 `mobile-development`；服务器包看 `dedicated-server`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| export preset | 导出预设；某个平台的构建设置 | Select the Android export preset.（选择 Android 导出预设。） |
| build artifact | 构建产物；自动构建生成的文件 | Upload the build artifact for testing.（上传构建产物供测试。） |
