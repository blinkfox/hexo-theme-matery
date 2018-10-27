# hexo-theme-matery

[![HitCount](http://hits.dwyl.io/blinkfox/hexo-theme-matery.svg)](http://hits.dwyl.io/blinkfox/hexo-theme-matery) [![GitHub issues](https://img.shields.io/github/issues/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/issues) [![GitHub license](https://img.shields.io/github/license/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/blob/master/LICENSE) [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg)](http://hexo.io) [![GitHub forks](https://img.shields.io/github/forks/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/network) [![GitHub stars](https://img.shields.io/github/stars/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/stargazers)

[中文说明](README_CN.md) | [DEMO](https://blinkfox.github.io/)

> This is a Hexo blog theme with 'Material Design' and responsive design.

## Feature

- Simple and beautiful, and post is Beautiful and readable.
- [Material Design](https://material.io/).
- Responsive design,which can be displayed well on desktop, tablet, mobile phone, etc.
- Changing 'banner' picture dynamically everday.
- Blog posts list with waterflow(There will be 24 images if the articl dosn't have  featured pictures).
- Archive page with timeline.
- Tags page of the **word cloud** and categories page of the **radar chart**
- TOC
- Comment module of [Gitalk](https://gitalk.github.io/), [Gitment](https://imsun.github.io/gitment/) and [Disqus](https://disqus.com/).(Gitalk is recommended)

## Next development plans

- [x] Refactoring tags page as **paginable**
- [x] Refactoring Archives page as **paginable**
- [x] Add category page
- [x] Add about me page
- [ ] Beautify the scroll bar
- [x] Integrated [Gitalk](https://gitalk.github.io/) comment
- [x] Add `fork me on github` in the upper right corner
- [x] Add the `RSS` feed
- [x] Add post detatil of `TOC`
- ~~At the bottom of the site, add statistics such as traffic~~(Theme users can implement based on Google Analytics, Baidu Statistics, LeanCloud, etc.)
- [x] design Index Page and support to add top posts
- [x] Add **rewards** function after the posts ends
- ~~Add a cute **pet** or **growth tree** for blogs, etc.~~（Can be implemented using the [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d) plugin）

> Welcome to contribute!

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

```yml
title: categories
date: 2018-09-30 17:25:30
type: "categories"
layout: "categories"
```

### new tags page

`tags` page is to show all of tags. If the `source` directory of your blog doesn't have `tags/index.md` file,you need to new one like this:

```bash
hexo new page "tags"
```

to edit your new page files`/source/tags/index.md`, you need somethings as follows:

```yml
title: tags
date: 2018-09-10 18:23:38
type: "tags"
layout: "tags"
```

### new about page

`about` page is to show my blog and myself information. If the `source` directory of your blog doesn't have `about/index.md` file, you need to new one like this:

```bash
hexo new page "about"
```

to edit your new page files`/source/about/index.md`, you need somethings as follows:

```yml
title: about
date: 2018-09-30 17:25:30
type: "about"
layout: "about"
```

### Code highlight

Hexo theme uses Hexo's plugin[hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) to show the code highlight instead of its own theme.The Installation commands are as follows:

```bash
npm i -S hexo-prism-plugin
```

Then,modify the value of `highlight.enable` to `false` in `_config.yml` file of Hexo root folder，and add the configuration of `prism` plugin as follows:

```yml
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

```yml
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

```yml
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```

> **Note*:[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) can genarate non-Chinese link in addtion to this plugin.

### Add RSS feed support (Optional)

The theme uses the Hexo plugin[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) to support `RSS` feed , and the Installation commands are as follows:

```bash
npm install hexo-generator-feed --save
```

Add configuration of `_config.yml` file in Hexo root folder as follows：

```yml
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

### Modify social links

In the `/layout/_partial/social-link.ejs` file of the theme, you can modify or add the social link address you need. To add a link, please refer to the following code:

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

> **Note**: The version of `Font Awesome` is `4.5.0`.

## Post Front-matter example

The following are post `Front-matter` example,and all content is **not required**.But we still suggest you write the value of `title`.Of course ,you'd better write all of these information.

```yml
---
title: typora-vue-theme Theme introduction
date: 2018-09-07 09:25:00
author: Qi Zhao
img: /source/images/xxx.jpg # or:http://xxx.com/xxx.jpg
top: true # If top value is true, it will be the homepage recommendation post
categories: Markdown
tags:
  - Typora
  - Markdown
---
```

> **Note**: post's featured piature will take remainder if not writing the `img` property,and chose the featured picture of theme to let all of post's picture **have their own characteristics**.

## Screenshot

### Home

![Home](http://static.blinkfox.com/hexo-matery-index1.png)

![Home post list](http://static.blinkfox.com/hexo-matery-index2.png)

### Post page

![Post](http://static.blinkfox.com/hexo-matery-post1.png)

![Post's other parts](http://static.blinkfox.com/hexo-matery-post2.png)

## Custom modification

You can modify some custom modification in `_config.yml` as follows:

- Menu
- Inspirational quotes on Home
- `favicon` and `Logo`
- profiles
- TOC
- My Projects
- My Skills
- My Gallery
- Gitalk, Gitment and Disqus
- The map of default featured pictures. The theme will take remainde according to `hashcode` of post title if the post dose not set featured piactures.

**I think everyone should have their own style and feature of blog**。if you are not satisfiled with functions and theme color,you can modify by yourself,and more free functions and deatil need to be modified by modify source code when it is hard to be finished in `_config.yml`.

### modeing theme color

Search `.bg-color` to modify background color in `/source/css/matery.css` in theme file：

```css
/* The overall background color, including navigation, mobile navigation, footer, tab, etc.. */
.bg-color {
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

/* The color of the text with the same background color is only used in one place on the front page. You can also apply it to other places.*/
.text-color {
    color: #0f9d58 !important;
}

@-webkit-keyframes rainbow {
   /* Dynamically switch background colors. */
}

@keyframes rainbow {
    /* Dynamically switch background colors. */
}
```

### Modify banner picture and post's featured pictures

You can change `banner` pictures in `/source/medias/banner` as you like .Theme code can switch  dynamically every day and just need 7 pictures.If you master `JavaScript`,you can change it to your favorite swithing logic,such as Random switching.The code of switching `banner`is in `<script></script>` of `/layout/_partial/bg-cover.ejs`file.

```javascript
$('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
```

There are 24 featured pictures in `/source/medias/featureimages`,you can add or delete,and modify it in `_config.yml` at the sametime.

