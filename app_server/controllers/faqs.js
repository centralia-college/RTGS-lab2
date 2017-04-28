/*GET about page */
module.exports.about = function (req, res) {
    res.render('index', { title: 'About' });
};
/* GET 'contact' page */
module.exports.contact = function (req, res) {
    res.render('index', { title: 'Contact' });
};
/*var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

GET home page 
router.get('/', ctrlMain.index);

module.exports = router;*/