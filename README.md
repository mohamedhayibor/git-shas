#git-shas ![](https://img.shields.io/badge/status-stable-green.svg)
----------
This module returns the list of all shas (git commit hashes) from a git repository.

## Installation
```sh
  > npm install git-shas
```

## Usage

```js
'use strict';
const gitShas = require('git-shas');
const result = gitShas();
console.log( result ); // =>
/*
* [ '7e516c2174b71c9edb24c9453e4e871369ef4ede',
*   'f6d52ca6fead555e8b460554b7b137bda53a0879',
*   'b452179b197a548707ca52b21f17b10dd39025ab',
*  ....
*/

// To get the HEAD > grab first value in the array
const HEAD = result[0]
console.log(HEAD); // => '7e516c2174b71c9edb24c9453e4e871369ef4ede'
```

## Raison d'être
Created the package primarily because of issues from a related [package](https://github.com/TJkrusinski/git-sha). The owner didn't bother to fix them so this package serve as a replacement and gives you more flexibility (all shas from HEAD to initial commit) without any mental overhead. perf average 200ms on electron (~= 9,460 shas)

> Super Light (5 sloc). No dependencies, no mental overhead, time saver.

## License
![](https://img.shields.io/badge/license-MIT-blue.svg) © [Mohamed Hayibor](https://github.com/mohamedhayibor)
