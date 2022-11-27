

module.exports = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {
    "./Module": "./src/remote-entry.ts",
  },
  
};

