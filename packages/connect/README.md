# Trezor Connect API version 9.0.0-beta.1

[![Build Status](https://github.com/trezor/trezor-suite/actions/workflows/connect-test.yml/badge.svg)](https://github.com/trezor/trezor-suite/actions/workflows/connect-test.yml)
[![NPM](https://img.shields.io/npm/v/@trezor/connect.svg)](https://www.npmjs.org/package/@trezor/connect)
[![Known Vulnerabilities](https://snyk.io/test/github/trezor/connect/badge.svg?targetFile=package.json)](https://snyk.io/test/github/trezor/trezor-suite?targetFile=packages/connect/package.json)

Trezor Connect is a platform for easy integration of Trezor into 3rd party services. It provides API with functionality to access public keys, sign transactions and authenticate users. User interface is presented in a secure popup window served from `https://connect.trezor.io/9/popup.html`

-   [Integration](docs/index.md)
-   [Development](https://wiki.trezor.io/Developers_guide:Trezor_Connect_API)

## Issues

Please report any issues directly in our [Trezor Suite monorepo](https://github.com/trezor/trezor-suite/issues) and apply the `connect` label.

## Versions

### Version 9+ (experimental)

Since version 9 we are adopting a new versioning strategy. With every release, we are going to update two urls

-   A] The latest release will always be available on https://connect.trezor.io/9/trezor-connect.js.
-   B] For those who like to have more control over their dependencies, there will be also a new url created in form of https://connect.trezor.io/9.1../trezor-connect.js. Please note that these endpoints will not receive any further updates including security updates.

Version 9+ will be available as `@trezor/connect` and `@trezor/connect-web` npm packages.

### Version 8 (stable)

Currently, we are at version 8, which has an url https://connect.trezor.io/8/trezor-connect.js.

Version 8 is available as `trezor-connect` npm package.

If you would like to find out which version is deployed precisely simply run:

`curl -s https://connect.trezor.io/8/trezor-connect.js | grep VERSION`

With regards to this repo - All updates should go to current version branch, the previous releases are in corresponding branches. The gh-pages is the same older version, that is used at trezor.github.io/connect/connect.js, and it's there for backwards compatibility; please don't touch.

## Tests

For integration testing against trezord and emulator refer to [this document](./tests/README.md).
