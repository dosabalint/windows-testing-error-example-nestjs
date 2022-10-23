/* eslint-disable */
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  resolver: 'ts-jest-resolver',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
  },
  projects: [
    '<rootDir>/../../libs/apple',
    '<rootDir>/../../libs/banana',
    '<rootDir>/../../libs/cider',
  ],
  moduleNameMapper: {
    '@apple-lib/(.*)': '<rootDir>/../../libs/apple/$1',
    '@banana-lib/(.*)': '<rootDir>/../../libs/banana/$1',
    '@cider-lib/(.*)': '<rootDir>/../../libs/cider/$1',
  },
};
