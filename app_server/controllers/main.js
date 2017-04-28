/*GET home page */
module.exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};
var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/*GET home page */
router.get('/', ctrlMain.index);

module.exports = router;