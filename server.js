const express = require('express');
const {ApolloServer , gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');



async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app: app });

    app.listen(4000 , () => console.log("server is running on port 4000"));

}

startServer();