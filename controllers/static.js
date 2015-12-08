var express = require('express');
var router = express.Router()

// load page javascript
router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));
// load page
router.get('/', function(req, res){
  res.sendfile('layouts/app.html');
})

module.exports = router;
