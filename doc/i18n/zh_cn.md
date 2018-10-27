<p align="center"><img src="https://github.com/marktext/marktext/blob/master/static/logo-small.png" alt="mark text" width="100" height="100"></p>

<h1 align="center">Mark Text</h1>

<div align="center">
  <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fmarktext%2Fmarktext">
    <img src="https://img.shields.io/twitter/url/https/github.com/marktext/marktext.svg?style=for-the-badge" alt="twitter">
  </a>
</div>
<div align="center">
  <strong>:high_brightness:Next generation markdown editor:crescent_moon:</strong>
</div>
<div align="center">
  An <code>Electron</code> app for platforms of OS X Windows and Linux
</div>

<br />

<div align="center">
  <!-- Version -->
  <a href="https://marktext.github.io/website">
    <img src="https://badge.fury.io/gh/jocs%2Fmarktext.svg" alt="website">
  </a>
  <!-- License -->
  <a href="https://marktext.github.io/website">
    <img src="https://img.shields.io/github/license/marktext/marktext.svg" alt="LICENSE">
  </a>
  <!-- Build Status -->
  <a href="https://marktext.github.io/website">
    <img src="https://travis-ci.org/marktext/marktext.svg?branch=master" alt="build">
  </a>
  <!-- Downloads total -->
  <a href="https://marktext.github.io/website">
    <img src="https://img.shields.io/github/downloads/marktext/marktext/total.svg" alt="total download">
  </a>
  <!-- Downloads latest release -->
  <a href="https://marktext.github.io/website">
    <img src="https://img.shields.io/github/downloads/marktext/marktext/v0.13.50/total.svg" alt="latest download">
  </a>
  <!-- deps -->
  <a href="https://marktext.github.io/website">
    <img src="https://img.shields.io/hackage-deps/v/lens.svg" alt="dependencies">
  </a>
  <!-- donates -->
  <a href="https://opencollective.com/marktext">
    <img src="https://opencollective.com/marktext/tiers/backer/badge.svg?label=backer&color=brightgreen" alt="donate">
  </a>
</div>

<div align="center">
  <h3>
    <a href="https://marktext.github.io/website">
      Website
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#features">
      Features
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#download-and-install">
      Downloads
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#development">
      Development
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#contribution">
      Contribution
    </a>
  </h3>
</div>

<div align="center">
  <sub>This Markdown editor that could. Built with ❤︎ by
    <a href="https://github.com/Jocs">Jocs</a> and
    <a href="https://github.com/marktext/marktext/graphs/contributors">
      contributors
    </a>
  </sub>
</div>

<br />

![](https://github.com/marktext/marktext/blob/master/doc/marktext.gif)

### 特性

- Mark Text 所输及所见，摒弃了众多 markdown 编辑器左边写作右边预览的写作方式，巧妙的将编辑和预览融为一体。
- [snabbdom](https://github.com/snabbdom/snabbdom) 作为 Mark Text 的渲染引擎，保证了极速渲染编辑页面，带来流畅的书写体验。
- 支持 [CommonMark Spec](https://spec.commonmark.org/0.28/) 和 [GitHub Flavored Markdown Spec](https://github.github.com/gfm/) 语法格式，生成的 Markdown 可以复制到任何支持 markdown 格式的社区、网站。
- 段落及行内样式快捷键提升您的编辑效率。
- 输出 HTML 和 PDF 格式文件，方便在浏览器中预览。
- 黑、白两款主题，自由切换。
- 多种编辑模式：**源代码模式**、**打字机模式**、**专注模式**。

<h4 align="center">:crescent_moon:Dark and Light themes:high_brightness:</h4>

|                     Dark :crescent_moon:                     |                    Light:high_brightness:                    |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://github.com/marktext/marktext/blob/master/doc/dark.jpg) | ![](https://github.com/marktext/marktext/blob/master/doc/light.jpg) |

<h4 align="center">:smile_cat:​Edit modes:dog:​</h4>

|                         Source Code                          |                          Typewriter                          |                            Focus                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://github.com/marktext/marktext/blob/master/doc/source.gif) | ![](https://github.com/marktext/marktext/blob/master/doc/typewriter.gif) | ![](https://github.com/marktext/marktext/blob/master/doc/focus.gif) |

### 可以斗图的 Markdown 编辑器

 Mark Text 内置斗图功能，省掉了寻找「斗图」的烦恼，通过快捷键 `Cmd+/` 直接打开斗图搜索面板，你需要的有趣图片就在里面。斗图功能默认是关闭的，你需要从`user preference` 菜单中，打开 preference.md, 然后设置 `aidou` 为 `true`。保存然后重启编辑器就可以使用了。

![](https://github.com/marktext/marktext/blob/master/doc/doutu.jpg)

### 安装和下载

![Conda](https://img.shields.io/conda/pn/conda-forge/python.svg?style=for-the-badge)

| ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/mac-pass-sm.png)                                                                                                             | ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/windows-pass-sm.png)                                                                                                                     | ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/linux-pass-sm.png)                                                                                                                                   |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-0.13.50.dmg.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-0.13.50.dmg) | [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-setup-0.13.50.exe.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-setup-0.13.50.exe) | [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-0.13.50-x86_64.AppImage.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-0.13.50-x86_64.AppImage) |

如果你依然没有找到适合你的版本，请直接从 [release](https://github.com/marktext/marktext/releases) 页面下载。

如果你使用 Mac，那么你可以通过 [**homebrew cask**](https://github.com/caskroom/homebrew-cask) 来安装 Mark Text。在使用 Homebrew-Cask 之前，你需要安装 [Homebrew](https://brew.sh/)。

> brew cask install mark-text

![](https://github.com/marktext/marktext/blob/master/doc/brew-cask.gif)

### 开发

如果你想自己打包应用，或者想打包到其他平台。

- 首先 clone 仓库到本地
- 运行 `npm install`
- 运行 `npm run build`
- 复制 app 到 Applications 文件夹，如果是 windows 系统直接点击相应软件安装。

### 贡献

Mark Text 正在全力开发中，在你提交 PR 之前，请首先阅读 [Contributing Guide](https://github.com/marktext/marktext/blob/master/.github/CONTRIBUTING.md)。 如果你想给 Mark Text 添加新的特性，请阅读 [TODO LIST](https://github.com/marktext/marktext/blob/master/.github/TODOLIST.md)

感谢所有 Mark Text 的所有[贡献者](https://github.com/marktext/marktext/graphs/contributors), 正是因为有你们，Mark Text 才会趋于完美。 如果你是贡献者，你可以将你的姓名和头像添加到下面列表中。

特别致谢 @[Yasujizr](https://github.com/Yasujizr) 为 Mark Text 设计了 logo。

| [![Jocs](https://avatars0.githubusercontent.com/u/9712830?s=150&v=4)](https://github.com/Jocs) | [![ywwhack](https://avatars1.githubusercontent.com/u/8746197?s=150&v=4)](https://github.com/ywwhack) | [![notAlaanor](https://avatars1.githubusercontent.com/u/17591936?s=150&v=4)](https://github.com/notAlaanor) | [![fxha](https://avatars1.githubusercontent.com/u/22716132?s=150&v=4)](https://github.com/fxha) |
|:----------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| [Jocs](https://github.com/Jocs)                                                                | [ywwhack](https://github.com/ywwhack)                                                                | [notAlaanor](https://github.com/notAlaanor)                                                                 | [fxha](https://github.com/fxha)                                                                 |

### License

 [**MIT**](https://github.com/marktext/marktext/blob/master/LICENSE).

Copyright (c) 2017-present, @Jocs
