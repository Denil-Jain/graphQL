import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import  db  from "./_db.js";

// Schema types
import {typeDefs} from "./schema.js";

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find(game => game.id === args.id)
        },
        authors() {
            return db.authors
        }, 
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id)
        },
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(review => review.game_id === parent.id)
        }
    },
    Mutation:{
        deleteGame(_, args){
            const game = db.games.find(game => game.id === args.id)
            db.games = db.games.filter(game => game.id !== args.id)
            return db.games
        },
        deleteReview(_, args){
            const review = db.reviews.find(review => review.id === args.id)
            db.reviews = db.reviews.filter(review => review.id !== args.id)
            return review
        },
        deleteAuthor(_, args){
            const author = db.authors.find(author => author.id === args.id)
            db.authors = db.authors.filter(author => author.id !== args.id)
            return author
        },
        addGame(_, args){
            const game = {
                id: String(db.games.length + 1),
                title: args.title,
                platform: args.platform
            }
            db.games.push(game)
            return game
        }
    }
}

// Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

const { url } = await startStandaloneServer( server, {
    listen: { port: 4000} 
});

console.log(`Server ready at ${url}`);