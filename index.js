var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var book = require('./Models/book')
var bookController = require('./Controllers/homeController')
require('mongoose-type-url')
require("dotenv").config();

app.set("view engine", "ejs")
app.set("port", process.env.PORT)

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json())
var uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true})

var db = mongoose.connection

db.once("open", () => {
    console.log("MongoDB successfully connected")
});

app.get(
    "/booklist",
    bookController.getAllBooks,
    (req, res, next) => {
      console.log(req.data);
      res.render("books", { books: req.data });
    }
  );
  
  app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

/* book.create(
    {
        id: "Book1",
        Name: "Ranitat",
        AuthorName: "Harmanjeet",
        Description: "In this book, the author has written about nature, ancient life of Panjab and life's struggles.",
        BookImage: "Ranitat" 
    },
    {
        id: "Book2",
        Name: "The Alchemist",
        AuthorName: "Paulo Coehlo",
        Description: "The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
        BookImage: "alchemist" 
    },
    {
        id: "Book3",
        Name: "The Power of Your Subconscious Mind",
        AuthorName: "Joseph Murphy",
        Description: "The Power Of Your Subconscious Mind is a spiritual self-help classic, which teaches you how to use visualization and other suggestion techniques to adapt your unconscious behavior in positive ways.",
        BookImage: "power" 
    },
    function (error, savedDocument) {
        if (error) console.log(error)
        console.log(savedDocument)
    }
);
 */