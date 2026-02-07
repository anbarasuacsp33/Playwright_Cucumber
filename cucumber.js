module.exports = {
  default: {
    require: [
      'tests/hooks.js',
      'features/stepdef/*.js'
    ],
    format: [
      'progress'
    ],
    publishQuiet: true
  }
};
