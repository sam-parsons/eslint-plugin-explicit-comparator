module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Use of Array.prototype.sort must be accompanied by comparator argument",
        category: 'Best Practices',
        recommended: false,
      },
    },
  
    create: function(context) {
      return {
          CallExpression(node) {
            if (node.arguments.length === 0 
              && node.callee.object.type === 'ArrayExpression' 
              && node.callee.property.name === 'sort')
            context.report({
              node,
              message: "Use a comparator argument when calling Array.prototype.sort",
            })
          }
      }
    },
  }