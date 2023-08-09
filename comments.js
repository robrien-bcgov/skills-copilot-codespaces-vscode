// Create web server application to handle comments

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Comment } = require('../models/comment');

// Create a new comment
router.post('/', [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').notEmpty().withMessage('Email is required.'),
    body('comment').notEmpty().withMessage('Comment is required.')
], async (req, res) => {
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Send back a response with a bad request status code
        return res.status(400).send(errors);
    }

    // Create a new comment
    const comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    });

    // Save the comment to the database
    await comment.save();

    // Send back the comment in the response
    res.send(comment);
});

// Get all comments
router.get('/', async (req, res) => {
    // Get all comments from the database
    const comments = await Comment.find();

    // Send back the comments in the response
    res.send(comments);
});

// Export the router
module.exports = router;
