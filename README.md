# [@jonahsnider/util](https://util.jonah.pw/)

A collection of simple, optimized utility functions that help you spend more time implementing real features instead of writing the same snippets over and over.

Written in TypeScript with strong typesafety in mind (more on that below).

Works in Node.js, mostly works in browsers.

**[View the docs here](https://util.jonah.pw/)**.

If you're considering using the library I recommend taking a glance at the docs to see if anything seems helpful to you.

[![Build Status](https://github.com/jonahsnider/util/workflows/CI/badge.svg)](https://github.com/jonahsnider/util/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Codecov](https://codecov.io/gh/jonahsnider/util/branch/main/graph/badge.svg)](https://codecov.io/gh/jonahsnider/util)

## Get started

```sh
yarn add @jonahsnider/util
# or
npm install @jonahsnider/util
```

then

```js
import {shuffle} from '@jonahsnider/util';
// or
import * as util from '@jonahsnider/util';

const {shuffle} = require('@jonahsnider/util');
// or
const util = require('@jonahsnider/util');
```

## Why you should use this library

There's 3 main benefits this library offers:

1. **Readability**

   Because JavaScript lacks a proper standard library, you will find yourself writing the same snippets again and again.
   Let's look at sorting an array in ascending order (low to high) as an example:

   ```js
   // Sort ascending
   array.sort((a, b) => a - b);
   ```

   As an experienced dev you've probably seen this snippet in some form hundreds of times before.
   If you're a beginner you might not even be able to tell if this is an ascending or descending sort without the comment.

   The alternative:

   ```js
   import {Sort} from '@jonahsnider/util';

   array.sort(Sort.ascending);
   ```

   If you were skimming through a file and saw this you can immediately understand what this code does.

   This library works perfectly with existing idiomatic JavaScript and doesn't force you to change the way you write code.

   (also - fun fact: the first snippet doesn't work with `bigint`s, [the second snippet does](https://util.jonah.pw/modules#Comparable))

2. **Safety**

   Writing your own snippets doesn't just slow you down, it can introduce bugs.

   Every function is tested with 100% coverage, ensuring bug-free code.

3. **Features**

   This library isn't just 1-liners you could copy-paste yourself.

   Want to do a binary search on an array? [We've got you covered](https://util.jonah.pw/modules#binarySearch).

   Combine a bunch of regular expressions into one? [No problem](https://util.jonah.pw/modules#regExpUnion).

   Need a deck of cards? [Only one import away](https://util.jonah.pw/modules#newDeck).

### TypeScript

In addition to all the useful functions this library provides, a major effort has been made to ensure the best possible experience for TypeScript users.

- Functions accept many types of arguments, either as a generic `T` or a union of related types like `number | bigint` (mostly useful in the math functions)
- `Iterable`s and `ArrayLike`s are used instead of `Array`s whenever possible, broader types ensure compatibility with your projects and let you avoid ugly type assertions
- When an array is needed, it's always `readonly T[]` unless mutation is required

There's also a few types exported that can be handy in certain situations (ex. [`NonEmptyArray`](https://util.jonah.pw/modules#NonEmptyArray) or [`Nullish`](https://util.jonah.pw/modules#Nullish)).

My personal favorite is the [`TypedEventEmitter`](https://util.jonah.pw/interfaces/typedeventemitter) which lets you ensure typesafety in event listeners.
