import { MongoClient } from "mongodb";

import { uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

let query = {title: { $regex: /terminator/i }}
let firstMovie = await moviesCollection.find(query).limit(3).toArray()
console.log(firstMovie)
