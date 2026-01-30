const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const resolvers = require('./graph/resolvers');
const typeDefs = require('./graph/schema');

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const { url } = await startStandaloneServer(server, {
        listen:{port:4000}
    })
    console.log(`Server Start at ${url}`)
}
startServer()