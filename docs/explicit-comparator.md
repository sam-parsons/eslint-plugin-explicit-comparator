# eslint-plugin-explicit-comparator

## Rule Details

Using the `sort` method without a comparator argument will coerce all elements in the array to strings and lexigraphically organized. When sorting an array of numbers or objects, it is advised to provide a comparator function; this plugin enforces that rule.

Examples of **incorrect** code for this rule:

```js
const sorted = [1, 10, 100].sort();
```

Examples of **correct** code for this rule:

```js
const sorted = [1, 10, 100].sort(function (a, b) {
  return a - b;
});
```

## Further Reading

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
