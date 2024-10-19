# Apollo Server Setup with Resolvers and Schema

This guide provides an overview of setting up an Apollo Server with resolvers and schema definitions. The code snippet below demonstrates how to define queries, mutations, and relationships between different types.

## 1. Importing Required Modules

```javascript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
import { typeDefs } from "./schema.js";
```

- **ApolloServer**: Core server for handling GraphQL requests.
- **startStandaloneServer**: Utility to start the server in standalone mode.
- **db**: Mock database containing games, authors, and reviews.
- **typeDefs**: GraphQL schema definitions.

## 2. Defining Resolvers

Resolvers are functions that handle the logic for fetching data for each type in your schema.

```javascript
const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        game(_, args) {
            return db.games.find(game => game.id === args.id);
        },
        authors() {
            return db.authors;
        },
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id);
        },
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(review => review.game_id === parent.id);
        }
    },
    Mutation: {
        deleteGame(_, args) {
            const game = db.games.find(game => game.id === args.id);
            db.games = db.games.filter(game => game.id !== args.id);
            return db.games;
        },
        deleteReview(_, args) {
            // Implementation for deleteReview
        }
    }
};
```

- **Query**: Defines the read operations.
  - `games()`: Returns all games.
  - `game(_, args)`: Returns a specific game by ID.
  - `authors()`: Returns all authors.
  - `reviews()`: Returns all reviews.
  - `review(_, args)`: Returns a specific review by ID.
- **Game**: Defines relationships for the Game type.
  - `reviews(parent)`: Returns all reviews for a specific game.
- **Mutation**: Defines the write operations.
  - `deleteGame(_, args)`: Deletes a game by ID and returns the updated list of games.
  - `deleteReview(_, args)`: Placeholder for deleting a review by ID.

## 3. Starting the Server

To start the Apollo Server, use the following code:

```javascript
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
```

- **ApolloServer**: Initializes the server with schema and resolvers.
- **startStandaloneServer**: Starts the server on the specified port (default is 4000).

## Summary

This setup includes:

- Importing necessary modules.
- Defining resolvers for queries, mutations, and type relationships.
- Starting the Apollo Server.

Use this guide as a reference for setting up a basic Apollo Server with GraphQL resolvers and schema definitions.