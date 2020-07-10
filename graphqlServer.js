var { buildSchema } = require('graphql');
var { importSchema } = require('graphql-import');
var express = require('express');
var graphqlHTTP = require('express-graphql').graphqlHTTP;;
var cors = require('cors');
var schema = importSchema('./src/graphql/schema.graphql');
var resolvers = require('./src/graphql/resolvers');

var app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: resolvers,
    graphiql: true
}));

app.listen(3600, () => console.log("GraphQl Server Running on Prot 3600"));