/**
 * Created by user on 2018/3/8.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('fightTest', { title: 'Express' });
});

module.exports = router;
