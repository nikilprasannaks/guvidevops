module.exports = {
  reporters: [
    "default",
    [ "jest-junit", { outputDirectory: "./reports/junit", outputName: "js-test-results.xml" } ]
  ],
};
