import path from 'path'

export default {
  test: {
    environment: 'node',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './dist'),
      graphql: 'graphql/index.js',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
