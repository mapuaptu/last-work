module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
