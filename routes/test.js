const router = require('express').Router();


var {stutiController, testController1, getData, postData} = require('../controller/test');


router.get('/bijaya', stutiController);
router.get('/nimai', testController1);
router.get('/getData',getData);
router.post('/postData',postData);

module.exports = router;

