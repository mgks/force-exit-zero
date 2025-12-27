# exit-zero

Force a command to exit with code 0 (success).

**The Problem:** Your CI fails because a linter found a warning, or a non-critical script returned exit code 1. You try adding `|| true` but it doesn't work consistently across Windows/Linux shells.

**The Solution:** `exit-zero` runs your command, streams the output (colors preserved), and **always** reports success to the OS.

<a href="https://www.npmjs.com/package/exit-zero"><img src="https://img.shields.io/npm/v/exit-zero.svg?style=flat-square&color=007acc" alt="npm version"></a>
<a href="https://bundlephobia.com/package/exit-zero"><img src="https://img.shields.io/bundlephobia/minzip/exit-zero?style=flat-square" alt="size"></a>
<a href="https://www.npmjs.com/package/exit-zero"><img src="https://img.shields.io/npm/dt/exit-zero.svg?style=flat-square&color=success" alt="npm downloads"></a>
<a href="https://github.com/mgks/exit-zero/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mgks/exit-zero.svg?style=flat-square&color=blue" alt="license"></a>
<a href="https://github.com/mgks/exit-zero/stargazers"><img src="https://img.shields.io/github/stars/mgks/exit-zero?style=flat-square&logo=github" alt="stars"></a>

## Install

```bash
npm install exit-zero
```

## Usage

### In `package.json` scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:ci": "exit-zero npm run lint"
  }
}
```

### In GitHub Actions / CI

```yaml
steps:
  - run: npx exit-zero npm run test:flaky
```

### CLI

```bash
$ exit-zero ls --unknown-flag
ls: unrecognized option '--unknown-flag'
# (The command failed, but the process exited with 0)
```

## Why not `|| true`?
*   `|| true` doesn't work in standard Windows cmd.exe.
*   `|| true` can be confusing in complex `npm run` chains.
*   `exit-zero` is explicit: you are intentionally suppressing the failure.

## License

MIT

> **{ github.com/mgks }**
> 
> ![Website Badge](https://img.shields.io/badge/Visit-mgks.dev-blue?style=flat&link=https%3A%2F%2Fmgks.dev) ![Sponsor Badge](https://img.shields.io/badge/%20%20Become%20a%20Sponsor%20%20-red?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fsponsors%2Fmgks)