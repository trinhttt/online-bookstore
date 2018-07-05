var express = require('express');
var HomeRePo = require('../repos/HomeRePo');
var categoryRepo = require('../repos/categoryRepo');

var app = express();
var router = express.Router();

var p1 = HomeRePo.loadNewBook();
var p2 = HomeRePo.loadBestSale();
var p3 = HomeRePo.loadByViews();

router.get('/', (req, res) => {

    Promise.all([p1, p2, p3]).then(([newB, bestS, Views]) => {
        req.session.reUrl = "/"
        var vm = {
            newBook: newB,
            bestSaleBook: bestS,
            byViews: Views,
            url:"/"
        };
        res.render('index', vm);
    });
});



module.exports = router;