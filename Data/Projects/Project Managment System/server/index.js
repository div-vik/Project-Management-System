require('dotenv').config();
const express = require('express');
const color = require('colors');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const connectDB = require('./config/db');
const port = 5000;

const app = express();

// connect to DB
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, console.log(`Server running on port ${port}`));