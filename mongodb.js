import { MongoClient } from "mongodb";

import { uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

// let query = {title: { $regex: /terminator/i }}
// let movieArray = await moviesCollection.find(query).limit(3).toArray()
// let firstMovie = movieArray[0]

// for (let i=0; i < movieArray.length; i++) {
//     console.log(movieArray[i].title)
// }
// // movieArray[i]
// // console.log(firstMovie.title)
// console.log(`There are ${movieArray.length} movies`)

const newMovie = {
    title: "The Boca Code story",
    rating: "R",
    genre: ['Comedy'],
    relaeaseDate: "2022/12/16",
}
const results = await moviesCollection.insertOne(newMovie)
console.log("Results of Insert", results)
