export default {
    preset: "ts-jest",
    testEnvironment: 'node',
    testMatch: [
        '<rootDir>/src/**/*.test.js',
        '<rootDir>/src/**/*.test.jsx',
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['node_modules', 'Api', 'src/store', 'src/utils'],
    reporters: ['default', 'jest-junit'],
    globals: { 'ts-jest': { diagnostics: false } },
    transform: {},
  };