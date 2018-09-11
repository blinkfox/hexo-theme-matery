# hexo-theme-matery

> 这是一个采用`Material Design`和响应式设计的 Hexo 博客主题。

## 特性

- 简单漂亮，文章内容美观易读
- [Material Design](https://material.io/)设计
- 响应式设计，在桌面端、平板、手机等设备上均能很好的展现
- 每天动态切换`Banner`图片
- 瀑布流式的博客文章列表(文章无特色图片时会有`24`张漂亮的图片代替)
- 时间轴式的归档页

## 下载

当你看到这里的时候，应该已经有一个自己的[Hexo](https://hexo.io/zh-cn/)博客了，如果还没有的话，不妨使用 Hexo 和[Markdown](https://www.appinn.com/markdown/)来写博客和文章。

点击[这里](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/develop.zip)下载最新稳定版的代码，解压缩后，将`hexo-theme-matery`的文件夹复制到你 Hexo 的`themes`文件夹中即可。当然你也可以在你的`themes`文件夹下使用`Git clone`命令来下载:

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