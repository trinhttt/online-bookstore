var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

var SPController = require('./Controllers/SPController');
var app = express();

var handlebars = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/_layouts"),
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.render('qly-sanpham');
});
app.use('/SP', SPController);
app.listen(3000);
