const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

// /api/listing/all
// get all todos from the signed in user
router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Listing.find({ author: req.user.id }, (err, todos) => {
        res.json(listing);
    });
});

// /api/listing/new
// add new todo, update the user to have todo id
router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
    const newListing = new db.Listing({
        author: req.user._id,
        listing: req.body.listing,
        details: req.body.details
    });

    newListing.save((err, newListing) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(req.user.id, { $push: { todos: newListing._id } }, (err, user) => {
            if (err) throw err;
            res.send(newListing, user);
        });
    });
});

// /api/todos/remove
// removed todo based on id, updates user
router.delete("/remove", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Todo.findByIdAndDelete(req.body.id, (err, todo) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(listing._id, { $pull: { 'todos': listing._id } }, { new: true }, (err, user) => {
            if (err) throw err;
            res.send(user);
        });
    });
});

// /api/todos/update
// update a todo based on id
router.put("/update", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Listing.findByIdAndUpdate(req.body.id, { listing: req.body.listing }, { new: true }, (err, listing) => {
        if (err) throw err;
        res.json(listing);
    });
});

module.exports = router;