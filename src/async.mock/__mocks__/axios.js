export default {
  get: jest.fn((data) => Promise.resolve({ data })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
