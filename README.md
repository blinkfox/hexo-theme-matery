# hexo-theme-matery

[![HitCount](http://hits.dwyl.io/blinkfox/hexo-theme-matery.svg)](http://hits.dwyl.io/blinkfox/hexo-theme-matery) [![Gitter](https://img.shields.io/gitter/room/blinkfox/hexo-theme-matery.svg)](https://gitter.im/hexo-theme-matery/Lobby?utm_source=badge) [![GitHub issues](https://img.shields.io/github/issues/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/issues) [![GitHub license](https://img.shields.io/github/license/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/blob/master/LICENSE) [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg)](http://hexo.io) [![GitHub forks](https://img.shields.io/github/forks/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/network) [![GitHub stars](https://img.shields.io/github/stars/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/stargazers)

[中文说明](README_CN.md) | [DEMO](https://blinkfox.github.io/)

> This is a Hexo blog theme with 'Material Design' and responsive design.

## Features

- Simple and beautiful, and post is Beautiful and readable.
- [Material Design](https://material.io/).
- Responsive design,which can be displayed well on desktop, tablet, mobile phone, etc.
- Home page carousel posts and changing 'banner' picture dynamically everday.
- Blog posts list with waterflow(There will be 24 images if the articl dosn't have  featured pictures).
- Archive page with timeline.
- Tags page of the **word cloud** and categories page of the **radar chart**
- Rich 'About' page (including about me, posts charts, my projects, my skills, gallery etc.)
- Friendly link page for customizable data
- Support post topping and rewards
- Support `MathJax`
- TOC
- Can be set append the copyright information when copying the content of the post
- Can be set to do password verification when reading a post
- Comment module of [Gitalk](https://gitalk.github.io/), [Gitment](https://imsun.github.io/gitment/), [Valine](https://valine.js.org/) and [Disqus](https://disqus.com/).(Gitalk is recommended)
- Integrated [Busuanzi Statistics](http://busuanzi.ibruce.info/), `Google Analytics` and post word count statistics.
- Support music playback and video playback on the homepage
- Support the `emoji` emoticon and use the `markdown emoji` grammar to directly generate the corresponding emoticon.

## Contributor

Thanks to these contributors, without whom, hexo-theme-matery won't be this perfect.

- [@HarborZeng](https://github.com/HarborZeng)
- [@shw2018](https://github.com/shw2018)

## Download

You should have a [Hexo](https://hexo.io/zh-cn/) blog when you see it here.If not,try to use the hexo and [Markdown](https://www.appinn.com/markdown/) to write your blog and post.
Click [here](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) to download master branch of the last stable version of the code.After decompressing,copy the `hexo-theme-matery` folder
to your `themes` folder of your Hexo.Of course,you can uer `Git clone` to download in your `themes` folder.

```bash
git clone https://github.com/blinkfox/hexo-theme-matery.git
```

## Configuration

### Modify theme

Modify the value of `theme` in `_config.yml` of Hexo's root folder: `theme: hexo-theme-matery`.

#### Suggestions for other changes to the `_config.yml`:
 
- Please modify the value of `url` of `_config.yml` to your website's main `URL` (eg `http://xxx.github.io`).
- Recommended modify the value of the two 'per_page` to be a multiple of `6`, such as: `12`, `18`, etc. so that the posts list can be displayed well under each screen.
- If you are a Chinese user, it is recommended to change the value of `language` to `zh-CN`.

### new categories page

`categories` page is to show all of categories. If the `source` directory of your blog doesn't have `categories/index.md` file, you need to new one like this:

```bash
hexo new page "categories"
```

to edit your new page files`/source/categories/index.md`, you need somethings as follows:

```yaml
---
title: categories
date: 2018-09-30 17:25:30
type: "categories"
layout: "categories"
---
```

### new tags page

`tags` page is to show all of tags. If the `source` directory of your blog doesn't have `tags/index.md` file,you need to new one like this:

```bash
hexo new page "tags"
```

to edit your new page files`/source/tags/index.md`, you need somethings as follows:

```yaml
---
title: tags
date: 2018-09-10 18:23:38
type: "tags"
layout: "tags"
---
```

### new about page

`about` page is to show my blog and myself information. If the `source` directory of your blog doesn't have `about/index.md` file, you need to new one like this:

```bash
hexo new page "about"
```

to edit your new page files`/source/about/index.md`, you need somethings as follows:

```yaml
---
title: about
date: 2018-09-30 17:25:30
type: "about"
layout: "about"
---
```

### new friends link page (Optional)

The `friends` page is a page for displaying **Friendly Links** information. If you don't have a `friends/index.md` file in your blog's `source` directory, then you need to create a new one. The command is as follows:

```bash
hexo new page "friends"
```

Edit the file `/source/friends/index.md` you just created, at least you need the following:

```yaml
---
title: friends
date: 2018-12-12 21:25:30
type: "friends"
layout: "friends"
---
```

Also, create a new `_data` directory in your blog's `source` directory and a new `friends.json` file in the `_data` directory. The contents of the file are as follows:

```json
[{
    "avatar": "http://image.luokangyuan.com/1_qq_27922023.jpg",
    "name": "MaJang",
    "introduction": "I am not a master, just looking for the master's footsteps.",
    "url": "http://luokangyuan.com/",
    "title": "Read More"
}, {
    "avatar": "http://image.luokangyuan.com/4027734.jpeg",
    "name": "Blinkfox",
    "introduction": "Hello, I'm blinkfox, I like programming.",
    "url": "https://blinkfox.github.io/",
    "title": "Visit Blog"
}, {
    "avatar": "http://image.luokangyuan.com/avatar.jpg",
    "name": "ja_rome",
    "introduction": "Ordinary steps can also go out of the great journey.",
    "url": "ttps://me.csdn.net/jlh912008548",
    "title": "Read More"
}]
```

### Add emoji support (Optional)

This theme adds support for the `emoji` emoticon, using the Hexo plugin for [hexo-filter-github-emojis] (https://npm.taobao.org/package/hexo-filter-github-emojis) to support The generation of the `emoji` expression, the corresponding `markdown emoji` syntax (`::`, for example: `:smile:`) is converted into a `emoji` expression that jumps. The installation command is as follows:

```bash
npm install hexo-filter-github-emojis --save
```

Add configuration of `_config.yml` file in Hexo root folder as follows：

```yaml
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:
```

Execute `hexo clean && hexo g` to regenerate the blog file, and then  you can see the expression you wrote in the `emoji` grammar in the corresponding position in the article.


### Code highlight

Hexo theme uses Hexo's plugin[hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) to show the code highlight instead of its own theme.The Installation commands are as follows:

```bash
npm i -S hexo-prism-plugin
```

Then,modify the value of `highlight.enable` to `false` in `_config.yml` file of Hexo root folder，and add the configuration of `prism` plugin as follows:

```yaml
highlight:
  enable: false

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: false    # default false
  custom_css:
```

### Search

The theme uses the Hexo plugin[hexo-generator-search](https://github.com/wzpan/hexo-generator-search) to search the content,and the Installation commands are as follows:

```bash
npm install hexo-generator-search --save
```

Add configuration of `_config.yml` file in Hexo root folder as follows：

```yaml
search:
  path: search.xml
  field: post
```

### Translate Chinese Link to Pinyin (Optional)

Defualt permalinks of Hexo will include Chinese if your atrticle's title is Chinese.But it's adverse to `SEO`,and `gitment` comments don't suport Chinese Link as well.We can use the [hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) of Hexo plugin to generate permalinks of Chinese Pinyin  when generating posts.

Installation commands are as follows：

```bash
npm i hexo-permalink-pinyin --save
```

Add such configurations in `_config.yml` file of  Hexo:

```yaml
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```

> **Note*:[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) can genarate non-Chinese link in addtion to this plugin.

### Post word count statistics plugin (Optional)

If you want to display the post word count and reading time information in the post detail page, you can install the [hexo-wordcount](https://github.com/willin/hexo-wordcount) plugin.

Installation commands are as follows：

```bash
npm i --save hexo-wordcount
```

Then just activate the following configuration items in the theme `_config.yml` file:

```yaml
wordCount:
  enable: false # Set this value to true.
  postWordCount: true
  min2read: true
  totalCount: true
```

### Add RSS feed support (Optional)

The theme uses the Hexo plugin[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) to support `RSS` feed , and the Installation commands are as follows:

```bash
npm install hexo-generator-feed --save
```

Add configuration of `_config.yml` file in Hexo root folder as follows：

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

Execute `hexo clean && hexo g` to regenerate the blog file, and then you can see the `atom.xml` file in the `public` folder, indicating that you have successfully installed.

### Modify website footer

Website footer may need to be customized, and it is not convenient to make configuration information, So need to modify and process it by yourself. The changes are in the `/layout/_partial/footer.ejs` file, including the site, the theme used, the amount of traffic, and so on.

### Modify social links

In the theme `_config.yml` file, the configuration of `QQ`, `GitHub` and mailbox is supported by default. In the `/layout/_partial/social-link.ejs` file of the theme, you can add or modify the social link address as you need. To add a link, please refer to the following code:

```html
<a href="https://github.com/blinkfox" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
    <i class="fa fa-github"></i>
</a>
```

You can search social icon such as `fa-github` in [Font Awesome](https://fontawesome.com/icons).There are common social icons you can reference:

- Facebook: `fa-facebook`
- Twitter: `fa-twitter`
- Google-plus: `fa-google-plus`
- Linkedin: `fa-linkedin`
- Tumblr: `fa-tumblr`
- Medium: `fa-medium`
- Slack: `fa-slack`
- Sina Weibo: `fa-weibo`
- Wechat: `fa-wechat`
- QQ: `fa-qq`

> **Note**: The version of `Font Awesome` is `4.7.0`.

### Configure music player (optional)

To support music playing, you must activate the file of music playing configuration and music data.

First, create a new `musics.json` file in the `_data` directory (new if you don't have one) of your blog's `source` directory. The contents of the file are as follows:

```json
[{
	"name": "五月雨变奏电音",
	"artist": "AnimeVibe",
	"url": "http://xxx.com/music1.mp3",
	"cover": "http://xxx.com/music-cover1.png"
}, {
	"name": "Take me hand",
	"artist": "DAISHI DANCE,Cecile Corbel",
	"url": "/medias/music/music2.mp3",
	"cover": "/medias/music/cover2.png"
}, {
	"name": "Shape of You",
	"artist": "J.Fla",
	"url": "http://xxx.com/music3.mp3",
	"cover": "http://xxx.com/music-cover3.png"
}]
```

> **Note**: The properties in the above JSON: `name`, `artist`, `url`, `cover` indicate the name of the music, the author, the music file address, and the music cover, respectively.

Then, activate the configuration in the theme's `_config.yml` configuration file:

```yaml
# Whether to display the musics.
music:
  enable: true
  showTitle: false
  title: Listen to music
  fixed: false # enable fixed mode
  autoplay: false # audio autoplay
  theme: '#42b983'
  loop: 'all' # player loop play, values: 'all', 'one', 'none'
  order: 'list' # player play order, values: 'list', 'random'
  preload: 'auto' # values: 'none', 'metadata', 'auto'
  volume: 0.7 # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves
  listFolded: false # indicate whether list should folded at first
  listMaxHeight: # list max height
```

## Post Front-matter

### Detailed Front-matter options

Everything in the Front-matter option is **not required**. But I still recommend at least filling in the values of `title` and `date`.

| Options   | Defaults              | Description                                             |
| ---------- | --------------------------- | ------------------------------------------------------------ |
| title      | Markdown's file title | Post title, it is highly recommended to fill in this option |
| date       | Date and time when the file created | Publish time, it is highly recommended to fill in this option, and it is best to ensure that it is globally unique |
| author     | `author` in root `_config.yml` | Post author                                    |
| img        | a value in `featureImages`  | Post feature image，For exampl: `http://xxx.com/xxx.jpg` |
| top        | `true`                      | Recommended post (whether the post is topped), if the `top` value is `true`, it will be recommended as a homepage post. |
| cover      | `false`                     | The `v1.0.2` version is added to indicate whether the post needs to be added to the homepage carousel cover. |
| coverImg   | null                        | The new version of `v1.0.2` indicates that the post needs to display the image path on the cover of the homepage. If not, the default image of the post is used by default. |
| password   | null                        | The post read the password. If you want to set the reading verification password for the article, you can set the value of `password`, which must be encrypted with `SHA256` to prevent others from seeing it. The premise is that the `verifyPassword` option is activated in the theme's `config.yml` |
| toc        | `true`                      | Whether TOC is turned on or not, you can turn off the TOC function for an article. The premise is that the `toc` option is activated in the theme's `config.yml` |
| mathjax    | `false`                     | Whether to enable math formula support, whether this article starts `mathjax`, and you need to open it in the theme `_config.yml` file. |
| summary    | null                        | Post summary, custom post summary content, if the attribute has a value, the post card summary will display the text, otherwise the program will automatically intercept part of the article as a summary |
| categories | null                        | Article classification, the classification of this topic represents a macroscopically large classification, only one article is recommended for one classification. |
| tags       | null                        | Post label, a post can have multiple labels |
| reprintPolicy       | cc_by                        | Post reprint policy, value could be one of cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint and pay |

> **Note**: 
> 1. post's featured piature will take remainder if not writing the `img` property,and chose the featured picture of theme to let all of post's picture **have their own characteristics**.
> 2. The value of `date` should try to ensure that each article is unique, because `Gitalk` and `Gitment` recognize `id` in this topic are uniquely identified by the value of `date`.
> 3. If you want to set the ability to read the verification password for the article, you should not only set the value of the password with SHA256 encryption in Front-matter, but also activate the configuration in the theme `_config.yml`.
> 4. you can define reprint policy for a single article in the front-matter of the specific md file using this key: reprintPolicy

The following are examples of the post's `Front-matter`.

### The simplest example

```yaml
---
title: typora-vue-theme Theme introduction
date: 2018-09-07 09:25:00
---
```

### The most comprehensive example

```yaml
---
title: typora-vue-theme Theme introduction
date: 2018-09-07 09:25:00
author: Qi Zhao
img: /source/images/xxx.jpg
top: true
cover: true
coverImg: /images/1.jpg
password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: false
mathjax: false
summary: This is the content of your custom post summary. If there is a value for this attribute, the post card summary will display the text, otherwise the program will automatically intercept part of the post content as a summary.
categories: Markdown
tags:
  - Typora
  - Markdown
---
```

## Screenshot

### Home

![首页](http://static.blinkfox.com/matery-20181202-1.png)

![首页推荐文章](http://static.blinkfox.com/matery-20181202-2.png)

![首页文章列表](http://static.blinkfox.com/matery-20181202-3.png)

![首页文章列表](http://static.blinkfox.com/matery-20181202-7.png)

![首页文章列表](http://static.blinkfox.com/matery-20181202-8.png)

## Custom modification

You can modify some custom modification in `_config.yml` as follows:

- Menu
- My dream
- Home music player and video player configuration
- Whether to display the title of the recommended posts
- `favicon` and `Logo`
- profiles
- TOC
- post rewards
- Append copyright information when copying article content
- MathJax
- Post word count, reading times
- the 'love' effect of clicking on the page
- My Projects
- My Skills
- My Gallery
- Gitalk, Gitment, Valine and Disqus
- [Busuanzi Statistics](http://busuanzi.ibruce.info/) And Google Analytics
- The map of default featured pictures. The theme will take remainde according to `hashcode` of post title if the post dose not set featured piactures.

**I think everyone should have their own style and feature of blog**。if you are not satisfiled with functions and theme color,you can modify by yourself,and more free functions and deatil need to be modified by modify source code when it is hard to be finished in `_config.yml`.

### modeing theme color

Search `.bg-color` to modify background color in `/source/css/matery.css` in theme file：

```css
/* The overall background color, including navigation, mobile navigation, footer, tab, etc.. */
.bg-color {
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

@-webkit-keyframes rainbow {
   /* Dynamically switch background colors. */
}

@keyframes rainbow {
    /* Dynamically switch background colors. */
}
```

### Modify banner picture and post's featured pictures

You can change `banner` pictures in `/source/medias/banner` as you like .Theme code can switch  dynamically every day and just need 7 pictures.If you master `JavaScript`,you can change it to your favorite swithing logic,such as Random switching.The code of switching `banner`is in `<script></script>` of `/layout/_partial/bg-cover-content.ejs`file.

```javascript
$('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
```

There are 24 featured pictures in `/source/medias/featureimages`,you can add or delete,and modify it in `_config.yml` at the sametime.

## Changelog

- v1.0.4
  - Added the ability to customize the reprint rules for each post;
  - Fix the problem that the custom summary of the previous page and the next page does not display;
  - Fixed the problem that the link of the friends link was misplaced and changed to the layout of the waterfall stream;
  - Other minor bugs fixes;
- v1.0.3
  - Added `TOC` expansion, shrink button and related configuration, this button is displayed by default;
- v1.0.2
  - Upgraded the [Materialize](https://materializecss.com/) framework version to `1.0.0`, refactoring and modifying some files or problems during the upgrade process;
  - Added a full-screen carousel effect on the front cover of the home page to set more important posts to the home page carousel;
  - Fix the first button on the front page is Chinese;
  - Fixed an issue where clicking search input on the iPhone to get focus;
  - Fixed an issue where the page was enlarged after the input box on the iPhone got focus;
  - Fix some posts or UI display issues;
- v1.0.1
  - Adjust the file request path of `css` and `js` in the `_config.yml` of the theme, so that you can quickly configure their own CDN;
  - Whether the new code is configurable or not, the default is a line break;
  - The `TOC` function is activated by default, and the `Front-matter` configuration option for `TOC` is turned off for a post;
  - Fixed an issue where the highlighted directory option was inaccurate when scrolling through the post;
  - Remove the search box under `IOS` to automatically get the focus attribute, preventing the view from moving up after automatically getting the focus;
- v1.0.0
  - Added all the basic features;
