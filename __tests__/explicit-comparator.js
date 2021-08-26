const rule = require('../lib/rules/explicit-comparator.js');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('explicit-comparator', rule, {
  valid: [
    {
      code: `var sorted = [1,10,100].sort(function(a,b) { return a - b })`
    }
  ],

  invalid: [
    {
      code: `var sorted = [1,10,100].sort()`,
      errors: [{message: "Use a comparator argument when calling Array.prototype.sort"}],
    }
  ],
});