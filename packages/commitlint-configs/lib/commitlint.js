const conventional = require('@commitlint/config-conventional').default;
const rules = require('./commitlint-rules');

module.exports = {
  parserPreset: conventional.parserPreset,
  prompt: conventional.prompt, // commitzen rules
  rules, // custom rules
};
