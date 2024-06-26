## 面试题：谈一谈你对前端框架的理解

在早期使用 jQuery 时代，那时的开发人员需要手动的去操作 DOM 节点，那个时候流行的还是 MPA 模式，各个页面的 JS 代码量还在能够接受的范围。

但是随着单页应用的流行，客户端的 JS 代码量出现井喷，此时如果还是采用传统的手动操作 DOM 的方式，对于开发人员来讲有非常大的心智负担。

此时就出现了能够基于状态声明式渲染以及提供组件开发模式的库，例如 Vue 和 React。这两者本质上仅仅是构建 UI 的库，但是随着应用复杂度的提升，还需要前端路由方案、状态管理方案，所以有了 vue-router、react-router、vuex、redux 等周边生态产品。

Vue 或 React 和这些周边生态产品共同构成了一个技术栈（全家桶），现在我们会将 React 或者 Vue 称之为框架，这可以算是一种约定俗成的说法。

一款现代前端框架，在它本身以及它的周边生态中，至少要包含以下几个方面：

-   基于状态的声明式渲染
-   支持组件化开发
-   客户端路由方案
-   状态管理方案

比如：

-   Umijs 是一款基于 React 、内置路由、构建、部署等功能的框架
-   Nextjs 是一款基于 React、支持 SSR、SSG 两大功能的服务端框架

## 面试题：React 和 Vue 描述页面的区别

在 React 中，使用 JSX 来描述 UI。因为 React 团队认为 UI 本质上与逻辑存在耦合的部分，作为前端工程师，JS 是用的最多的，如果同样使用 JS 来描述 UI，就可以让 UI 和逻辑配合的更加密切。

使用 JS 来描述页面，可以更加灵活，主要体现在：

-   可以在 if 语句和 for 循环中使用 JSX
-   可以将 JSX 赋值给变量
-   可以把 JSX 当作参数传入，以及在函数中返回 JSX

而模版语言的历史则需要从后端说起。早期在前后端未分离时代，后端有各种各样的模板引擎，其本质是扩展了 HTML，在 HTML 中加入逻辑相关的语法，之后再动态的填充数据进去。如果单看 Vue 中的模板语法，实际上和后端语言中的各种模板引擎是非常相似的。

总结起来就是：

模板语法的出发点是，既然前端框架使用 HTML 来描述 UI，那么就扩展 HTML 语法，使它能够描述逻辑，也就是**”从 UI 出发，扩展 UI，在 UI 中能够描述逻辑“**。

而 JSX 的出发点是，既然前端使用 JS 来描述逻辑，那么就扩展 JS 语法，让它能够描述 UI，也就是**”从逻辑出发，扩展逻辑，在逻辑中能够描述 UI“**。

虽然这两者都达到了同样的目的，但是对框架的实现产生了不同的影响。

## 面试题：现代前端框架不仅仅是 React、Vue，还出现了像 Svelte、Solid.js 之类的框架，你觉得这些新框架相比 React、Vue 有什么样的区别？

所有的现代前端框架，都有一个非常重要的特点，那就是**“基于状态的声明式渲染”**。概括成一个公式的话，那就是 UI = f (state)。

这里有一点类似于数学中自变量与因变量之间的关系。例如在上面的公式中，state 就是一个自变量，state 的变化会导致 UI 这个因变量发生变化。

不同的框架，在根据自变量（state）的变化计算出 UI 的变化这一步骤有所区别。自变量和 x （应用、组件、UI）的对应关系，随着 x 的抽象层级不断下降，“自变量到 UI 变化”的路径则不断增多。路径越多，则意味着前端框架在运行时消耗在寻找”自变量与 UI 的对应关系“上的时间越少。

以”与自变量建立对应关系的抽象层级“可以作为其分类的依据，按照这个标准，前端框架可以分为以下三类：

-   元素级框架
-   组件级框架
-   应用级框架

以常见的前端框架为例，React 属于应用级框架，Vue 属于组件级框架，Svelte、Solid.js 属于元素级框架。

## 面试题：什么是虚拟 DOM？其优点有哪些？

虚拟 DOM 最初是由 React 团队所提出的概念，这是一种编程的思想，指的是针对真实 UI DOM 的一种描述能力。

在 React 中，使用了 JS 对象来描述真实的 DOM 结构。虚拟 DOM 和 JS 对象之间的关系：前者是一种思想，后者是这种思想的具体实现。

使用虚拟 DOM 有如下的优点：

-   相较于 DOM 的体积和速度优势
-   多平台抽象的渲染能力

**相较于 DOM 的体积和速度优势**

-   JS 层面的计算速度，要比 DOM 层面的计算速度快得多
    -   DOM 对象最终被浏览器显示出来之前，浏览器会有很多工作要做（浏览器渲染原理）
    -   DOM 上面的属性也是非常多的
-   虚拟 DOM 发挥优势的时机主要体现在更新的时候，相比较 innerHTML 要将已有的 DOM 节点全部销毁，虚拟 DOM 能够做到针对 DOM 节点做最小程度的修改。

**多平台渲染的抽象能力**

-   浏览器、Node.js 宿主环境使用 ReactDOM 包
-   Native 宿主环境使用 ReactNative 包
-   Canvas、SVG 或者 VML（IE8）宿主环境使用 ReactArt 包
-   ReactTest 包用于渲染出 JS 对象，可以很方便的测试“不隶属于任何宿主环境的通用功能”

在 React 中，通过 JSX 来描述 UI，JSX 仅仅是一个语法糖，会被 Babel 编译为 createElement 方法的调用。该方法调用之后会返回一个 JS 对象，该对象就是虚拟 DOM 对象，官方更倾向于称之为一个 React 元素。

## 面试题：是否了解过 React 的架构？新的 Fiber 架构相较于之前的 Stack 架构有什么优势？

React v15 及其之前的架构：

-   Reconciler（协调器）：VDOM 的实现，负责根据自变量变化计算出 UI 变化
-   Renderer（渲染器）：负责将 UI 变化渲染到宿主环境

这种架构称之为 Stack 架构，在 Reconciler 中，mount 的组件会调用 mountComponent，update 的组件会调用 updateComponent，这两个方法都会递归更新子组件，更新流程一旦开始，中途无法中断。

但是随着应用规模的逐渐增大，之前的架构模式无法在满足“快速响应”这一需求，主要受限于如下两个方面：

-   CPU 瓶颈：由于 VDOM 在进行差异比较时，采用的是递归的方式，JS 计算会消耗大量的时间，从而导致动画以及一些需要实时更新的内容产生视觉上的卡顿。
-   I/O 瓶颈：由于各种基于“自变量”变化而产生的更新任务没有优先级的概念，因此在某些更新任务（例如文本框的输入）有稍微的延迟，对于用户来说也是非常敏感的，会让用户产生卡顿的感觉。

新的架构称之为 Fiber 架构：

-   Scheduler（调度器）：调度任务的优先级，高优先级任务会优先进入到 Reconciler
-   Reconciler（协调器）：VDOM 的实现，负责根据自变量变化计算出 UI 变化
-   Renderer（渲染器）：负责将 UI 变化渲染到宿主环境

首先引入了 Fiber 的概念，通过一个对象来描述一个 DOM 节点，但是和之前方案不同的地方在于，每个 Fiber 对象之间通过链表的方式来进行串联。通过 child 来指向子元素。通过 sibling 指向兄弟元素，通过 return 来指向父元素。

在新架构中，Reconciler 中的更新流程从递归变为来“可中断的循环过程”。每次循环都会调用 shouldYield 判断当前的 TimeSlice 是否还有剩余时间，没有剩余时间紧则暂停更新流程，将主流程还给渲染流水线，等待下一个宏任务再继续执行。这样就解决了 CPU 的瓶颈问题。

另外在新架构中还引入了 Scheduler 调度器，用来调度任务的优先级，从而解决了 I/O 的瓶颈问题。

## 面试题：是否了解过 React 的整体渲染流程？里面主要有哪些阶段？

React 整体的渲染流程可以分为两大阶段，分别是 render 阶段和 commit 阶段。

render 阶段里面就经由调度器和协调器处理，此过程是在内存中运行，是异步可中断的。

commit 阶段会由渲染器进行处理，根据副作用进行 UI 的更新，此过程是同步不可中断的，否则会造成 UI 和数据显示不一致。

**调度器**

调度器的主要工作就是调度任务，让所有的任务有优先级的概念，这样的话紧急的任务可以优先执行。Scheduler 实际上在浏览器的 API 中是有原生实现的，这个 API 叫做 requestIdleCallback，但是由于兼容性问题，React 放弃了使用这个 API，而是自己实现了一套这样的机制，并且后期会把 Scheduler 这个包单独的进行发布，变成一个独立的包。这意味着 Scheduler 不仅仅是只能在 React 中使用，后面如果有其他的项目涉及到了任务调度的需求，都可以使用这个 Scheduler。

**协调器**

协调器是 Render 的第二阶段工作。该阶段会采用深度优先的原则遍历并且创建一个一个的 FiberNode，并将其串联在一起。在遍历时分为了“递”和“归”两个阶段。其中在“递”阶段会执行 beginWork 方法，该方法会根据传入的 FiberNode 创建下一级 FiberNode。而“归”阶段则会执行 CompleteWork 方法，做一些副作用的收集。

**渲染器**

渲染器的工作主要就是将各种副作用（flags 表示）commit 到宿主环境的 UI 中。整个阶段可以分为三个子阶段，分别是 BeforeMutation 阶段、Mutation 阶段和 Layout 阶段。

## 面试题：谈一谈你对 React 中 Fiber 的理解以及什么是 Fiber 双缓冲？

Fiber 可以从三个方面去理解：

-   **FiberNode 作为一种架构**：在 React v15 以及之前的版本中，Reconciler 采用的是递归方式，因此被称之为 Stack Reconciler，到了 React v16 版本之后，引入了 Fiber，Reconciler 也从 Stack Reconciler 变为了 Fiber Reconciler，各个 FiberNode 之间通过链表的形式串联了起来。
-   **FiberNode 作为一种数据类型**：Fiber 本质上也是一个对象，是之前虚拟 DOM 元素（React 元素，createElement 的返回值）的一种升级版本，每个 Fiber 对象里面会包含 React 元素的类型，周围链接的 FiberNode，DOM 相关信息。
-   **FiberNode 作为动态的工作单元**：在每个 FIberNode 中，保存了“本次更新中该 React 元素变化的数据、要执行的工作（增、删、改、更新 Ref、副作用等）”等信息。

所谓 Fiber 双缓冲树，指的是在内存中构建两棵树，并直接在内存中进行替换的技术。在 React 中使用 Wip Fiber Tree 和 Current Fiber Tree 这两棵树来实现更新的逻辑。Wip Fiber Tree 在内存中完成更新，而 Current Fiber Tree 是最终要渲染的树，两棵树通过 alternate 指针相互指向，这样在下一次渲染的时候，直接复用 Wip Fiber Tree 作为下一次的渲染树，而上一次的渲染树又作为新的 Wip Fiber Tree，这样可以加快 DOM 节点的替换与更新。

## 面试题：React 中哪些地方用到了位运算？

位运算可以很方便的表达“增、删、改、查”。在 React 内部，像 flags、状态、优先级等操作都大量使用到了位运算。

细分下来主要有如下的三个地方：

-   fiber 的 flags
-   lane 模型
    -   getHighestPriorityLane 分离出优先级最高的 lane
-   上下文

## 面试题：beginWork 中主要做一些什么工作？整体的流程是怎样的？

beginWork 会根据是 mount 还是 update 有着不一样的流程。

如果当前的流程是 update，则 WorkInProgrressFiberNode 存在对应的 CurrentFiberNode，接下来就判断是否能够复用。

如果无法复用 CurrentFiberNode，那么 mount 和 uodate 的流程大体上是一致的：

-   根据 wip.tag 进入“不同类型元素的处理分支”
-   使用 reconcile 算法生成下一级 FiberNode（diff 算法）

两个流程的区别在于“最终是否会为生成的子 FiberNode 标记副作用 flags”

在 beginWork 中，如果标记了副作用的 flags，那么主要与元素的位置相关，包括：

-   标记 ChildDeletion，代表删除操作
-   标记 Placement，代表插入或移动操作

## 面试题：completeWork 中主要做一些什么工作？整体的流程是怎样的？

completeWork 会根据 wip.tag 区分对待，流程大体上包括如下两个步骤：

1. 创建元素（mount）或者标记元素更新（update）
2. flags 冒泡

completeWork 在 mount 时的流程如下：

-   根据 wip.tag 进入不同的处理分支
-   根据 current !== null 区分是 mount 还是 update
-   根据 HostComponent，首先执行 createInstance 方法来创建对应的 DOM 元素
-   执行 appendChildren 将下一级 DOM 元素挂在上一步所创建的 DOM 元素下
-   执行 finalizeInitialChildren 完成属性初始化
-   执行 bubbleProperties 完成 flags 冒泡

completeWork 在 update 时主要是标记属性的更新。

updateHostComponent 的主要逻辑是在 diffProperties 方法中，该方法包括两次遍历：

-   第一次遍历，标记删除“更新前有，更新后没有”的属性
-   第二次遍历，标记更新“update 流程前后发生改变”的属性

无论是 mount 还是 update，最终都会进行 flags 的冒泡。

flags 冒泡的目的是为了找到散落在 WorkInProgressFiberTree 各处的被标记了的 FiberNode，对“被标记的 FiberNode 所对应的 DOM 元素”执行 flags 对应的 DOM 操作。

FiberNode.subtreeFlags 记录了该 FiberNode 的所有子孙 FiberNode 上被标记的 flags。而每个 FiberNode 经由如下操作，便可以将子孙 FiberNode 中标记的 flags 向上冒泡一层。

Fiber 架构的早期版本并没有使用 subtreeFlags，而是使用一种被称之为 Effect list 的链表结构来保存“被标记副作用的 FiberNode”。

但在 React v18 版本中使用了 subtreeFlags 替换了 Effect list，原因是因为 v18 中的 Suspense 的行为恰恰需要遍历子树。

## 面试题：React 中的 diff 算法吗有没有了解过？具体的流程是怎么样的？React 为什么不采用 Vue 的双端对比算法？

diff 计算发生在更新阶段，当第一次渲染完成后，就会产生 Fiber 树，再次渲染的时候（更新），就会拿新的 JSX 对象（vdom）和旧的 FiberNode 节点进行一个对比，再决定如何产生新的 FiberNode，它的目标是尽可能的复用已有的 Fiber 节点。这个就是 diff 算法。

在 React 中整个 diff 分为单节点 diff 和 多节点 diff。

所谓单节点是指新的节点为单一节点，但是旧节点的数量是不一定的。

单节点 diff 是否能够复用遵循如下的顺序：

1. 判断 key 是否相同：
    - 如果更新前后均未设置 key，则 key 均未 null，也属于相同的情况
    - 如果 key 相同，进入步骤二
    - 如果 key 不同，则无需判断 type，结果为不能复用（有兄弟节点还会去遍历兄弟节点）
2. 如果 key 相同，再判断 type 是否相同
    - 如果 type 相同，那么就复用
    - 如果 type 不同，则无法复用（并且兄弟节点也一并标记为删除）

多节点 diff 会分为两轮遍历：

第一轮遍历会从前往后进行遍历，存在以下三种情况：

-   如果新旧子节点的 key 和 type 都相同，说明可以复用
-   如果新旧子节点的 key 相同，但是 type 不相同，这个时候就会根据 ReactElement 来生成一个全新的 fiber，旧的 fiber 被放入到 deletions 数组里面，回头统一删除。但是注意，此时遍历不会终止。
-   如果新旧子节点的 key 和 type 都不相同，结束遍历。

如果第一轮遍历被提起终止了，那么意味着还有新的 JSX 对象或者旧的 FiberNode 没有被遍历，因此会采用第二轮遍历去处理。

第二轮遍历会遇到三种情况：

-   **删除的情况：只剩下旧子节点**。将旧的子节点添加到 deletions 数组里面直接删除掉。

-   **新增的情况：只剩下新的 JSX 元素**。根据 ReactElement 元素来创建 FiberNode 节点。

-   **移动的情况：新旧子节点都有剩余**。将剩余的 FiberNode 节点放入到一个 map 里面，遍历剩余的新的 JSX 元素，然后从 map 中去寻找能够复用的 FiberNode 节点。如果能够找到，就拿来复用。

    如果找不到，就新增。然后如果剩余的 JSX 元素都遍历完了，map 结构中还有剩余的 Fiber 节点，就将这些 Fiber 节点添加到 deletions 数组里面，之后统一进行删除操作。

整个 diff 算法最核心的就是两个字**“复用”**。

React 不使用双端 diff 的原因：

由于双端 diff 需要向前查找节点，但每个 FiberNode 节点上都没有反向指针，即前一个 FiberNode 通过 sibling 属性指向后一个 FiberNode，只能从前往后遍历，而不能反过来，因此该算法无法通过双端搜索来进行优化。

React 想看下现在用这种方式能走多远，如果这种方式不理想，以后再考虑实现双端 diff。React 认为对于列表反转和需要进行双端搜索的场景是少见的，所以在 这一版的实现中，先不对 bad case 做额外的优化。

## 面试题：commit 阶段的工作流程是怎样的？此阶段可以分为哪些模块？每个模块在做什么？

整个 commit 可以分为三个子阶段

-   BeforeMutation 阶段
-   Mutation 阶段
-   Layout 阶段

每个子阶段又可以分为 commitXXXEffects、commitXXXEffects_begin 和 commitXXXEffects_complete

其中 commitXXXEffects_begin 主要是在做遍历节点的操作，commitXXXEffects_complete 主要是在处理副作用

BeforeMutation 阶段整个过程主要是处理如下两种类型的 FiberNode：

-   ClassComponent，执行 getSnapsshotBeforeUpdate 方法
-   HostRoot，清空 HostRoot 挂载的内容，方便 Mutaition 阶段渲染

对于 HostComponent，Mutation 阶段的工作主要是进行 DOM 元素的增、删、改。当 Mutation 阶段的主要工作完成后，在进入 Layout 阶段之前，会执行如下的代码完成 Fiber Tree 的切换。

Layout 阶段会对遍历到的每个 FiberNode 执行 commitLayoutEffectOnFiber，根据 FiberNode 的不同，执行不同的操作，例如：

-   对于 ClassComponent，该阶段执行 componentDidMount/Update 方法
-   对于 FunctionComponent，该阶段执行 useLayoutEffect callback 方法

## 面试题：是否了解过 React 中的 lane 模型？为什么要从之前的 expirationTime 模型转换为 lane 模型？

在 React 中有一套独立的粒度更细的优先级算法，这就是 lane 模型。

这是一个基于位运算的算法，每一个 lane 是一个 32 bit Integer，不同的优先级对应了不同的 lane，越低的位代表越高的优先级。

早期的 React 并没有使用 lane 模型，而是采用的基于 expirationTime 模型的算法，但是这种算法耦合了“优先级”和“批“这两个概念，限制了模型的表达能力。优先级算法的本质是“为 update 排序”，但 expirationTime 模型在完成排序的同时还默认的划定了“批”。

使用 lane 模型就不存在这个问题，因为是基于位运算，所以在批的划分上会更加的灵活。

## 面试题：简述一下 React 中的事件是如何处理的？

在 React 中，有一套自己的事件系统，如果说 React 用 FiberTree 这一数据结构是用来描述 UI 的话，那么事件系统则是基于 FiberTree 来描述和 UI 之间的交互。

对于 ReactDOM 宿主环境，这套事件系统由两个部分组成：

（1）SyntheticEvent（合成事件对象）

SyntheticEvent 是对浏览器原生事件对象的一层封装，兼容主流浏览器，同时拥有与浏览器原生事件相同的 API，例如 stopPropagation 和 preventDefault。SyntheticEvent 存在的目的是为了消除不同浏览器在“事件对象”间的差异。

（2）模拟实现事件传播机制

利用事件委托的原理，React 基于 FiberTree 实现了事件的捕获、目标、冒泡的流程（类似于原生事件在 DOM 元素中传递的流程），并且在这套事件传播机制中加入了许多新的特性，例如：

-   不同事件对应了不同的优先级
-   定制事件名
-   例如事件统一采用如“on XX”的驼峰写法
-   定制事件行为
-   例如 onChange 的默认行为与原生 oninput 相同

## 面试题：Hook 是如何保存函数的组件状态的？为什么不能在循环、条件或嵌套函数中调用 Hook？

首先 Hook 是一个对象，大致有如下的结构：

```js
const hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
};
```

不同类型的 hook，hook 的 memoizedState 中保存了不同的值，例如：

-   useState：对于 `const [state, updateState] = useState(initialState) ` ，memoizedState 保存的是 state 的值
-   useEffect：对于 `useEffect(callback, [...deps])`，memoizedState 保存的是 callback、[...deps] 等数据

一个组件中的 hook 会以链表的形式串起来，FiberNode 的 memoizedState 中保存了 Hooks 链表中的第一个 Hook。

在更新时，会复用之前的 Hook，如果通过 _if_ 条件语句，增加或者删除 _hooks_，在复用 _hooks_ 过程中，会产生复用 _hooks_ 状态和当前 _hooks_ 不一致的问题。

## 面试题：useState 和 useReducer 有什么样的区别？

useState 本质上是一个简易版的 useReducer。

在 mount 阶段，两者之间的区别在于：

-   useState 的 lastRenderedReducer 为 basicStateReducer
-   useReducer 的 lastRenderedReducer 为传入的 reducer 参数

所以 ，useSate 可以视为 reducer 参数为 basicStateReducer 的 useReducer。

在 update 阶段，updateState 内部直接调用的就是 updateReducer，传入的 reducer 仍然是 basicStateReducer。

## 面试题：说一说 useEffect 和 useLayoutEffect 有什么区别？

在 React 中，用于定义副作用因变量的 Hook 有：

-   useEffect：回调函数会在 commit 阶段完成后异步执行，所以不会阻塞视图渲染
-   useLayoutEffect：回调函数会在 commit 阶段的 Layout 子阶段同步执行，一般用于执行 DOM 相关的操作

每一个 effect 会与当前 FC 其他的 effect 形成环状链表，连接方式为单向环状链表。

其中 useEffect 工作流程可以分为：

-   声明阶段
-   调度阶段
-   执行阶段

useLayoutEffect 的工作流程可以分为：

-   声明阶段
-   执行阶段

之所以 useEffect 会比 useLayoutEffect 多一个阶段，就是因为 useEffect 的回调函数会在 commit 阶段完成后异步执行，因此需要经历调度阶段。

## 面试题：useCallback 和 useMemo 的区别是什么？

在 useCallback 内部，会将函数和依赖项一起缓存到 hook 对象的 memoizedState 属性上，在组件更新阶段，首先会拿到之前的 hook 对象，从之前的 hook 对象的 memoizedState 属性上获取到之前的依赖项目，对比依赖项目是否相同，如果相同返回之前的 callback，否则就重新缓存，然后返回新的 callback。

在 useMemo 内部，会将传入的函数执行并得到计算值，将计算值和依赖项目存储到 hook 对象的 memoizedState 上面，最后向外部返回计算得到的值。更新的时候首先是从 updateWorkInProgressHook 上拿到之前的 hook 对象，从而获取到之前的依赖值，和新传入的依赖进行一个对比，如果相同，就返回上一次的计算值，否则就重新调用传入的函数得到新的计算值并缓存，最后向外部返回新的计算值。

## 面试题：useRef 是干什么的？ref 的工作流程是怎样的？什么叫做 ref 的失控？

useRef 的主要作用就是用来创建 ref 保存对 DOM 元素的引用。在 React 发展过程中，出现过三种 ref 相关的引用模式：

-   String 类型（已不推荐使用）
-   函数类型
-   { current: T }

目前最为推荐的是在 类组件中使用 createRef，在函数组件中使用 useRef 来创建 Ref。

当开发者调用 useRef 来创建 ref 时，在 mount 阶段，会创建一个 hook 对象，该 hook 对象的 memoizedState 存储的是 `{ current: initialValue }` 对象，之后向外部返回了这个对象。在 update 阶段就是从 hook 对象的 memoizedState 拿到 `{ current: initialValue }` 对象。

ref 的内部工作流程整体上可以分为两个阶段：

-   render 阶段：标记 Ref flag，对应的内部函数为 markRef
-   commit 阶段：根据 Ref flag，执行 ref 相关的操作，对应的相关函数有 commitDetachRef、commitAttachRef

所谓 ref 的失控，本质上是由于开发者通过 ref 操作了 DOM，而这一行为本身应该由 React 来进行接管的，所以两者之间发生了冲突导致的。

ref 失控的防治主要体现在两个方面：

-   防：控制 ref 失控影响的范围，使 ref 失控造成的影响更容易被定位，例如使用 forwardRef
-   治：从 ref 引用的数据结构入手，尽力避免可能引起失控的操作，例如使用 useImperativeHandle

## 面试题：说一说 React 中的 updateQueue

update 是计算 state 的最小单位，一条 updateQueue 代表由 update 所组成的链表，其中几个重要的属性列举如下：

-   baseState：参与计算的初始 state，update 基于该 state 计算新的 state，可以类比为心智模型中的 master 分支。
-
