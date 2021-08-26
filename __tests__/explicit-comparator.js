const rule = require('../lib/rules/explicit-comparator.js');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('explicit-comparator', rule, {
  valid: [
    `[1, 10, 100]`,
    `["1", "10", "100"]`,
    `[true, true, false]`,
  ].map(array => ({code: `var sorted = ${array}.sort(function(a,b) { return a - b })`,})),

  invalid: [
    `[1, 10, 100]`,
    `["1", "10", "100"]`,
    `[true, true, false]`,
  ].map(array => ({code: `var sorted = ${array}.sort()`,
    errors: [{message: "Use a comparator argument when calling Array.prototype.sort"}]}
  ))
});