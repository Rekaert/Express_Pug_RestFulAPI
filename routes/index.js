var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/*
router.post('/', function (req, res, next) {
  res.json({
    post: 'working'
  })
});

router.put('/', function (req, res, next) {
  res.json({
    put: 'working'
  })
});

router.delete('/', function (req, res, next) {
  res.json({
    delete: 'working'
  })
});
*/
module.exports = router;