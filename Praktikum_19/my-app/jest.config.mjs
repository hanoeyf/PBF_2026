import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
    testEnvironment: "jsdom",
    modulePaths: ['<rootDir>/src/'],
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
},

}


export default createJestConfig(config)