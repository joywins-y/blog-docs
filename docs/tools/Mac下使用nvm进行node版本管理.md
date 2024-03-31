# Mac 下使用 nvm 进行 node 版本管理

## 概述

nvm 是 node 版本管理器，可以很方便的切换 node 版本，并且可以管理多个 node 版本。在平时的工作中，不同的项目可能需要使用不同的 node 版本，如果通过全局频繁的卸载安装来切换版本，这会显得有些繁琐，且不友好。对此，我们可以使用 nvm 来管理安装不同的 node 版本，使用的 node 版本之间的切换也是非常方便。

**说明**：如果在此之前已经安装了 node，最好先卸载现有的全局 node，否则可能发生冲突。

## 彻底卸载全局安装的 Node

-   查看 node 全局安装目录

```zsh
which node # /usr/local/bin/node
```

-   删除 node 相关的文件和文件夹

```zsh
sudo rm -fr /usr/local/bin/node /usr/local/bin/node_modules /usr/local/include/node /usr/local/include/node_modules
```

-   如果使用 `brew install node` 安装的 node，则需要卸载 node

```zsh
brew uninstall node
```

-   最后删除其他相关文件

```zsh
sudo rm /usr/local/bin/npm
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
sudo rm -rf ~/.npm
sudo rm -rf ~/.node-gyp
sudo rm /opt/local/bin/node
sudo rm /opt/local/include/node
sudo rm -rf /opt/local/lib/node_modules
```

## 安装 nvm

### 命令安装

1. 使用下面的 cURL 或 Wget 命令安装

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

或

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. 查看是否安装成功

```bash
nvm --version
```

#### 可能遇到的问题

1. Failed to connect to raw.githubusercontent.com port 443: Connection refused

前往 /etc/hosts 编辑新增如下：

```txt
199.232.28.133 raw.githubusercontent.com
```

然后再次执行之前的安装命令。

2. 如果显示 `not found nvm`，则需要添加配置信息：

-   创建 .bash_profile 文件

```bash
vim ~/.bash_profile
```

-   向 `~/.bash_profile` 文件中添加下面内容

```bash
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
```

-   修改后让文件生效

```bash
source ~/.bash_profile
```

-   或者向其他启动脚本（~/.zshrc, ~/.bash_profile, ~/.profile, 或者 ~/.bashrc）中添加配置信息

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

-   让文件生效

```bash
source ~/.zshrc
```

然后执行`nvm -v`，来检查是否安装成功（建议重新打开终端检验，更准确）

### nvm 常用命令

```bash
nvm ls                      # 查看已安装版本

nvm ls-remote               # 查看远程版本

nvm install node            # 安装最新node版本

nvm install v18.20.0        # 安装指定版本

nvm install --lts           # 安装最新长期支持版本

nvm install --lts=dubnium   # 安装指定长期支持版本

nvm uninstall v18.20.0      # 卸载指定版本

node -v                     # 查看当前使用的node版本

which node                  # 查看node安装位置

nvm which v18.20.0          # 查看指定版本node安装位置

nvm use v18.20.0            # 使用指定版本node

nvm alias default v18.20.0  # 设置默认版本

nvm alias vision-name v18.20.0 # 设置版本别名 使用命令：nvm use vision-name
```
