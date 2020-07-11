# Popcorn and Guaraná

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![GitHub issues](https://img.shields.io/github/issues/sxsarena/popcorn-and-guarana.svg)](https://github.com/sxsarena/popcorn-and-guarana/issues)
![GitHub Release Date](https://img.shields.io/github/release-date/sxsarena/popcorn-and-guarana.svg)
![GitHub top language](https://img.shields.io/github/languages/top/sxsarena/popcorn-and-guarana.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/sxsarena/popcorn-and-guarana.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/sxsarena/popcorn-and-guarana/total.svg)

## Preview

### Responsive

![responsive](https://user-images.githubusercontent.com/1963897/76088091-32309800-5f96-11ea-9a77-f196087da101.gif)

## Prerequisites

- [Node = v10.15.x](https://nodejs.org/en/)
- NPM >= v6.4.x
- [Yarn >= v1.22.0](https://yarnpkg.com/en/docs/install#linux-tab)

### .gitconfig

Git's merge commit message

```bash
[alias]
    mergelogmsg = "!f() { var=$(git symbolic-ref --short HEAD) && printf 'Merge branch %s into %s\n\n::SUMMARY::\nBranch %s commits:\n' $1 $var $1 > temp_merge_msg && git log --format=format:'%s' $var..$1 >> temp_merge_msg && printf '\n\nBranch %s commits:\n' $var >> temp_merge_msg && git log --format=format:'%s' $1..$var >> temp_merge_msg && printf '\n\n* * * * * * * * * * * * * * * * * * * * * * * * *\n::DETAILS::\n' >> temp_merge_msg && git log --left-right $var...$1 >> temp_merge_msg && git merge --no-ff --no-commit $1 && git commit -eF temp_merge_msg; rm -f temp_merge_msg;}; f"
```

## Usage

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Log

Check [Releases](https://github.com/sxsarena/popcorn-and-guarana/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
