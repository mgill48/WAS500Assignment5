var book = require('../Models/book');

exports.getAllBooks = (req, res, next) => {
    book.find({}, (error, books) => {
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