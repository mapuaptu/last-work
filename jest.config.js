module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js}', '!**/node_modules/**'],
};
