module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
    "config/(.*)": "<rootDir>/config/$1",
  },
  timers: 'fake',
  collectCoverage: true,
  coverageReporters: ["html"]
};
