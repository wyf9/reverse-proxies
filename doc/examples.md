# Examples

## APT Proxy

可实现一些国内访问较慢第三方 apt 源的加速下载 *(如 [Syncthing](https://apt.syncthing.net))*

下文同样以 Syncthing 源为例.

### 寻找配置位置

Ubuntu / Debian 高版本可查找 `/etc/apt/sources.list.d/` 下文件, 或自行搜索

```sh
# From apt.syncthing.net
# Add the "stable" channel to your APT sources:
echo "deb [signed-by=/etc/apt/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | sudo tee /etc/apt/sources.list.d/syncthing.list
```

操作完成后可编辑 `/etc/apt/sources.list.d/syncthing.list`:

```apt
# original
#deb [signed-by=/etc/apt/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable

# added proxy:
deb [signed-by=/etc/apt/keyrings/syncthing-archive-keyring.gpg] https://your.proxy/https://apt.syncthing.net/ syncthing stable # 将 your.proxy 改为你自己的代理地址
# 如果有 signed-by 标签, 保留即可
```

修改完成后保存文件, 执行 `apt update` 测试

此时可能出现两种情况:

#### 1

```sh
# ...
获取:6 https://xxxxxxxxxx/https://apt.syncthing.net syncthing InRelease [15.1 kB]
获取:8 https://xxxxxxxxxx/https://apt.syncthing.net syncthing/stable arm64 Packages [1,579 B]
# ...
```

能正常更新代表配置成功, 你可以退出此教程了.

#### 2

出现类似提示: `由于没有公钥，无法验证下列签名：xxx`

解决方法:

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys xxx
```

将 `xxx` 改为你报错中的 key *(一个 16 进制值)*

重新运行 `apt update`, 问题应已解决.

### 参考

1. https://lidong.me/blog/mirrors-reverse-proxy/
2. https://zhuanlan.zhihu.com/p/434498354
3. https://apt.syncthing.net/