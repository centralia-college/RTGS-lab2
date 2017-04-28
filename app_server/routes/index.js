var express = require('express');
var router = new express.Router();
var ctrlMovies = require('../controllers/movies');
var ctrlFaqs = require('../controllers/faqs');



/*Movies pages */
router.get('/', ctrlMovies.homelist);
router.get('/movie', ctrlMovies.movieInfo);
router.get('/movie/review/new', ctrlMovies.addReview);

/*FAQ pages */

router.get('/about', ctrlFaqs.about);
router.get('/contact', ctrlFaqs.contact);

module.exports = router;
