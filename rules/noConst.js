module.exports = {
  meta: {
    docs: {
      description: "Use `let` declarations to bind names to values",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code", // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create(context) {
    let sourceCode = context.getSourceCode()

    return {
      VariableDeclaration(node) {
        if (node.kind === "const") {
          let token = sourceCode.getFirstToken(node)

          context.report({
            message: `prefer \`let\` over \`${
              node.kind
            }\` to declare value bindings`,
            node,
            fix(fixer) {
              return fixer.replaceText(token, "let")
            },
          })
        }
      },
    }
  },
}
