# hexo-theme-matery

[![HitCount](http://hits.dwyl.io/blinkfox/hexo-theme-matery.svg)](http://hits.dwyl.io/blinkfox/hexo-theme-matery) [![GitHub issues](https://img.shields.io/github/issues/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/issues) [![GitHub license](https://img.shields.io/github/license/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/blob/master/LICENSE) [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg)](http://hexo.io) [![GitHub forks](https://img.shields.io/github/forks/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/network) [![GitHub stars](https://img.shields.io/github/stars/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/stargazers)

[English Document](README.md) | [演示示例](https://blinkfox.github.io/)

> 这是一个采用`Material Design`和响应式设计的 Hexo 博客主题。

## 特性

- 简单漂亮，文章内容美观易读
- [Material Design](https://material.io/)设计
- 响应式设计，博客在桌面端、平板、手机等设备上均能很好的展现
- 每天动态切换`Banner`图片
- 瀑布流式的博客文章列表(文章无特色图片时会有`24`张漂亮的图片代替)
- 时间轴式的归档页
- [Gitment](https://imsun.github.io/gitment/)和[Disqus](https://disqus.com/)评论模块

## 后续开发计划

- [x] 重构标签页为**可分页**
- [ ] 重构归档页为**可分页**
- [ ] 增加分类页
- [ ] 增加关于我页面
- [ ] 集成[Gitalk](https://gitalk.github.io/)
- [ ] 右上角实现`fork me on github`
- [ ] 添加`RSS`
- [ ] 网站底部加上访问量等统计功能
- [ ] 首页设计和添加置顶文章
- [ ] 文章结束后增加**打赏**功能
- [ ] 为博客添加萌萌的**宠物**或者**成长树**等

> 欢迎贡献!

## 下载

当你看到这里的时候，应该已经有一个自己的[Hexo](https://hexo.io/zh-cn/)博客了，如果还没有的话，不妨使用 Hexo 和[Markdown](https://www.appinn.com/markdown/)来写博客和文章。

点击 [这里](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) 下载`master`分支的最新稳定版的代码，解压缩后，将`hexo-theme-matery`的文件夹复制到你 Hexo 的`themes`文件夹中即可。当然你也可以在你的`themes`文件夹下使用`Git clone`命令来下载:

```bash
git clone https://github.com/blinkfox/hexo-theme-matery.git
```

## 配置

### 切换主题

修改 Hexo 根目录下的`_config.yml`的`theme`的值：`theme: hexo-theme-matery`

### 配置tags页

`tags`页是用来展示所有标签的页面，如果在你的博客`source`目录下还没有`tags/index.md`文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "tags"
```

编辑你刚刚新建的页面文件`/source/tags/index.md`，至少需要以下内容：

```yml
title: tags
date: 2018-09-10 18:23:38
type: "tags"
layout: "tags"
```

### 代码高亮

由于 Hexo 自带的代码高亮主题显示不好看，所以主题中使用到了[hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin)的 Hexo 插件来做代码高亮，安装命令如下：

```bash
npm i -S hexo-prism-plugin
```

然后，修改 Hexo 根目录下`_config.yml`文件中`highlight.enable`的值为`false`，并新增`prism`插件相关的配置，主要配置如下：

```yml
highlight:
  enable: false

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: false    # default false
  custom_css:
```

### 搜索

本主题中还使用到了[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)的 Hexo 插件来做内容搜索，安装命令如下：

```bash
npm install hexo-generator-search --save
```

在 Hexo 根目录下的`_config.yml`文件中，新增以下的配置项：

```yml
search:
  path: search.xml
  field: post
```

### 中文链接转拼音

如果你的文章名称是中文的，那么 Hexo 默认生成的永久链接也会有中文，这样不利于`SEO`，且`gitment`评论对中文链接也不支持。我们可以用[hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) Hexo 插件使在生成文章时生成中文拼音的永久链接。

安装命令如下：

```bash
npm i hexo-permalink-pinyin --save
```

在 Hexo 根目录下的`_config.yml`文件中，新增以下的配置项：

```yml
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```

> **注**：除了此插件外，[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)插件也可以生成非中文的链接。

### 修改社交链接

在主题文件的`/layout/_partial/footer.ejs`和`/layout/_partial/mobile-nav.ejs`文件中，你可以找到`social-link`的内容，可以在其中添加你需要的链接地址，增加内容如：

```html
<a href="https://github.com/blinkfox" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
    <i class="fa fa-github fa-lg"></i>
</a>
```

其中，社交图标（如：`fa-github`）你可以在[Font Awesome](https://fontawesome.com/icons)中搜索找到。以下是常用社交图标的标识，供你参考：

- Facebook: `fa-facebook`
- Twitter: `fa-twitter`
- Google-plus: `fa-google-plus`
- Linkedin: `fa-linkedin`
- Tumblr: `fa-tumblr`
- Medium: `fa-medium`
- Slack: `fa-slack`
- 新浪微博: `fa-weibo`
- 微信: `fa-wechat`
- QQ: `fa-qq`

> **注意**: 本主题中使用的`Font Awesome`版本为`4.5.0`。

## 文章Front-matter示例

以下为文章`Front-matter`的示例，所有内容均为**非必填**的。但是，仍然建议至少填写`title`的值，当然最好都填写上这些文章信息。

```yml
---
title: typora-vue-theme主题介绍
date: 2018-09-07 09:25:00
author: 赵奇
img: /source/images/xxx.jpg # 或者:http://xxx.com/xxx.jpg
tags:
  - Typora
  - Markdown
---
```

> **注意**:
> 1. 如果`img`属性不填写的话，文章特色图会根据文章标题的`hashcode`的值取余，然后选取主题中对应的特色图片，从而达到让所有文章都的特色图**各有特色**。
> 2. `date`的值尽量保证每篇文章是唯一的，因为本主题中`Gitment`识别`id`是通过`date`的值来作为唯一标识的。


## 效果截图

### 首页

![首页](http://static.blinkfox.com/hexo-matery-index1.png)

![首页文章列表](http://static.blinkfox.com/hexo-matery-index2.png)

### 文章页

![文章](http://static.blinkfox.com/hexo-matery-post1.png)

![文章后续内容](http://static.blinkfox.com/hexo-matery-post2.png)

### 文章内容图片

![文章内容图片](http://static.blinkfox.com/hexo-matery-image.png)

### 标签页

![标签](http://static.blinkfox.com/hexo-matery-tags1.png)

![选中的标签](http://static.blinkfox.com/hexo-matery-tags2.png)

### 归档页

![归档](http://static.blinkfox.com/hexo-matery-archive.png)

## 自定制修改

在本主题的`_config.yml`中可以修改部分自定义信息，有以下几个部分：

- 菜单
- 首页的励志名言
- `favicon` 和 `Logo`
- `Gitment`评论配置
- 默认特色图的集合。当文章没有设置特色图时，本主题会根据文章标题的`hashcode`值取余，来选择展示对应的特色图

**我认为个人博客应该都有自己的风格和特色**。如果本主题中的诸多功能和主题色彩你不满意，可以在主题中自定义修改，很多更自由的功能和细节点的修改难以在主题的`_config.yml`中完成，需要修改源代码才来完成。以下列出了可能对你有用的地方：

### 修改主题颜色

在主题文件的`/source/css/matery.css`文件中，搜索`.bg-color`来修改背景颜色：

```css
/* 整体背景颜色，包括导航、移动端的导航、页尾、标签页等的背景颜色. */
.bg-color {
    background-color: #0f9d58 !important;
}

/* 和背景颜色相同的文字颜色，目前仅在首页一个地方使用到，你也可以将此样式应用到其他地方. */
.text-color {
    color: #0f9d58 !important;
}

@-webkit-keyframes rainbow {
   /* 动态切换背景颜色. */
}

@keyframes rainbow {
    /* 动态切换背景颜色. */
}
```

### 修改banner图和文章特色图

你可以直接在`/source/medias/banner`文件夹中更换你喜欢的`banner`图片，主题代码中是每天动态切换一张，只需`7`张即可。如果你会`JavaScript`代码，可以修改成你自己喜欢切换逻辑，如：随机切换等，`banner`切换的代码位置在`/layout/_partial/bg-cover.ejs`文件的`<script></script>`代码中：

```javascript
$('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
```

在`/source/medias/featureimages`文件夹中默认有24张特色图片，你可以再增加或者减少，并需要在`_config.yml`做同步修改。