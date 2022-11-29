var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var app = express();
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var book = require('./Models/book')
var bookController = require('./Controllers/homeController')
require('mongoose-type-url')
require("dotenv").config();

app.set("view engine", "ejs")
app.set("port", process.env.PORT)
app.use(expressLayouts)
app.set("layout", "layout")
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json())
app.use(express.static(__dirname))
var uri = process.env.ATLAS_URI;
//console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true})

var db = mongoose.connection

db.once("open", () => {
    console.log("MongoDB successfully connected")
});
app.get("/", bookController.getIndex)
app.get("/home", bookController.getIndex)
app.get("/Index", bookController.getIndex)
app.get("/ContactUs", bookController.getContact)
app.get("/Honesty", bookController.getHonesty)
app.get("/Survey", bookController.getSurvey)

app.get("/books", bookController.getAllBooks,
    (req, res, next) => {
      res.render("books", { books: req.data });
    }
  );
app.get("/books/book1", bookController.getBook1,
  (req, res, next) => {
    res.render("Book1", { books: req.data });
  }
);
app.get("/book1", bookController.getBook1,
  (req, res, next) => {
    res.render("Book1", { books: req.data });
  }
);
app.get("/books/book2", bookController.getBook2,
  (req, res, next) => {
    res.render("Book2", { books: req.data });
  }
);
app.get("/book2", bookController.getBook2,
  (req, res, next) => {
    res.render("Book2", { books: req.data });
  }
);
app.get("/books/book3", bookController.getBook3,
  (req, res, next) => {
    res.render("Book3", { books: req.data });
  }
);
app.get("/book3", bookController.getBook3,
(req, res, next) => {
  res.render("Book3", { books: req.data });
}
);
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
  });
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

/* book.create(
    {
        id: "Book1",
        Name: "Ranitat",
        AuthorName: "Harmanjeet",
        Description: "In this book, the author has written about nature, ancient life of Panjab and life's struggles.",
        BookImage: "/public/images/ranitat.jpg" 
    },
    {
        id: "Book2",
        Name: "The Alchemist",
        AuthorName: "Paulo Coehlo",
        Description: "The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
        BookImage: "/public/images/alchemist.jpg" 
    },
    {
        id: "Book3",
        Name: "The Power of Your Subconscious Mind",
        AuthorName: "Joseph Murphy",
        Description: "The Power Of Your Subconscious Mind is a spiritual self-help classic, which teaches you how to use visualization and other suggestion techniques to adapt your unconscious behavior in positive ways.",
        BookImage: "/public/images/power.jpg" 
    },
    function (error, savedDocument) {
        if (error) console.log(error)
        console.log(savedDocument)
    }
);
 */