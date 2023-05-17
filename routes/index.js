var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  //render ra file index.hbs (trong thu muc views)
  res.render('index');
})
router.get('/cloud',(req, res) => {
  res.render('cloud');
});
router.get('/seagame', (req, res)=>{
  res.render('seagame');
})
module.exports = router;
