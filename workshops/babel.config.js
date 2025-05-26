module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // nativewind setup
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Reanimated setup
      "react-native-worklets/plugin",
      // Unistyles setup
      ["react-native-unistyles/plugin"],
    ],
  };
};
