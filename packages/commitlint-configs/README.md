## Usage guide

#### `@lucasbarney/commitlint-configs`

- With `Yarn` package manager. Run this command:

```bash
$ yarn add @commitlint/cli  @commitlint/cz-commitlint -D

## Custom configs
yarn add @lucasbarney/commitlint-configs -D

## Install Husky

yarn add husky -D

yarn husky init

```

- Add `commitlint.config.js` to (root) path.

```js
module.exports = {
  extends: ['@lucasbarney/commitlint-configs'],
};
```

- Add `Husky` scripts

```bash
## Trigger to linting commit messages
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg


## Trigger/hook To use "git commit" with Commitizen CLI

echo "exec < /dev/tty && node_modules/.bin/cz --hook || true" > .husky/prepare-commit-msg

```

- Add commitizen `config` to your package.json file:

```jsonc
{
  "scripts": {
    "prepare": "husky",
  },

  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint",
    },
  },
}
```
