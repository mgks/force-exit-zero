# force-exit-zero

**Force a command to exit with code 0 (success).**

<p>
  <img src="https://img.shields.io/npm/v/force-exit-zero.svg?style=flat-square&color=d25353" alt="npm version">
  <img src="https://img.shields.io/bundlephobia/minzip/force-exit-zero?style=flat-square&color=38bd24" alt="size">
  <img src="https://img.shields.io/npm/dt/force-exit-zero.svg?style=flat-square&color=success&color=38bd24" alt="npm downloads">
  <img src="https://img.shields.io/github/license/mgks/force-exit-zero.svg?style=flat-square&color=blue" alt="license">
</p>

Sometimes CI fails for the pettiest reasons, a linter warning or a non-critical script exiting with code 1. Shell hacks like `||` true are unreliable across Windows and Unix, so `force-exit-zero` runs your command, streams the output with colours intact, and always reports success back to the OS, no matter what the command does.

## Installation

```bash
npm install force-exit-zero
```

## Usage

### In `package.json` scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:ci": "force-exit-zero npm run lint"
  }
}
```

### In GitHub Actions / CI

```yaml
steps:
  - run: npx force-exit-zero npm run test:flaky
```

### CLI

```bash
$ force-exit-zero ls --unknown-flag
ls: unrecognized option '--unknown-flag'
# (The command failed, but the process exited with 0)
```

## Why not `|| true`?
*   `|| true` doesn't work in standard Windows cmd.exe.
*   `|| true` can be confusing in complex `npm run` chains.
*   `force-exit-zero` is explicit: you are intentionally suppressing the failure.

## License

MIT

> **{ github.com/mgks }**
> 
> ![Website Badge](https://img.shields.io/badge/Visit-mgks.dev-blue?style=flat&link=https%3A%2F%2Fmgks.dev) ![Sponsor Badge](https://img.shields.io/badge/%20%20Become%20a%20Sponsor%20%20-red?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fsponsors%2Fmgks)
