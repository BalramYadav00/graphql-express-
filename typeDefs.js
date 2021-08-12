const {gql} = require('apollo-server-express');

const typeDefs = gql`
   
    type User {
        id: ID,
        firstName: String,
        lastName: String,
        email: String,
        password: String
    }
    type Query {
        hello: String
        getAllUser: [User]
        createUser: [User]
    },

    input UserInput {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type Mutation {
        createUser (user: UserInput): User
    }
    
`;

module.exports = typeDefs;