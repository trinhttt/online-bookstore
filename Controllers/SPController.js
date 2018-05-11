/**
 * Created by tutrinh on 5/11/18.
 */
var express = require('express');
var SPRePo = require('../repos/SPRePo');

var router = express.Router();

router.get('/', (req, res) => {
    SPRePo.loadAll().then(rows => {
        var vm = {
            Book: rows,
            NhaSX: rows,
            Loai: rows
        };
        res.render('SP/index', vm);
    });
});





module.exports = router;