<div align="center">
<h1>eslint-plugin-explicit-comparator</h1>

<p>custom rule requiring comparator argument in Array.prototype.sort</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Rule Details

Using the `sort` method without a comparator argument will coerce all elements in the array to strings and lexigraphically organized. When sorting an array of numbers or objects, it is advised to provide a comparator function; this plugin enforces that rule.

Examples of **incorrect** code for this rule:

```js
const sorted = [1, 10, 11, 100].sort(); // [1, 10, 100, 11]
```

Examples of **correct** code for this rule:

```js
const sorted = [1, 10, 100, 11].sort(function (a, b) {
  return a - b;
}); // [1, 10, 11, 100]
```

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-plugin-explicit-comparator
```

This library has a required `peerDependencies` listing for [`eslint`][eslint].

## Usage

Add `explicit-comparator` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["explicit-comparator"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "explicit-comparator/explicit-comparator": "warn"
  }
}
```

## Further Reading

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/sam-parsons/eslint-plugin-explicit-comparator/node-ci?logo=github&style=flat-square
[build]: https://github.com/sam-parsons/eslint-plugin-explicit-comparator/actions?query=workflow%3Anode-ci
[coverage-badge]: https://img.shields.io/codecov/c/github/sam-parsons/eslint-plugin-explicit-comparator.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/eslint-plugin-explicit-comparator.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-plugin-explicit-comparator
[license-badge]: https://img.shields.io/npm/l/eslint-plugin-explicit-comparator.svg?style=flat-square
[license]: https://github.com/sam-parsons/eslint-plugin-explicit-comparator/blob/main/LICENSE

[eslint]: https://eslint.org
<!-- prettier-ignore-end -->
