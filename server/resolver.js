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
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review)=>review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review)=>review.game_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.author_id)
          },
          game(parent) {
            return db.games.find((g) => g.id === parent.game_id)
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
//############## client sample code of  realtion between game,author,review ############
// query Author($gameId: ID!) {
//     game(id: $gameId) {
//       id
//       title
//       platform
//       reviews {
//         author {
//           id
//         }
//       }
//     }
//   }

//   query Query($reviewId: ID!) {
//     review(id: $reviewId) {
//       game {
//         id
//         platform
//         reviews {
//           author {
//             name
//             id
//             reviews {
//               author {
//                 id
//                 name
//               }
//             }
//           }
//         }
//       }
//       author {
//         id
//         reviews {
//           author {
//             id
//           }
//         }
//       }
//     }
//   }