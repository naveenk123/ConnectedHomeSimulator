var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
routes= require('./Router/routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',path.join(__dirname,'public','views'));
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));
app.use('/',routes.route);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
