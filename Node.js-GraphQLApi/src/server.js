require('dotenv').config()
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const resolvers = require('./graph/resolvers');
const typeDefs = require('./graph/schema');
const serverConnection=require('./DataBase/db')

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const { url } = await startStandaloneServer(server, {
        listen:{port:process.env.PROT}
    })
    console.log(`Server Start at ${url}`)
}
serverConnection()
startServer()