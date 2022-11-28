var book = require('../Models/book');

exports.getAllBooks = (req, res, next) => {
    book.find({}, (error, books) => {
        if (error) next (error);
        req.data = books;
        next();
    })
}
exports.getBook1 = (req, res, next) => {
    book.find({id: "Book1"}, (error, books) => {
        if (error) next (error);
        req.data = books;
        next();
    }) 
}
exports.getBook2 = (req, res, next) => {
    book.find({id: "Book2"}, (error, books) => {
        if (error) next (error);
        req.data = books;
        next();
    }) 
}
exports.getBook3 = (req, res, next) => {
    book.find({id: "Book3"}, (error, books) => {
        if (error) next (error);
        req.data = books;
        next();
    }) 
}

exports.getSurvey = (req, res) => {
    res.render("Survey");
};
exports.getContact = (req, res) => {
    res.render("ContactUs");
};
exports.getHonesty = (req, res) => {
    res.render("Honesty");
};
exports.getIndex = (req, res) => {
    res.render("index");
};