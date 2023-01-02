const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const TrackAPI = require('./datasources/track-api')

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackAPI: new TrackAPI(),
      }
    },
  })

  // const { url, port } = await server.listen()
  // this is the way the code was before
  // const { url, port } = await server.listen();
  const { url } = await server.listen({ port: process.env.PORT || 4000 })

  console.log(`
      🚀  Server is running
      🔉  Listening on port
      📭  Query
    `)
}

startApolloServer(typeDefs, resolvers)
