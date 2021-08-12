const { UserInputError } = require('apollo-server-express');
const data = require('./MOCK_DATA.json');

const resolvers = {
    Query: {
        hello: () => {
            return "Heloo world"
        },
        getAllUser: async () => {
            return data;
        },
    },
    Mutation: {
        createUser: async   (parent , args, context, info) => {
            const { id , firstName , lastName , email , password } = args.user
            const user = data.push({id , firstName , lastName , email , password});
            return data;
        }
    }
};

module.exports = resolvers;