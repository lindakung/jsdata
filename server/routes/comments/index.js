'use strict'; 

var router = require('express').Router();
var controller = require('./comment.controller')


router.get('/', controller.index)


module.exports = router; 