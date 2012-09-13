
## 一、关于 Nice：

Nice 是轻量的CSS基础代码库，没有一味的重置，而是 `注重各浏览器基础表现` ，减小开发难度。

鉴于目前90%的reset(样式重置)都是归零的思想，而且在开发过程中我经常发现样式归零存在着潜在的问题，例如我们在全局将strong变成了一个普通标记，在用户可编辑内容区域的strong就不会反应出效果来，用户就会产生很大的疑惑，为什么在编辑器中加粗了字体儿实际上显示出来的效果却没反应呢？！Nice诞生了，只重置掉可能产生问题的样式（body、form的默认margin等），保留和坚持部分浏览器的基础样式，解决部分潜在的问题，提升一些细节体验

Nice会一直围绕3点开发：

    1. 统一的基础表现
    2. 更小的开发难度
    3. 更好的用户体验


## 二、仓库目录结构：
    
    ---
     |---- build/         构建好的发布文件
     |---- src/           源码、测试、实验等开发资源
     |---- readme.md
     |---- license.md


## 三、文件及开发说明：

    reset.css	[精简与高效的重置方案，`推荐尽可能使用normal.css`]
    normal.css	[与reset不同，注重的是各浏览器表现、W3C标准、用户体验以及减小开发难度]
    common.css	[预定义的一些简洁的全局通用class, 按需摘取]
    print.css	[打印的基础样式]
    form.css	[表单的一些基础样式, 按需摘取]
    html5.css	[基于html5的样式修复, 按需摘取]


## 四、意见反馈：

任何批评、问题和意见等，都欢迎联系：[zj86@foxmail.com](mailto:zj86@foxmail.com)


## 五、版权和许可

基于 [MIT License](http://en.wikipedia.org/wiki/MIT_License "WikiPedia 中关于 MIT License 的描述") 开源。版权属于 `niceUE` 所有，作者 [Jony](http://www.niceue.com) 具有作品署名权。
