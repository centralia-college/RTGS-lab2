/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('movies-list', { title: 'Home' });
};
/* GET 'Addreview' page */
module.exports.addReview = function (req, res) {
    res.render('index', { title: 'AddReview' });
};
/* GET 'movieInfo' page */
module.exports.movieInfo = function (req, res) {
    res.render('index', { title: 'movieInfo' });
};