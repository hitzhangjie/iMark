<p align="center"><img src="https://github.com/marktext/marktext/blob/master/static/logo-small.png" alt="mark text" width="100" height="100"></p>

<h1 align="center">Mark Text</h1>

<div align="center">
  <a href="https://twitter.com/intent/tweet?via=marktextme&url=https://github.com/marktext/marktext/&text=What%20do%20you%20want%20to%20say%20to%20me?&hashtags=happyMarkText">
    <img src="https://img.shields.io/twitter/url/https/github.com/marktext/marktext.svg?style=for-the-badge" alt="twitter">
  </a>
</div>
<div align="center">
  <strong>:high_brightness:Nouvelle génération d'éditeur markdown:crescent_moon:</strong>
</div>
<div align="center">
  Une application <code>Electron</code> disponible sous OS X, Windows et Linux
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
  <!-- sponsors -->
  <a href="https://opencollective.com/marktext">
    <img src="https://opencollective.com/marktext/tiers/silver-sponsors/badge.svg?label=SilverSponsors&color=brightgreen" alt="sponsors">
  </a>
</div>

<div align="center">
  <h3>
    <a href="https://marktext.github.io/website">
      Site web
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#features">
      Fonctionnalités
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#download-and-install">
      Téléchargement
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#development">
      Dévelopment
    </a>
    <span> | </span>
    <a href="https://github.com/marktext/marktext#contribution">
      Contribution
    </a>
  </h3>
</div>

<div align="center">
  <sub>Cette éditeur est écrit avec ❤︎ par
    <a href="https://github.com/Jocs">Jocs</a> et ses
    <a href="https://github.com/marktext/marktext/graphs/contributors">
      contributeurs
    </a>
  </sub>
</div>

<br />

![](https://github.com/marktext/marktext/blob/master/doc/marktext.gif)

## Features

- Rendu en temps réelle et utilise [snabbdom](https://github.com/snabbdom/snabbdom) en tant que moteur de rendu.
- Supporte [CommonMark Spec](https://spec.commonmark.org/0.28/) et [GitHub Flavored Markdown Spec](https://github.github.com/gfm/).
- Supporte les paragraphes et raccourices clavier afin d'améliorer votre productivité.
- Export de votre markdown en **HTML** et **PDF**.
- Thèmes Sombre et Clair.
- Plusieurs mode d'édition: **Mode code source**, **Mode machine à écrire**, **Mode focus**.

<h4 align="center">:crescent_moon:Thèmes Sombre et Clair:high_brightness:</h4>

| Sombre :crescent_moon:                                               | Clair :high_brightness:                                             |
|:------------------------------------------------------------------:|:-------------------------------------------------------------------:|
| ![](https://github.com/marktext/marktext/blob/master/doc/dark.jpg) | ![](https://github.com/marktext/marktext/blob/master/doc/light.jpg) |

<h4 align="center">:smile_cat:Mode d'édition:dog:</h4>

| Code Source                                                          | Machine à écrire                                                               | Focus                                                               |
|:--------------------------------------------------------------------:|:------------------------------------------------------------------------:|:-------------------------------------------------------------------:|
| ![](https://github.com/marktext/marktext/blob/master/doc/source.gif) | ![](https://github.com/marktext/marktext/blob/master/doc/typewriter.gif) | ![](https://github.com/marktext/marktext/blob/master/doc/focus.gif) |

## Pourquoi écrire un nouvel éditeur?

1. J'adore écrire. J'ai utilisé de nombreux éditeurs markdown et pourtant, aucun ne correspondait réellement à mes besoins. **Mark Text** utilise un DOM virtuel pour le rendu ce qui le rend très efficace. C'est aussi un outil open source pour tous les amoureux de l'écriture et du markdown.
2. Comme mentionné **Mark Text** est et restera open source. Il est aussi espérer que des amoureux du markdown puissent participer au dévelopement du projet afin de rendre **Mark Text** un éditeur parmis les plus populaire.
3. Il y a beaucoup d'éditeur markdown et chacun de ses éditeurs à ses propres caractéristiques mais il est aussi difficile de pouvoir satisfaire tout les besoins utilisateurs. J'espère que **Mark Text** pourra satisfaire vos besoins le plus possible. De plus **Mark Text** n'est pas parfait mais nous faisons de notre mieux pour aller dans cette direction.

## Download and Install

![Conda](https://img.shields.io/conda/pn/conda-forge/python.svg?style=for-the-badge)

| ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/mac-pass-sm.png)                                                                                                             | ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/windows-pass-sm.png)                                                                                                                     | ![]( https://github.com/ryanoasis/nerd-fonts/wiki/screenshots/v1.0.x/linux-pass-sm.png)                                                                                                                                   |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-0.13.50.dmg.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-0.13.50.dmg) | [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-setup-0.13.50.exe.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-setup-0.13.50.exe) | [![latest version](https://img.shields.io/github/downloads/marktext/marktext/latest/marktext-0.13.50-x86_64.AppImage.svg)](https://github.com/marktext/marktext/releases/download/v0.13.50/marktext-0.13.50-x86_64.AppImage) |

Vous ne trouvez pas votre système? Aller sur la [page des releases](https://github.com/marktext/marktext/releases). Toujours pas? Ouvrez une [issue](https://github.com/marktext/marktext/issues).

Vous voulez voir une nouvelle feature dans la prochaine version? Consulté le [CHANGELOG](https://github.com/marktext/marktext/blob/master/.github/CHANGELOG.md)

Si vous êtes sur OS X, vous pouvez installer Mark Text via [**homebrew cask**](https://github.com/caskroom/homebrew-cask), pour commencer à utiliser Homebrew-Cask, vous avez seulement besoin d'avoir [Homebrew](https://brew.sh/) installer sur votre machine.

```bash
brew cask install mark-text
```

![](https://github.com/marktext/marktext/blob/master/doc/brew-cask.gif)

#### macOS and Windows

Télécharger et installer simplement Mark Text via le client d'installation.

#### Linux

Veuillez suivre [les instructions d'installations Linux](https://github.com/marktext/marktext/blob/master/doc/linux.md).

## Development

Si vous souhaiter participer à l'amélioration de **Mark Text**, référer vous au [instructions de dévelopement](https://github.com/marktext/marktext/blob/master/.github/CONTRIBUTING.md#build-instructions).

Si vous avez des questions pendant votre utilisation, vous êtes les bienvenues pour ouvrir une issue, mais j'espère que vous suivrez le format requis. Bien sûr, si vous soumettez une PR directement, cela sera apprécié.

## Contribution

**Mark Text** est en plein déveloment, prenez soin d'étudier le [guide de contribution](https://github.com/marktext/marktext/blob/master/.github/CONTRIBUTING.md) avant de faire une pull request. Vous souhaitez plus de fonctionnalités à Mark Text? Rendez-vous sur la [TODO LIST](https://github.com/marktext/marktext/blob/master/.github/TODOLIST.md) pour ouvrir des issues.

## Backers

Merci à tous nos collaborateurs! 🙏 [[Deviens un backer](https://opencollective.com/marktext#backers)]

<a href="https://opencollective.com/marktext#backers" target="_blank"><img src="https://opencollective.com/marktext/tiers/backer.svg?avatarHeight=36" /></a>

## Sponsors

Supporter ce projet en devenant sponsor de celui-ci. Votre logo sera affiché ici ainsi qu'un lien vers votre site internet. [[Deviens un sponsor](https://opencollective.com/marktext#silver-sponsors)]

**Platinum Sponsors**

<a href="https://readme.io" target="_blank"><img src="https://github.com/marktext/marktext/blob/master/doc/sponsor/readme.png" /></a>

## Contributors

Merci à tous les contributeurs ayant déjà participé à Mark Text [[contributors](https://github.com/marktext/marktext/graphs/contributors)]

Un remerciement spécial à @[Yasujizr](https://github.com/Yasujizr) qui est l'auteur du logo de Mark Text.

<a href="https://github.com/marktext/marktext/graphs/contributors"><img src="https://opencollective.com/marktext/contributors.svg?width=890" /></a>


## License

[**MIT**](https://github.com/marktext/marktext/blob/master/LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarktext%2Fmarktext.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarktext%2Fmarktext?ref=badge_large)
