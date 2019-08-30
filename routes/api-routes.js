// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // GET route for getting all flashcards
    app.get("/api/flashcards", function(req, res){
        // findAll returns all entries for a table when used with no options
        db.Flashcard.findAll({}).then(function(dbFlashcard){
            // We have access to the flashcards as an argument inside of the callback function
      res.json(dbFlashcard);
        })
    })

    //POST route for saving new flashcard
    app.post("/api/flashcards", function (req, res){
        // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
        db.Flashcard.create({
            question: req.body.question,
            answer: req.body.answer
        }).then(function(dbFlashcard){
            res.json(dbFlashcard);
        })
        .catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
              res.json(err);
            });
    })
}