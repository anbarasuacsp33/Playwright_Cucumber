module.exports = {
  default: {
    require: [
      'tests/hooks.js',
      'features/stepdef/*.js',
      
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    },
    publishQuiet: true,
    publish: true
  }
};
