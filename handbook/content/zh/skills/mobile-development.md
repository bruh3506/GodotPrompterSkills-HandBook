# 移动端开发：导出、生命周期与触控

一句话：处理 Android/iOS 特有的签名、权限、插件、应用暂停恢复和性能要求。

## 通俗解释

手机游戏会被系统打断：玩家接电话、切到别的 App，游戏可能暂停或被系统回收，所以不能只考虑“点导出按钮”。

## 场景例子

Android 包需要签名密钥和网络权限；玩家切到后台时保存关键进度，回来后恢复音频和游戏状态；大按钮和安全边距让触控更容易。

## 专业要点

分别验证 Android 与 iOS 的导出模板、签名、权限声明和插件支持矩阵。处理 pause/resume 生命周期、低内存回收、触屏与安全区域；第三方 SDK 和 IAP 等功能要遵循平台规则。

## 什么时候用

目标平台包含 Android 或 iOS，或要使用移动端原生插件、IAP、广告和设备功能时使用。通用导出流水线看 `export-pipeline`，多分辨率 UI 看 `responsive-ui`。

## English learning

| English | 中文理解 | Example |
|---|---|---|
| app lifecycle | 应用生命周期；启动、暂停、恢复和退出 | Save state when the app pauses.（应用暂停时保存状态。） |
| signing key | 签名密钥；证明应用发布者身份的凭据 | Keep the signing key out of the repository.（不要把签名密钥放进代码仓库。） |
