export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}
type Review{
    id: ID!
    rating: Int!
    comment: String!
    game: Game!
    author: Author!
}
type Author{
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
}
type Mutation {
    deleteGame(id: ID!): [Game]
    deleteReview(id: ID!): Review
    deleteAuthor(id: ID!): Author
    addGame(title: String!, platform: [String!]!): Game
}
`

// int, float, string, boolean, ID