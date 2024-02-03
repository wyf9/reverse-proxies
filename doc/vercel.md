# Vercel 部署

## 限制

Vercel 的免费计划每月限制 **100G** 出站流量, 可付费升级计划

## 使用

1. 任意网址
   - HTTP: 在网址前加上 `<自定义域名/_/>`
   - HTTPS: 在网址前加上 `<自定义域名/_s/>`
2. 自定义网址
   - 将网址的域名替换为 `<自定义域名>/<自定义名称>`
   - 示例: `github.com/wyf9/abc` -> `example.org/gh/wyf9/abc`

## 部署

### 要求

1. 一个域名(非必选), 但 Vercel 的二级域名在国内被污染，可能无法访问
2. 一个可正常使用的 Vercel 账号

### 步骤

1. [建议]Fork 本项目，并提前删除 `README.md` (**重要，防止人多了被封!!!**)
2. 修改 `vercel.json`， [格式](#verceljson)
3. 注册一个 Vercel 账号, 或直接用 GitHub 登录 (有的可跳过)
4. 进入 [Vercel 控制台](vercel.com/dashboard)
5. 点击右上角 `Add New...` -> `Project`
6. 在左侧 `Import Git Repository` 处选择你 Fork 的项目

todo

## vercel.json

todo