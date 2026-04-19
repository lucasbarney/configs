module.exports = {
  'type-empty': [2, 'never'],
  'type-case': [2, 'always', 'lower-case'],

  'subject-empty': [2, 'never'],
  'subject-max-length': [2, 'always', 72],
  'subject-full-stop': [2, 'never', '.'],

  'subject-case': [2, 'always', ['sentence-case']],
  'scope-case': [2, 'always', 'lower-case'],

  'body-leading-blank': [2, 'always'],
  'body-max-line-length': [2, 'always', 100],

  'footer-leading-blank': [2, 'always'],
  'footer-max-line-length': [2, 'always', 120],

  'type-enum': [
    2,
    'always',
    [
      'build',
      'chore',
      'feat',
      'fix',
      'revert',
      'perf',
      'refactor',
      'style',
      'test',
      'ci',
      'docs',
    ],
  ],
};
