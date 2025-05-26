// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
// 1. Enable Metro support for symlinks and package exports
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
