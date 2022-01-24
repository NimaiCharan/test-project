const router = require('express').Router();


var {stutiController, testController1, getData, postData, postman} = require('../controller/test');


router.get('/bijaya', stutiController);
router.get('/nimai', testController1);
router.get('/getData',getData);
router.post('/postData',postData);
router.post('/postman', postman)

module.exports = router;

