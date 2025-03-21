import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock the environment variables
process.env = {
  ...process.env,
  NEXT_PUBLIC_NAVER_CLIENT_ID: 'test-client-id',
  NEXT_PUBLIC_NAVER_CALLBACK_URL: 'http://localhost:3000/auth/redirect',
  NEXT_PUBLIC_NAVER_STATE_STRING: 'test-state-string',
  NAVER_CLIENT_SECRET: 'test-client-secret',
}; 