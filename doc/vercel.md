# Vercel 部署

> 方法来源: [gaboolic/vercel-reverse-proxy](https://github.com/gaboolic/vercel-reverse-proxy)

> 本方案的不足之处: 点击页面内链接时不一定会正确替换路径(跟源站有关); 部分样式等无法正常加载

## 用量限制

Vercel 的免费计划每月限制 **100GB** 出站流量, 可付费升级计划

## 使用

> 可自行在 `vercel.json` 中修改

1. 任意网址
   - HTTP: 将网址的域名部分替换为 `<自定义域名/_/>`
   - HTTPS: 将网址的域名部分替换为 `<自定义域名/_s/>`
   - 示例: `https://github.com/wyf9/reverse-proxies` -> `https://<你的域名>/_s/github.com/wyf9/reverse-proxies`
2. 自定义网址
   - 将网址的域名替换为 `<自定义域名>/<自定义名称>`
   - 示例: `https://github.com/wyf9/reverse-proxies` -> `https://<你的域名>/gh/wyf9/reverse-proxies`

## 部署

### 要求

1. 一个域名(非必选), 但 Vercel 的二级域名在国内被污染，可能无法访问
2. 一个可正常使用的 Vercel 账号

### 步骤

1. [建议] Fork 本项目，并提前删除 `README.md` (**重要，防止用的人人多了被封!!!**)
2. 修改 `vercel.json`， [修改方法](#verceljson)
3. 注册一个 Vercel 账号, 或直接用 GitHub 登录 (有的可跳过)
4. 进入 [Vercel 控制台](https://vercel.com/dashboard)
5. 点击右上角 `Add New...` -> `Project`
6. 在左侧 `Import Git Repository` 处选择你 Fork 的项目，若没有请点击 `Connect to GitHub` 授权后再试
7. 直接点击 `Deploy` 部署即可
8. [可选] 添加自定义域名

## vercel.json

### 任意网址

```json
// ...

{
            "source": "/_/:site/:path*",
            "destination": "http://:site/:path*"
        },
        {
            "source": "/_s/:site/:path*",
            "destination": "https://:site/:path*"
        },

// ...
```

其中的 `/_/`、`/_s/` 中的路径可替换

### 自定义网址

```json
// ...

{
            "source": "/<路径>/:path*",
            "destination": "<协议:https/http>://<站点>/:path*"
        },

// ...
```

按照上面的格式修改即可