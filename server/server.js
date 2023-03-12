// const { ApolloServer, AuthenticationError } = require('apollo-server-express');
// const express = require('express');
// const mongoose = require('mongoose');
// // const jwt = require('jsonwebtoken');
// const { typeDefs, resolvers } = require('./schemas');

// const { User, Company } = require('./models');

// // Set up the Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // context: ({ req }) => {
//   //   // Get the user token from the headers
//   //   const token = req.headers.authorization || '';

//   //   // Try to retrieve the user with the token
//   //   try {
//   //     const { user } = jwt.verify(token, process.env.JWT_SECRET);
//   //     return { user };
//   //   } catch (err) {
//   //     throw new AuthenticationError('Invalid token');
//   //   }
//   // }
// });

// // Set up the Express app
// const app = express();

// // Apply the Apollo middleware to the Express app
// server.applyMiddleware({ app });

// // Connect to the database
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

// // Start the server
// app.listen({ port: process.env.PORT }, () => {
//   console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
// });







/////////////////// Apollo Version//////////////////////
///////////////////////////////////////////////////////////
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection.js');

const PORT = process.env.PORT || 3050;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create Apollo server with the GraphQL schemas
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port http://localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////
//////////////////RESTFUL API USING EXPRESS//////////////////////////////
/////////////////////////////////////////////////////////////////////////


// const path = require('path');

// const express = require('express');


// const PORT = process.env.PORT || 3050;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.use("/api", api)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });


// db.once('open', () => {
  
//   app.listen(PORT, () => {
//     console.log(`FINANCE APP IS RUNNING ON PORT => http://localhost:${PORT}`);
//   });
// });

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
