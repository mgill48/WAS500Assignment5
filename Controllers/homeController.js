var book = require('../Models/book');

exports.getAllBooks = (req, res, next) => {
    book.find({}, (error, books) => {
        if (error) next (error);
        req.data = books;
        next();
    })
}