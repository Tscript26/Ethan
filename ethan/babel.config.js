module.exports = {
  presets: ["@vue/app", '@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};