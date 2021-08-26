"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
  ],
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  overrides: [
    {
      files: ["tests/*.js"],
      env: { jest: true },
    },
  ],
};