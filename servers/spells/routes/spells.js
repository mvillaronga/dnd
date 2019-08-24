var phb = require('../../../data/spells/spells-phb.json')

var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(phb);
});

module.exports = router;
