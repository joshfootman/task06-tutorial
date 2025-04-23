import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServer } from '@apollo/server'
import { schema } from './schema/index.js'
import { wait } from './utils/wait.js'

const server = new ApolloServer({
  schema,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async (params) => {
    await wait()
    return params
  },
})
  .then(({ url }) => {
    console.log(`🚀 server ready at: ${url}`)
  })
  .catch((error) => {
    console.log(`💀 server failed to start`)
    console.error(error)
  })
