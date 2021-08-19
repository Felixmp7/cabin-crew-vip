module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/components', '<rootDir>/pages'],
    moduleNameMapper: {
        '@components/(.*)': '<rootDir>/components/$1',
        '@pages/(.*)': '<rootDir>/pages/$1',
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['./**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
