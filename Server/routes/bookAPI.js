const   express = require('express'), 
        bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const BookRouter = express.Router();

const Book = require('../schema/BooksSchema');

BookRouter.get('/bookslist',function (req, res) {
    Book.find(function (err, post) {
        
        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(post);
       
    });
});

module.exports = BookRouter;