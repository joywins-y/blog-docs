## Pinia 相比 Vuex 有什么样的优点？为什么现在官方推荐使用 Pinia？

Pinia 是由 Vue.js 团队成员开发的下一代状态管理仓库，相比 Vuex 3.x/4.x，Pinia 可以看作是 Vuex 5 版本。

Pinia 具有如下的优势：

- mutations 不复存在。只有 state、getters 和 actions。
- actions 中支持同步和异步方法修改 state 状态。
- 与 TypeScript 一起使用具有可靠的类型推断支持。
- 不再有模块嵌套，只有 Store 的概念，Store 之间可以相互调用。
- 支持插件扩展，可以非常方便实现本地存储等功能
- 更加轻量，压缩后体积只有 1kb 左右。
