const router = require('express').Router();
const Controller = require('../controllers');

router.post('/saveKey', Controller.saveKey);
router.get('/findKey/:id', Controller.findKey);
router.get('/getAll', Controller.getAll);
router.delete('/deleteKey/:id', Controller.deleteKey);
router.put('/updateKey', Controller.updateKey);

module.exports = router;