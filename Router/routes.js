var express = require('express'),
ctrl = require('./Controller');
var router = express.Router();
router.get('/',ctrl.home);
router.get('/devices',ctrl.devices);
router.get('/turnonoff',ctrl.TurnONOFF)

module.exports.route = router;
