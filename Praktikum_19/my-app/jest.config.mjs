import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
    testEnvironment: "jsdom",
    modulePaths: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/jest.config.mjs',
        '!**/next.config.js',
        '!**/types/**',
        '!**/views/**',
        '!**/pages/api/**',

    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^.+\\.(css|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
      '^.+\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },

}


export default createJestConfig(config)