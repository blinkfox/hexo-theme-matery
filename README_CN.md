# hexo-theme-matery

[![HitCount](http://hits.dwyl.io/blinkfox/hexo-theme-matery.svg)](http://hits.dwyl.io/blinkfox/hexo-theme-matery) [![Gitter](https://img.shields.io/gitter/room/blinkfox/hexo-theme-matery.svg)](https://gitter.im/hexo-theme-matery/Lobby?utm_source=badge) [![GitHub issues](https://img.shields.io/github/issues/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/issues) [![GitHub license](https://img.shields.io/github/license/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/blob/master/LICENSE) [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg)](http://hexo.io) [![GitHub forks](https://img.shields.io/github/forks/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/network) [![GitHub stars](https://img.shields.io/github/stars/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/stargazers)

[🇺🇸English Document](README.md) | [国内访问示例 (http://blinkfox.com)](http://blinkfox.com) | [Github 部署演示示例 (https://blinkfox.github.io)](https://blinkfox.github.io) | QQ 交流群1（已满）: [`926552981`](https://jq.qq.com/?_wv=1027&k=5zMDYHT) | QQ 交流群2（推荐）: [`971887688`](https://jq.qq.com/?_wv=1027&k=53q2Ayp)

> 这是一个采用 `Material Design` 和响应式设计的 Hexo 博客主题。

## 特性

- 简单漂亮，文章内容美观易读
- [Material Design](https://material.io/) 设计
- 响应式设计，博客在桌面端、平板、手机等设备上均能很好的展现
- 首页轮播文章及每天动态切换 `Banner` 图片
- 瀑布流式的博客文章列表（文章无特色图片时会有 `24` 张漂亮的图片代替）
- 时间轴式的归档页
- **词云**的标签页和**雷达图**的分类页
- 丰富的关于我页面（包括关于我、文章统计图、我的项目、我的技能、相册等）
- 可自定义的数据的友情链接页面
- 支持文章置顶和文章打赏
- 支持 `MathJax`
- `TOC` 目录
- 可设置复制文章内容时追加版权信息
- 可设置阅读文章时做密码验证
- [Gitalk](https://gitalk.github.io/)、[Gitment](https://imsun.github.io/gitment/)、[Valine](https://valine.js.org/) 和 [Disqus](https://disqus.com/) 评论模块（推荐使用 `Gitalk`）
- 集成了[不蒜子统计](http://busuanzi.ibruce.info/)、谷歌分析（`Google Analytics`）和文章字数统计等功能
- 支持在首页的音乐播放和视频播放功能
- 支持`emoji`表情，用`markdown emoji`语法书写直接生成对应的能**跳跃**的表情。
- 支持 [DaoVoice](http://www.daovoice.io/)、[Tidio](https://www.tidio.com/) 在线聊天功能。

## 贡献者

感谢下面列出的贡献者，没有他们，hexo-theme-matery 不会这么完美。

- [@HarborZeng](https://github.com/HarborZeng)
- [@shw2018](https://github.com/shw2018)
- [@L1cardo](https://github.com/L1cardo)
- [@Five-great](https://github.com/Five-great)

## 下载

当你看到这里的时候，应该已经有一个自己的 [Hexo](https://hexo.io/zh-cn/) 博客了。如果还没有的话，不妨使用 Hexo 和 [Markdown](https://www.appinn.com/markdown/) 来写博客和文章。

点击 [这里](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) 下载 `master` 分支的最新稳定版的代码，解压缩后，将 `hexo-theme-matery` 的文件夹复制到你 Hexo 的 `themes` 文件夹中即可。

当然你也可以在你的 `themes` 文件夹下使用 `Git clone` 命令来下载:

```bash
git clone https://github.com/blinkfox/hexo-theme-matery.git
```

## 配置

### 切换主题

修改 Hexo 根目录下的 `_config.yml` 的  `theme` 的值：`theme: hexo-theme-matery`

#### `_config.yml` 文件的其它修改建议:

- 请修改 `_config.yml` 的 `url` 的值为你的网站主 `URL`（如：`http://xxx.github.io`）。
- 建议修改两个 `per_page` 的分页条数值为 `6` 的倍数，如：`12`、`18` 等，这样文章列表在各个屏幕下都能较好的显示。
- 如果你是中文用户，则建议修改 `language` 的值为 `zh-CN`。

### 新建分类 categories 页

`categories` 页是用来展示所有分类的页面，如果在你的博客 `source` 目录下还没有 `categories/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "categories"
```

编辑你刚刚新建的页面文件 `/source/categories/index.md`，至少需要以下内容：

```yaml
---
title: categories
date: 2018-09-30 17:25:30
type: "categories"
layout: "categories"
---
```

### 新建标签 tags 页

`tags` 页是用来展示所有标签的页面，如果在你的博客 `source` 目录下还没有 `tags/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "tags"
```

编辑你刚刚新建的页面文件 `/source/tags/index.md`，至少需要以下内容：

```yaml
---
title: tags
date: 2018-09-30 18:23:38
type: "tags"
layout: "tags"
---
```

### 新建关于我 about 页

`about` 页是用来展示**关于我和我的博客**信息的页面，如果在你的博客 `source` 目录下还没有 `about/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "about"
```

编辑你刚刚新建的页面文件 `/source/about/index.md`，至少需要以下内容：

```yaml
---
title: about
date: 2018-09-30 17:25:30
type: "about"
layout: "about"
---
```

### 新建留言板 contact 页（可选的）

`contact` 页是用来展示**留言板**信息的页面，如果在你的博客 `source` 目录下还没有 `contact/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "contact"
```

编辑你刚刚新建的页面文件 `/source/contact/index.md`，至少需要以下内容：

```yaml
---
title: contact
date: 2018-09-30 17:25:30
type: "contact"
layout: "contact"
---
```

> **注**：本留言板功能依赖于第三方评论系统，请**激活**你的评论系统才有效果。并且在主题的 `_config.yml` 文件中，第 `19` 至 `21` 行的“**菜单**”配置，取消关于留言板的注释即可。

### 新建友情链接 friends 页（可选的）

`friends` 页是用来展示**友情链接**信息的页面，如果在你的博客 `source` 目录下还没有 `friends/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "friends"
```

编辑你刚刚新建的页面文件 `/source/friends/index.md`，至少需要以下内容：

```yaml
---
title: friends
date: 2018-12-12 21:25:30
type: "friends"
layout: "friends"
---
```

同时，在你的博客 `source` 目录下新建 `_data` 目录，在 `_data` 目录中新建 `friends.json` 文件，文件内容如下所示：

```json
[{
    "avatar": "http://image.luokangyuan.com/1_qq_27922023.jpg",
    "name": "码酱",
    "introduction": "我不是大佬，只是在追寻大佬的脚步",
    "url": "http://luokangyuan.com/",
    "title": "前去学习"
}, {
    "avatar": "http://image.luokangyuan.com/4027734.jpeg",
    "name": "闪烁之狐",
    "introduction": "编程界大佬，技术牛，人还特别好，不懂的都可以请教大佬",
    "url": "https://blinkfox.github.io/",
    "title": "前去学习"
}, {
    "avatar": "http://image.luokangyuan.com/avatar.jpg",
    "name": "ja_rome",
    "introduction": "平凡的脚步也可以走出伟大的行程",
    "url": "https://me.csdn.net/jlh912008548",
    "title": "前去学习"
}]
```
### 新建 404 页

如果在你的博客 `source` 目录下还没有 `404.md` 文件，那么你就需要新建一个

编辑你刚刚新建的页面文件 `/source/404.md`，至少需要以下内容：

```yaml
---
title: 404
date: 2018-09-30 17:25:30
type: "404"
layout: "404"
description: "Oops～，我崩溃了！找不到你想要的页面 :("
---
```

### 菜单导航配置

#### 配置基本菜单导航的名称、路径url和图标icon.

1.菜单导航名称可以是中文也可以是英文(如：`Index`或`主页`) 
2.图标icon 可以在[Font Awesome](https://fontawesome.com/icons) 中查找   

```yaml
menu:
  Index:
    url: /
    icon: fas fa-home
  Tags:
    url: /tags
    icon: fas fa-tags
  Categories:
    url: /categories
    icon: fas fa-bookmark
  Archives:
    url: /archives
    icon: fas fa-archive
  About:
    url: /about
    icon: fas fa-user-circle
  Friends:
    url: /friends
    icon: fas fa-address-book
```

#### 二级菜单配置方法
如果你需要二级菜单则可以在原基本菜单导航的基础上如下操作     
1.在需要添加二级菜单的一级菜单下添加`children`关键字(如:`About`菜单下添加`children`)     
2.在`children`下创建二级菜单的 名称name,路径url和图标icon.      
3.注意每个二级菜单模块前要加 `-`.     
4.注意缩进格式  

```yaml
menu:
  Index:
    url: /
    icon: fas fa-home
  Tags:
    url: /tags
    icon: fas fa-tags
  Categories:
    url: /categories
    icon: fas fa-bookmark
  Archives:
    url: /archives
    icon: fas fa-archive
  About:
    url: /about
    icon: fas fa-user-circle-o
  Friends:
    url: /friends
    icon: fas fa-address-book
  Medias:
    icon: fas fa-list
    children:
      - name: Musics
        url: /musics
        icon: fas fa-music
      - name: Movies
        url: /movies
        icon: fas fa-film
      - name: Books
        url: /books
        icon: fas fa-book
      - name: Galleries
        url: /galleries
        icon: fas fa-image
```

执行 `hexo clean && hexo g` 重新生成博客文件，然后就可以在文章中对应位置看到你用`emoji`语法写的表情了。

### 代码高亮

由于 Hexo 自带的代码高亮主题显示不好看，所以主题中使用到了 [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) 的 Hexo 插件来做代码高亮，安装命令如下：

```bash
npm i -S hexo-prism-plugin
```

然后，修改 Hexo 根目录下 `_config.yml` 文件中 `highlight.enable` 的值为 `false`，并新增 `prism` 插件相关的配置，主要配置如下：

```yaml
highlight:
  enable: false

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: false    # default false
  custom_css:
```

### 搜索

本主题中还使用到了 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) 的 Hexo 插件来做内容搜索，安装命令如下：

```bash
npm install hexo-generator-search --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
search:
  path: search.xml
  field: post
```

### 中文链接转拼音（建议安装）

如果你的文章名称是中文的，那么 Hexo 默认生成的永久链接也会有中文，这样不利于 `SEO`，且 `gitment` 评论对中文链接也不支持。我们可以用 [hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) Hexo 插件使在生成文章时生成中文拼音的永久链接。

安装命令如下：

```bash
npm i hexo-permalink-pinyin --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```

> **注**：除了此插件外，[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) 插件也可以生成非中文的链接。

### 文章字数统计插件（建议安装）

如果你想要在文章中显示文章字数、阅读时长信息，可以安装 [hexo-wordcount](https://github.com/willin/hexo-wordcount)插件。

安装命令如下：

```bash
npm i --save hexo-wordcount
```

然后只需在本主题下的 `_config.yml` 文件中，将各个文章字数相关的配置激活即可：

```yaml
postInfo:
  date: true
  update: false
  wordCount: false # 设置文章字数统计为 true.
  totalCount: false # 设置站点文章总字数统计为 true.
  min2read: false # 阅读时长.
  readCount: false # 阅读次数.
```

### 添加emoji表情支持（可选的）

本主题新增了对`emoji`表情的支持，使用到了 [hexo-filter-github-emojis](https://npm.taobao.org/package/hexo-filter-github-emojis) 的 Hexo 插件来支持 `emoji`表情的生成，把对应的`markdown emoji`语法（`::`,例如：`:smile:`）转变成会跳跃的`emoji`表情，安装命令如下：

```bash
npm install hexo-filter-github-emojis --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:
```

### 添加 RSS 订阅支持（可选的）

本主题中还使用到了 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 的 Hexo 插件来做 `RSS`，安装命令如下：

```bash
npm install hexo-generator-feed --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
```

执行 `hexo clean && hexo g` 重新生成博客文件，然后在 `public` 文件夹中即可看到 `atom.xml` 文件，说明你已经安装成功了。

### 添加 [DaoVoice](http://www.daovoice.io/) 在线聊天功能（可选的）

前往 [DaoVoice](http://www.daovoice.io/) 官网注册并且获取 `app_id`，并将 `app_id` 填入主题的 `_config.yml` 文件中。

### 添加 [Tidio](https://www.tidio.com/) 在线聊天功能（可选的）

前往 [Tidio](https://www.tidio.com/) 官网注册并且获取 `Public Key`，并将 `Public Key` 填入主题的 `_config.yml` 文件中。

### 修改页脚

页脚信息可能需要做定制化修改，而且它不便于做成配置信息，所以可能需要你自己去再修改和加工。修改的地方在主题文件的 `/layout/_partial/footer.ejs` 文件中，包括站点、使用的主题、访问量等。

### 修改社交链接

在主题的 `_config.yml` 文件中，默认支持 `QQ`、`GitHub` 和邮箱等的配置，你可以在主题文件的 `/layout/_partial/social-link.ejs` 文件中，新增、修改你需要的社交链接地址，增加链接可参考如下代码：

```html
<% if (theme.socialLink.github) { %>
    <a href="<%= theme.socialLink.github %>" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
        <i class="fab fa-github"></i>
    </a>
<% } %>
```

其中，社交图标（如：`fa-github`）你可以在 [Font Awesome](https://fontawesome.com/icons) 中搜索找到。以下是常用社交图标的标识，供你参考：

- Facebook: `fab fa-facebook`
- Twitter: `fab fa-twitter`
- Google-plus: `fab fa-google-plus`
- Linkedin: `fab fa-linkedin`
- Tumblr: `fab fa-tumblr`
- Medium: `fab fa-medium`
- Slack: `fab fa-slack`
- Sina Weibo: `fab fa-weibo`
- Wechat: `fab fa-weixin`
- QQ: `fab fa-qq`
- Zhihu: `fab fa-zhihu`

> **注意**: 本主题中使用的 `Font Awesome` 版本为 `5.11.0`。

### 修改打赏的二维码图片

在主题文件的 `source/medias/reward` 文件中，你可以替换成你的的微信和支付宝的打赏二维码图片。

### 配置音乐播放器（可选的）

要支持音乐播放，在主题的 `_config.yml` 配置文件中激活music配置即可：

```yaml
# 是否在首页显示音乐
music:
  enable: true
  title:     	    # 非吸底模式有效
    enable: true
    show: 听听音乐
  server: netease   # require music platform: netease, tencent, kugou, xiami, baidu
  type: playlist    # require song, playlist, album, search, artist
  id: 503838841     # require song id / playlist id / album id / search keyword
  fixed: false      # 开启吸底模式
  autoplay: false   # 是否自动播放
  theme: '#42b983'
  loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true  # 列表默认折叠
```

> `server`可选`netease`（网易云音乐），`tencent`（QQ音乐），`kugou`（酷狗音乐），`xiami`（虾米音乐），
>
> `baidu`（百度音乐）。
>
> `type`可选`song`（歌曲），`playlist`（歌单），`album`（专辑），`search`（搜索关键字），`artist`（歌手）
>
> `id`获取方法示例: 浏览器打开网易云音乐，点击我喜欢的音乐歌单，浏览器地址栏后面会有一串数字，`playlist`的`id`
>
> 即为这串数字。



## 文章 Front-matter 介绍

### Front-matter 选项详解

`Front-matter` 选项中的所有内容均为**非必填**的。但我仍然建议至少填写 `title` 和 `date` 的值。

| 配置选项   | 默认值                      | 描述                                                         |
| ---------- | --------------------------- | ------------------------------------------------------------ |
| title      | `Markdown` 的文件标题        | 文章标题，强烈建议填写此选项                                 |
| date       | 文件创建时的日期时间          | 发布时间，强烈建议填写此选项，且最好保证全局唯一             |
| author     | 根 `_config.yml` 中的 `author` | 文章作者                                                     |
| img        | `featureImages` 中的某个值   | 文章特征图，推荐使用图床(腾讯云、七牛云、又拍云等)来做图片的路径.如: `http://xxx.com/xxx.jpg` |
| top        | `true`                      | 推荐文章（文章是否置顶），如果 `top` 值为 `true`，则会作为首页推荐文章 |
| cover      | `false`                     | `v1.0.2`版本新增，表示该文章是否需要加入到首页轮播封面中 |
| coverImg   | 无                          | `v1.0.2`版本新增，表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片 |
| password   | 无                          | 文章阅读密码，如果要对文章设置阅读验证密码的话，就可以设置 `password` 的值，该值必须是用 `SHA256` 加密后的密码，防止被他人识破。前提是在主题的 `config.yml` 中激活了 `verifyPassword` 选项 |
| toc        | `true`                      | 是否开启 TOC，可以针对某篇文章单独关闭 TOC 的功能。前提是在主题的 `config.yml` 中激活了 `toc` 选项 |
| mathjax    | `false`                     | 是否开启数学公式支持 ，本文章是否开启 `mathjax`，且需要在主题的 `_config.yml` 文件中也需要开启才行 |
| summary    | 无                          | 文章摘要，自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要 |
| categories | 无                          | 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类 |
| tags       | 无                          | 文章标签，一篇文章可以多个标签                              |
| keywords   | 文章标题                     | 文章关键字，SEO 时需要                              |
| reprintPolicy | cc_by                    | 文章转载规则， 可以是 cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint 或 pay 中的一个 |

> **注意**:
> 1. 如果 `img` 属性不填写的话，文章特色图会根据文章标题的 `hashcode` 的值取余，然后选取主题中对应的特色图片，从而达到让所有文章都的特色图**各有特色**。
> 2. `date` 的值尽量保证每篇文章是唯一的，因为本主题中 `Gitalk` 和 `Gitment` 识别 `id` 是通过 `date` 的值来作为唯一标识的。
> 3. 如果要对文章设置阅读验证密码的功能，不仅要在 Front-matter 中设置采用了 SHA256 加密的 password 的值，还需要在主题的 `_config.yml` 中激活了配置。有些在线的 SHA256 加密的地址，可供你使用：[开源中国在线工具](http://tool.oschina.net/encrypt?type=2)、[chahuo](http://encode.chahuo.com/)、[站长工具](http://tool.chinaz.com/tools/hash.aspx)。
> 4. 您可以在文章md文件的 front-matter 中指定 reprintPolicy 来给单个文章配置转载规则

以下为文章的 `Front-matter` 示例。

### 最简示例

```yaml
---
title: typora-vue-theme主题介绍
date: 2018-09-07 09:25:00
---
```

### 最全示例

```yaml
---
title: typora-vue-theme主题介绍
date: 2018-09-07 09:25:00
author: 赵奇
img: /source/images/xxx.jpg
top: true
cover: true
coverImg: /images/1.jpg
password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: false
mathjax: false
summary: 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
categories: Markdown
tags:
  - Typora
  - Markdown
---
```

## 效果截图

![首页](http://static.blinkfox.com/matery-20181202-1.png)

![首页推荐文章](http://static.blinkfox.com/matery-20181202-2.png)

![首页文章列表](http://static.blinkfox.com/matery-20181202-3.png)

![首页文章列表](http://static.blinkfox.com/matery-20181202-7.png)

![首页文章列表](http://static.blinkfox.com/matery-20181202-8.png)

## 自定制修改

在本主题的 `_config.yml` 中可以修改部分自定义信息，有以下几个部分：

- 菜单
- 我的梦想
- 首页的音乐播放器和视频播放器配置
- 是否显示推荐文章名称和按钮配置
- `favicon` 和 `Logo`
- 个人信息
- TOC 目录
- 文章打赏信息
- 复制文章内容时追加版权信息
- MathJax
- 文章字数统计、阅读时长
- 点击页面的'爱心'效果
- 我的项目
- 我的技能
- 我的相册
- `Gitalk`、`Gitment`、`Valine` 和 `disqus` 评论配置
- [不蒜子统计](http://busuanzi.ibruce.info/)和谷歌分析（`Google Analytics`）
- 默认特色图的集合。当文章没有设置特色图时，本主题会根据文章标题的 `hashcode` 值取余，来选择展示对应的特色图

**我认为个人博客应该都有自己的风格和特色**。如果本主题中的诸多功能和主题色彩你不满意，可以在主题中自定义修改，很多更自由的功能和细节点的修改难以在主题的 `_config.yml` 中完成，需要修改源代码才来完成。以下列出了可能对你有用的地方：

### 修改主题颜色

在主题文件的 `/source/css/matery.css` 文件中，搜索 `.bg-color` 来修改背景颜色：

```css
/* 整体背景颜色，包括导航、移动端的导航、页尾、标签页等的背景颜色. */
.bg-color {
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

@-webkit-keyframes rainbow {
   /* 动态切换背景颜色. */
}

@keyframes rainbow {
    /* 动态切换背景颜色. */
}
```

### 修改 banner 图和文章特色图

你可以直接在 `/source/medias/banner` 文件夹中更换你喜欢的 `banner` 图片，主题代码中是每天动态切换一张，只需 `7` 张即可。如果你会 `JavaScript` 代码，可以修改成你自己喜欢切换逻辑，如：随机切换等，`banner` 切换的代码位置在 `/layout/_partial/bg-cover-content.ejs` 文件的 `<script></script>` 代码中：

```javascript
$('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
```

在 `/source/medias/featureimages` 文件夹中默认有 24 张特色图片，你可以再增加或者减少，并需要在 `_config.yml` 做同步修改。

## 版本记录

- v1.3.1
  - 新增了 `kbd` 样式；
  - 修复了子目录部署时词云中链接有误的问题；
  - 移除了 TOC 中的竖线；
  - 修复了首页 icon 图标中的 tooltip 不显示的问题；
  - 修复生成静态文件时，每天切换 banner 不生效的问题；
  - 更新了 `miniValine` 中的一些配置；
- v1.3.0
  - 新增了支持子目录部署的功能（如：`Gitee`）；
  - 新增了 `MiniValine` 评论系统；
  - 新增了 `jsdelivr` 的支持；
  - 修复了诸多发现的 bug；
- v1.2.2
  - 新增了自定义文章 `keywords` 的功能；
  - 新增静态彩带点击切换的功能和配置；
  - 将文章字数统计、彩带和站点运行时间等功能默认设置为 `false`；
  - 修改了文章的 `description` 的 meta 属性优先读取文章的 `summary` 属性；
  - 修改了文章标题的 HTML 标签，从 `div` 改成了 `h1` 标题；
  - 修改了页脚年份显示不正确的问题；
  - 去掉了站点运行时间中多余的 `setTimeout` 代码；
- v1.2.1
  - 新增了 TOC 的展开目录层级设置和滚动条功能，防止目录较多的时候目录溢出；
  - 修改了首页的展示方式为以前的模式；
  - 修复首页按钮没有边框的问题；
  - 修复了音乐及吸底模式、视频、推荐文章等不激活时仍然生成首页卡片的问题；
  - 修复 wordCount 插件未安装的问题，修改了部分配置；
  - 修复音乐的 JSON 配置中有单引号的情况页面不显示的音乐的问题
  - 修复标签云在Hexo4.0下链接失效的问题；
- v1.2.0
  - 新增了 [DaoVoice](http://www.daovoice.io/)、[Tidio](https://www.tidio.com/) 的在线聊天功能；
  - 新增了两级菜单的功能；
  - 新增了打字效果的副标题；
  - 新增了网页内容预加载的功能；
  - 新增了首页 banner 是否每日切换的配置功能；
  - 新增了显示 ICP 备案信息的功能，默认未开启；
  - 新增了百度分析的配置；
  - 新增了代码块的语言显示、一键复制、显示行号等功能；
  - 新增了首页轮播图和推荐文章可自定义配置的功能；
  - 新增了文章页面显示更新日期；
  - 新增了转载规则的图标；
  - 修改了分享的布局和显示方式；
  - 升级更新了部分依赖库的版本；
  - 其他细节修改和优化；
- v1.1.0
  - 新增了 `emoji` 的支持；
  - 新增了站点运行时间统计及配置；
  - 新增了留言板的功能,默认未开启；
  - 新增了 `Twitter`、`Facebook`、知乎的社交链接；
  - 更新了 `Valine` 的版本为最新版；
  - 其他小细节的修改；
- v1.0.4
  - 新增了能为每篇文章都自定义转载规则的功能；
  - 修复上一页、下一页的自定义 `summary` 不显示的问题；
  - 修复了友情链接显示错位的问题，改为了瀑布流的布局方式；
  - 其他小细节 bug 的修改；
- v1.0.3
  - 新增了`TOC`展开、收缩的按钮和相关配置，默认显示此按钮；
- v1.0.2
  - 升级了 [Materialize](https://materializecss.com/) 框架版本为`1.0.0`，重构和修改了升级过程中的部分文件或问题；
  - 新增了首页封面的全屏轮播特效，可以将更重要的文章设置到首页轮播中；
  - 修复首页第一个按钮是中文的问题
  - 修复了 iPhone 上点击搜索输入获取焦点的问题；
  - 修复了 iPhone 上输入框获取焦点后页面放大的问题；
  - 修复一些文章或 UI 显示问题；
- v1.0.1
  - 调整 `css`、`js` 的文件请求路径在主题的`_config.yml`中配置，便于你更快捷的配置自己的 CDN；
  - 新增代码是否折行为可配置，默认为折行；
  - 默认激活 `TOC` 功能，并新增为某篇文章关闭 `TOC` 的 `Front-matter` 配置选项；
  - 修复文章滚动时，高亮的目录选项不准确的问题；
  - `IOS`下移除搜索框自动获得焦点属性，防止自动获得焦点后导致视图上移；
- v1.0.0
  - 新增了所有基础功能；
