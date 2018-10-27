
# iMark

iMark, is a Markdown editor based on [Mark Text](https://github.com/marktext/marktext)? Mark Text is a very nice Markdown editor, it supports typewriter mode, source code mode and focus mode. Typewriter mode supports Markdown rendered in place based on VDOM (Virtual Document of Model), which is a remarkable feature compared with other Markdown editors.

- [Website](https://marktext.github.io/website)
- [Features](https://github.com/marktext/marktext#features)
- [Development](https://github.com/marktext/marktext#development)
- [Contribution](https://github.com/marktext/marktext#contribution)
- [Translations]
  - [:cn](https://github.com/marktext/marktext/blob/master/doc/i18n/zh_cn.md#readme)
  - [:poland](https://github.com/marktext/marktext/blob/master/doc/i18n/pl.md#readme)
  - [:jp](https://github.com/marktext/marktext/blob/master/doc/i18n/ja.md#readme)
  - [:fr]( https://github.com/marktext/marktext/blob/master/doc/i18n/french.md#readme)
  - [:sp](https://github.com/marktext/marktext/blob/master/doc/i18n/spanish.md#readme)
  - [:portugal](https://github.com/marktext/marktext/blob/master/doc/i18n/pt.md#readme)

## Features

- Realtime preview and use [snabbdom](https://github.com/snabbdom/snabbdom) as its render engine.
- Support [CommonMark Spec](https://spec.commonmark.org/0.28/) and [GitHub Flavored Markdown Spec](https://github.github.com/gfm/).
- Support paragraphs and inline style shortcuts to improve your writing efficiency.
- Output **HTML** and **PDF** files.
- Dark and Light themes.
- Various editing modes: **Source Code mode**, **Typewriter mode**, **Focus mode**.

## Why write another editor?

1. I love writing. I have used a lot of markdown editors, yet there is still not an editor that can fully meet my needs. I don't like to be disturbed when I write by some unbearable bug. **Mark Text** uses virtual DOM to render pages which has the added benefits of being highly efficient and being open source. That way anyone who loves markdown and writing can use Mark Text.
2. As mentioned above, **Mark Text** is open source and will be open source forever. We hope that all markdown lovers will contribute their own code and help develop **Mark Text** into a popular markdown editor.
3. There are many markdown editors and all have their own merits, some have feautures which others don't. It's difficult to satisfy each markdown users needs but we hope **Mark Text** will be able to satisfy each markdown users' needs as much as possible. Although the latest **Mark Text** is still not perfect, we will try to make it as best as we possibly can.
4. Besides the reasons menthoned above by the author of Mark Text, I want Mark Text to meet my needs in GUI and Git integration and other features. Though developers of Mark Text are excellent, some features still need to be developed by myself, so I download and make some changes to the code. This repo will always keep opensource, too.

## Download and Install

- ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/mac-pass-sm.png), [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-0.13.50.dmg.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-0.13.50.dmg)
- ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/windows-pass-sm.png), [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-setup-0.13.50.exe.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-setup-0.13.50.exe)
- ![](https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/linux-pass-sm.png), [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-0.13.50-x86_64.AppImage.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-0.13.50-x86_64.AppImage)

>Want to see new features of the latest version? Refer to [CHANGELOG](https://github.com/marktext/marktext/blob/master/.github/CHANGELOG.md)

>If you use macOS, you can install Mark Text using [**homebrew cask**](https://github.com/caskroom/homebrew-cask). To use Homebrew-Cask you just need to have [Homebrew](https://brew.sh/) installed, run `brew cask install mark-text` to install.

#### macOS and Windows

Simply download and install Mark Text via setup wizard.

#### Linux

Please follow the [Linux installation instructions](https://github.com/marktext/marktext/blob/master/doc/linux.md).

## Development

If you wish to build **Mark Text** yourself, please check out our [developer documentation](https://github.com/marktext/marktext/blob/master/.github/CONTRIBUTING.md#build-instructions).

If you have any questions regarding **Mark Text**, you are welcome to write an issue. When doing so please use the default format found when opening a issue. Of course, if you submit a PR directly, it will be greatly appreciated.

## Integrations

- [Alfred Workflow](http://www.packal.org/workflow/mark-text): A Workflow for the macOS app Alfred: Use "mt" to open files/folder with Mark Text.

## Contribution

Mark Text is in full development, please make sure to read the [Contributing Guide](https://github.com/marktext/marktext/blob/master/.github/CONTRIBUTING.md) before making a pull request. Want to add some features to Mark Text? Refer to [TODO LIST](https://github.com/marktext/marktext/blob/master/.github/TODOLIST.md) and open issues.

## Contributors

Thank you to all the people who have already contributed to Mark Text[[contributors](https://github.com/marktext/marktext/graphs/contributors)]

Special thanks to @[Yasujizr](https://github.com/Yasujizr) who designed the logo of Mark Text.

<a href="https://github.com/marktext/marktext/graphs/contributors"><img src="https://opencollective.com/marktext/contributors.svg?width=890" /></a>

## License

[**MIT**](https://github.com/marktext/marktext/blob/master/LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarktext%2Fmarktext.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarktext%2Fmarktext?ref=badge_large)
