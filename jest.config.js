module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: [
        '<rootDir>/jest-setup.ts',
    ],
    transform: {
        '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    },
    testEnvironment: 'jsdom',
};
