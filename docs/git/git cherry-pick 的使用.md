# git cherry-pick

将分支 A 的代码转移到另一个分支 B 有以下两种情况：

1. 需要分支 A 的所有代码的变动，可以采用合并 `(git merge)`

2. 只需要部分代码的变动，可以采用 Cherry pick `(git cherry-pick)`

## 基本用法

git cherry-pick：将指定的提交（commit）应用于其他分支

```shell
git cherry-pick <commitHash>
```

## 转移多个提交

- 一次转移多个提交

```shell
git cherry-pick <HashA> <HashB>
```

- 转移一系列的连续提交（A 需早于 B 提交，开区间，即不包括 A）

```shell
git cherry-pick A..B
```

- 转移一系列的连续提交（A 需早于 B 提交，闭区间，即包括 A）

```shell
git cherry-pick A^..B
```

## 配置项

git cherry-pick 命令的常用配置项如下：

1. `-e，--edit`：打开外部编辑器，编辑提交信息

2. `-n，--no-commit`：只更新工作区和暂存区，不产生新的提交

3. `-x`：在提交信息的末尾追加一行（cherry picked form commit ...），方便以后查到这个提交是如何产生的

4. `-s，--signoff`：在提交信息的末尾追加一行操作者的签名，表示是谁进行了这个操作

5. `-m parent-number，--mainline parent-number`：如果原始提交是一个合并节点，来自于两个分支的合并，那么 Cherry pick 默认将失败，因为它不知道应该采用哪个分支的代码变动

`-m` 配置项告诉 Git，应该采用哪个分支的变动。`parent-number` 是一个从 `1` 开始的整数，代表原始提交的父分支编号

```shell
git cherry-pick -m 1 <commitHash>
```

👆 上面命令表示，cherry pick 采用提交 `commitHash` 来自编号 1 的父分支的变动

一般来说，1 号父分支是接受变动的分支（the branch being merged into），2 号父分支是作为变动来源的分支（the branch being merged from）

## 代码冲突

如果操作过程中发生代码冲突，Cherry pick 会停下来，让用户决定如何继续操作

1. **--continue**

用户解决代码冲突后，第一步将修改的文件重新加入暂存区`(git add)`，第二步使用下面的命令，让 Cherry pick 过程继续执行

```shell
 git cherry-pick --continue
```

2. **--abort**

发生冲突后，放弃合并，回到操作前的样子

3. **--quit**

发生代码冲突后，退出 Cherry pick，但是不回到操作前的样子

## 转移到另一个代码库

Cherry pick 支持转移到另一个代码库，方法是：

首先，将该库加为远程仓库 `target`

```shell
git remote add target git://gitUrl
```

然后，将远程代码仓库抓取到本地

```shell
git fetch target
```

接着，检查要从远程仓库转移的提交，获取它的哈希值

```shell
git log target/master
```

最后，使用 `git cherry-pick` 命令转移提交

```shell
git cherry-pick <commitHash>
```
