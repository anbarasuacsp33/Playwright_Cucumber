// cucumber.js
module.exports = {
  default: {
    require: [
      'step_definitions/*.js',
      'support/hooks.js',
      'support/world.js'
    ],
    timeouts: {
      default: 5000,
      short: 2000,
      long: 10000
    },
    format: ['progress'],
    publishQuiet: true
  }
};
