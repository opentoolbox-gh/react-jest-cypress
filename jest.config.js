/**@type {import('jest').Config}*/
export default {
    testMatch: ['**/__tests__/**/*.test.(js|ts)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./__tests__/setupTests.ts'],
    testEnvironment: 'jsdom',
  };
  