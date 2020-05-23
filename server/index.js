const express = require('express')
const { graphql, buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

/*
express and express-graphql lets us respond to HTTP requests
buildSchema is used to define the types 
cors lets us make requests from our Vue app (8080), to the server (4000)
*/
//  schema — what types of queries and types the server will use
const schema = buildSchema(`
    type Query {
        language: String
    }
`)
// an error will be thrown if language doesnt return a string 

// Resolver - Graph API endpoint which responds to all requests
const rootValue = {
    language: () => 'GraphQL'
}

const app = express()
app.use(cors())

// API route called by the client request - returns using the rootValue whatever
// value is requested
app.use('/graphql', graphqlHTTP({
    rootValue, schema, graphiql: true
}))

app.listen(4000, () => console.log("listening on port 4000"))