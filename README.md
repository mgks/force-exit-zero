# Node.js Package Template 📦

A practical template for building and publishing Node.js packages and CLIs to npm, with GitHub Actions, OIDC publishing, and sane defaults.

  <a href="https://www.npmjs.com/package/package-name"><img src="https://img.shields.io/npm/v/package-name.svg?style=flat-square&color=007acc" alt="npm version"></a>
  <a href="https://bundlephobia.com/package/package-name"><img src="https://img.shields.io/bundlephobia/minzip/package-name?style=flat-square" alt="size"></a>
  <a href="https://www.npmjs.com/package/package-name"><img src="https://img.shields.io/npm/dt/package-name.svg?style=flat-square&color=success" alt="npm downloads"></a>
  <a href="https://github.com/mgks/package-name/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mgks/package-name.svg?style=flat-square&color=blue" alt="license"></a>
  <a href="https://github.com/mgks/package-name/stargazers"><img src="https://img.shields.io/github/stars/mgks/package-name?style=flat-square&logo=github" alt="stars"></a>

## Use this template

### 1. Create the repo
- Click **Use this template** on GitHub.
- Name it something sensible, for example `package-name`.
- Clone it locally.

### 2. Set package metadata
Edit `package.json` and update the identity:

### 3. Rename the CLI

* Rename `bin/my-package.js` to your package name.
* Update the `bin` field in `package.json`.
* Adjust help text and examples inside the file.

### 4. Write the code

* Library logic lives in `src/`.
* Keep `src/index.js` as the public API.
* Avoid exporting internals, use `exports`.

### 5. Test locally

```bash
npm install -g .
package-name --help
```

### 6. Publish

* Push to GitHub.
* Create a GitHub Release (tag `v0.1.0`).
* GitHub Actions publishes to npm using OIDC.

## Why this exists

Because npm packages should be easy to ship, hard to break, and boring to maintain.

## License

MIT

> **{ github.com/mgks }**
> 
> ![Website Badge](https://img.shields.io/badge/Visit-mgks.dev-blue?style=flat&link=https%3A%2F%2Fmgks.dev) ![Sponsor Badge](https://img.shields.io/badge/%20%20Become%20a%20Sponsor%20%20-red?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fsponsors%2Fmgks)
