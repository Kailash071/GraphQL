import db from "./db.js"

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        },
        game(_,args) {
            return db.games.find((game)=>game.id === args.id)
        },
        author(_,args) {
            return db.authors.find((author)=>author.id === args.id)
        },
        review(_,args) {
            return db.reviews.find((review)=>review.id === args.id)
        }
    }
}
export default resolvers;
//############## client sample code of games,authors,reviews ############
// query Authors {
//     games {
//       platform
//       id
//     }
//     reviews {
//       id
//       rating
//     }
//     authors {
//       verified
//       name
//       id
//     }
//   }
//############## client sample code of game,author,review ############
// query ExampleQuery($gameId: ID!, $reviewId: ID!, $authorId: ID!) {
//     game(id: $gameId) {
//       id,
//       title
//     }
//     review(id: $reviewId) {
//       id,
//       content
//     }
//     author(id: $authorId) {
//       id
//       name
//       verified
//     }
//   }  
// {
//     "gameId": 1,
//     "reviewId": 2,
//     "authorId": 3
//   }