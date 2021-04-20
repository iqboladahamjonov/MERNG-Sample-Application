const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const { MONGODB } = require('./config')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers') //as it is in the index.js, we dont have to write anything more

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
})

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected')
    return server.listen({ port: 5000 })
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`)
  })
