module.exports = {
  rules: {
    "no-const": require("./rules/noConst"),
  },
  configs: {
    recommended: {
      rules: {
        "bruitt/no-const": 2,
      },
    },
  },
}
