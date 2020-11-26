# hexo-theme-matery

[![HitCount](http://hits.dwyl.io/blinkfox/hexo-theme-matery.svg)](http://hits.dwyl.io/blinkfox/hexo-theme-matery) [![Gitter](https://img.shields.io/gitter/room/blinkfox/hexo-theme-matery.svg)](https://gitter.im/hexo-theme-matery/Lobby?utm_source=badge) [![GitHub issues](https://img.shields.io/github/issues/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/issues) [![GitHub license](https://img.shields.io/github/license/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/blob/master/LICENSE) [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%205.0.0-blue.svg)](http://hexo.io) [![GitHub forks](https://img.shields.io/github/forks/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/network) [![GitHub stars](https://img.shields.io/github/stars/blinkfox/hexo-theme-matery.svg)](https://github.com/blinkfox/hexo-theme-matery/stargazers)

[🇨🇳中文说明](README_CN.md) | [国内访问示例(http://blinkfox.com)](http://blinkfox.com) | [Github Deploy Demo(https://blinkfox.github.io)](https://blinkfox.github.io)

> This is a Hexo blog theme with 'Material Design' and responsive design.

## Features

- Simple and beautiful, and post is Beautiful and readable.
- [Material Design](https://material.io/).
- Responsive design, which can be displayed well on desktop, tablet, mobile phone, etc.
- Home page carousel posts and changing 'banner' picture dynamically everyday.
- Blog posts list with waterflow (There will be 24 images if the article doesn't have featured pictures).
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
- Support [DaoVoice](http://www.daovoice.io/), [Tidio](https://www.tidio.com/) online chat.

## Contributor

Thanks to these contributors, without whom, hexo-theme-matery won't be this perfect.

- [@HarborZeng](https://github.com/HarborZeng)
- [@shw2018](https://github.com/shw2018)
- [@L1cardo](https://github.com/L1cardo)
- [@Five-great](https://github.com/Five-great)

## Download

hexo-theme-matery **recommend you to use Hexo 5.0.0 and above**. If you already have your own [Hexo](https://hexo.io/zh-cn/) blog, I suggest you upgrade Hexo to the latest stable version.

Click [here](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) to download master branch of the last stable version of the code.After decompressing, copy the `hexo-theme-matery` folder
to your `themes` folder of your Hexo blog project.

Of course, you can use `git clone` to download in your `themes` folder.

```bash
git clone https://github.com/blinkfox/hexo-theme-matery.git
```

## Configuration

### Modify theme

Modify the value of `theme` in `_config.yml` of Hexo's root folder: `theme: hexo-theme-matery`.

#### Suggestions for other changes to the `_config.yml`:

- Please modify the value of `url` of `_config.yml` to your website's main `URL` (e.g. `http://xxx.github.io`).
- It's recommended to modify the value of the two `per_page` to be a multiple of `6`, such as: `12`, `18`, etc. so that the posts list can be displayed well under each screen.
- If you are a Chinese user, it is recommended to change the value of `language` to `zh-CN`.

### new categories page

`categories` page is to show all of categories. If the `source` directory of your blog doesn't have `categories/index.md` file, you need to create a new one like this:

```bash
hexo new page "categories"
```

when editing your new page file `/source/categories/index.md`, you need something like:

```yaml
---
title: categories
date: 2018-09-30 17:25:30
type: "categories"
layout: "categories"
---
```

### new tags page

`tags` page is to show all of tags. If the `source` directory of your blog doesn't have `tags/index.md` file, you need to create a new one like this:

```bash
hexo new page "tags"
```

and put the following in your new page file `/source/tags/index.md`,

```yaml
---
title: tags
date: 2018-09-10 18:23:38
type: "tags"
layout: "tags"
---
```

### new about page

`about` page is to show my blog and myself information. If the `source` directory of your blog doesn't have `about/index.md` file, create a new one like this:

```bash
hexo new page "about"
```

and edit your new page file `/source/about/index.md` to include:

```yaml
---
title: about
date: 2018-09-30 17:25:30
type: "about"
layout: "about"
---
```

### new contact page (Optional)

`contact` page is to show contact information. If the `source` directory of your blog doesn't have `contact/index.md` file, you need to new one like this:

```bash
hexo new page "contact"
```

when editing your new page file `/source/contact/index.md`, include the following at the beginning:

```yaml
---
title: contact
date: 2018-09-30 17:25:30
type: "contact"
layout: "contact"
---
```

> **Note**：The message board depends on a third-party comment system, please **activate** your comment system to be effective. And in the theme's `_config.yml` file, the "**menu**" of the `19` to `21` line is configured, and the comment about the message board could be canceled.

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

Also, create a new `_data` directory in your blog's `source` directory and a new `friends.json` file in the `_data` directory. The contents of the file is as follows:

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
    "url": "https://me.csdn.net/jlh912008548",
    "title": "Read More"
}]
```
### new 404 page

If the `source` directory of your blog doesn't have `404.md` file, you need create a new one using:

```bash
hexo new page 404
```

when editing your new page file `/source/404/index.md`, you need something as follows:

```yaml
---
title: 404
date: 2020-05-30 00:00:00
type: "404"
layout: "404"
description: "Cannot find the page you want :("
---
```

### Menu navigation configuration

#### Configure the name of the basic menu navigation, path url and icon icon.

1. The menu navigation name can be Chinese or English (e.g.: `Index` or `主页`)
2. Icon icon can be found in [Font Awesome](https://fontawesome.com/icons)

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

#### Secondary menu configuration method

If you need a secondary menu, you can do the following on the basis of the original basic menu navigation.

1. Add the `children` keyword to the first level menu that needs to add a secondary menu (e.g.: add `children` under the `About` menu)
2. Create a secondary menu name, path url and icon icon under `children`.
3. Note that each secondary menu module must be preceded by `-`.
4. Note the indentation format.

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
  Medias:
    icon: fas fa-list
    children:
      - name: Music
        url: /music
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

### Code Highlight

Starting from Hexo 5.0.0 version, it comes with support for `prismjs` code syntax highlighting, and hexo-theme-matery has been modified to support it.

If the plugin of `hexo-prism-plugin` has been installed in your blog, then you need to execute `npm uninstall hexo-prism-plugin` to uninstall it, otherwise there will be `&#123;`, `&#125;` escape characters in the code block of the post.

Then, modify the value of `highlight.enable` to `false` in `_config.yml` at the root your hexo project, and set the value of `prismjs.enable` to `true`, the main configuration is as follows:

```yaml
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```

The default `prismjs` theme in the hexo-theme-matery is `Tomorrow Night`, if you want to customize your own theme, you can go to [prismjs download page](https://prismjs.com/download.html) to download yourself favorite theme `css` file, then name this css theme file `prism.css`, replace the `source/libs/prism/prism.css` file in the theme folder of `hexo-theme-matery`.

### Search

The theme uses the Hexo plugin [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) to search the content, and the Installation command is as follows:

```bash
npm install hexo-generator-search --save
```

Add the following content in `_config.yml` at the root of your hexo project:

```yaml
search:
  path: search.xml
  field: post
```

### Translate Chinese Link to Pinyin (Recommended)

Default permalinks of Hexo will include Chinese if your article's title is Chinese. But it's adverse to `SEO`, and `gitment` comments don't support Chinese Link as well. We can use the [hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) Hexo plugin to generate permalinks in Chinese Pinyin when generating posts.

Installation command is as follows：

```bash
npm i hexo-permalink-pinyin --save
```

Add such configurations in `_config.yml` file of Hexo:

```yaml
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```

> **Note**: [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) can generate non-Chinese link in addition to this plugin.

### Post word count statistics plugin (Recommended)

If you want to display the post word count and reading time information in the post detail page, you can install the [hexo-wordcount](https://github.com/willin/hexo-wordcount) plugin.

Installation command is as follows：

```bash
npm i --save hexo-wordcount
```

Then just activate the following configuration items in the theme `_config.yml` file:

```yaml
postInfo:
  date: true
  update: false
  wordCount: false # set true.
  totalCount: false # set true.
  min2read: false # set true.
  readCount: false # set true.
```

### Add emoji support (Optional)

This theme adds support for the `emoji` emoticon, using the Hexo plugin [hexo-filter-github-emojis](https://npm.taobao.org/package/hexo-filter-github-emojis) to support the generation of the `emoji` expression. The corresponding `markdown emoji` syntax (`::`, for example: `:smile:`) is converted into a `emoji` expression that jumps. The installation command is as follows:

```bash
npm install hexo-filter-github-emojis --save
```

Add the following configuration into the `_config.yml` file in your hexo project root folder：

```yaml
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:
```

Execute `hexo clean && hexo g` to regenerate the blog file, and then you can see the expression you wrote in the `emoji` grammar in the corresponding position in the article.

### Add RSS feed support (Optional)

The theme uses the Hexo plugin [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) to support `RSS` feed , and the Installation command is as follows:

```bash
npm install hexo-generator-feed --save
```

Add the following configuration into the `_config.yml` file in your hexo project root folder：

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

### [DaoVoice](http://www.daovoice.io/) online chat (Optional)

Go to the official website of [DaoVoice](http://www.daovoice.io/), register and get the `app_id`. Fill the `app_id` into the the theme `_config.yml` file.

### [Tidio](https://www.tidio.com/) online chat (Optional)

Go to the official website of [Tidio](https://www.tidio.com/), register and get the `Public Key`. Fill the `Public Key` into the the theme `_config.yml` file.

### Modify website footer

Website footer may need to be customized, and it is not convenient to make it part of the configuration, So you need to modify and process it by yourself. Changes could be made in the theme's `/layout/_partial/footer.ejs` file, including the site information, the theme used, the amount of traffic and so on.

### Modify social links

In the theme `_config.yml` file, the configurations of `QQ`, `GitHub` and mailbox and more are supported by default. In the `/layout/_partial/social-link.ejs` file of the theme, you can add or modify social link addresses as you need. To add a link, please refer to the following code:

```html
<% if (theme.socialLink.github) { %>
    <a href="<%= theme.socialLink.github %>" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
        <i class="fab fa-github"></i>
    </a>
<% } %>
```

You can search social icons such as `fab fa-github` in [Font Awesome](https://fontawesome.com/icons). There are common social icons you can reference:

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

> **Note**: The version of `Font Awesome` used by matery is `5.11.0`.

### Configure music player (optional)

To support music playing, you just need to activate music playing configuration in the theme's `_config.yml` file.

```yaml
# Whether to display the music
music:
  enable: true
  title: 		   # non-fixed mode works
    enable: true
    show: Listen to music
  server: netease   # require music platform: netease, tencent, kugou, xiami, baidu
  type: playlist    # require song, playlist, album, search, artist
  id: 503838841     # require song id / playlist id / album id / search keyword
  fixed: false      # enable fixed mode
  autoplay: false   # audio atuoplay
  theme: '#42b983'
  loop: 'all'       # player loop play, values: 'all', 'one', 'none'
  order: 'random'   # player play order, values: 'list', 'random'
  preload: 'auto'   # values: 'none', 'metadata', 'auto'
  volume: 0.7       # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves
  listFolded: true  # indicate whether list should folded at first
```

>`server` values :  `netease` (NetEase  cloud music) , `tencent` (QQMusic) , `kugou` (KuGouMusic) , `xiami`  
>(XiamMusic) , `baidu` (BaiduMusic)  
>`type` values : `song`  ,   `playlist` , `album` , `search` , `artist`  
>For example to get the `id`:open NetEase cloud music in the browser , click the playlist of my love , there will a string of  
>numbers  in the browser\`s address bar  ,  the `playlist`\`s `id` just is the string of numbers.



## Post Front-matter

### Detailed Front-matter options

Everything in the Front-matter option is **not required**. But I still recommend at least filling in the values of `title` and `date`.

| Options   | Defaults              | Description                                             |
| ---------- | --------------------------- | ------------------------------------------------------------ |
| title      | Markdown's file title | Post title, it is highly recommended to fill in this option |
| date       | Date and time when the file created | Publish time, it is highly recommended to fill in this option, and it is best to ensure that it is globally unique |
| author     | `author` in root `_config.yml` | Post author                                    |
| img        | a value in `featureImages`  | Post feature image，For example: `http://xxx.com/xxx.jpg` |
| top        | `true`                      | Recommended post (whether the post is topped), if the `top` value is `true`, it will be recommended as a homepage post. |
| cover      | `false`                     | The `v1.0.2` version is added to indicate whether the post needs to be added to the homepage carousel cover. |
| coverImg   | null                        | The new version of `v1.0.2` indicates that the post needs to display the image path on the cover of the homepage. If not, the default image of the post is used by default. |
| password   | null                        | The post read the password. If you want to set the reading verification password for the article, you can set the value of `password`, which must be encrypted with `SHA256` to prevent others from seeing it. The premise is that the `verifyPassword` option is activated in the theme's `config.yml` |
| toc        | `true`                      | Whether TOC is turned on or not, you can turn off the TOC function for an article. The premise is that the `toc` option is activated in the theme's `config.yml` |
| mathjax    | `false`                     | Whether to enable math formula support, whether this article starts `mathjax`, and you need to open it in the theme `_config.yml` file. |
| summary    | null                        | Post summary, custom post summary content, if the attribute has a value, the post card summary will display the text, otherwise the program will automatically intercept part of the article as a summary |
| categories | null                        | Article classification, the classification of this topic represents a macroscopically large classification, only one article is recommended for one classification. |
| tags       | null                        | Post label, a post can have multiple labels |
| keywords   | Post Title                  | Post key Words With SEO                               |
| reprintPolicy       | cc_by              | Post reprint policy, value could be one of cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint and pay |

> **Note**: 
> 1. post's featured picture will take remainder if not writing the `img` property, and choose the featured picture of theme to let all of post's picture **have their own characteristics**.
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
- The map of default featured pictures. The theme will take remainder according to `hashcode` of the post title if the post does not set featured pictures.

**I think everyone should have their own style and feature for their blogs**. If you are not satisfied with the theme's functions and color, you can modify them by yourself,
and more free functions and details could be changed by modifying source code when it is hard to achieve by modifying the theme's `_config.yml`.

### Customizing theme color

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

You can change `banner` pictures in `/source/medias/banner` as you like .Theme code can switch dynamically every day and just need 7 pictures.If you master `JavaScript`, you can change it to your favorite switching logic, such as Random switching. The code for switching `banner`is in `<script></script>` of `/layout/_partial/bg-cover-content.ejs`file.

```javascript
$('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
```

There are 24 featured pictures in `/source/medias/featureimages`, you can add or delete some, and modify corresponding settings in the theme's `_config.yml`.

## Changelog

See [CHANGELOG.md](https://github.com/blinkfox/hexo-theme-matery/blob/master/README.md)
