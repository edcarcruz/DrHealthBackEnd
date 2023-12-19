const router = require('express').Router();
// all functions/methods from people's controller's index.js
const { illnessCtrl } = require('../controllers');

router.get('/', illnessCtrl.getIllness);
router.post('/', illnessCtrl.createIllness);
router.put('/:id', illnessCtrl.updateIllness);
router.delete('/:id', illnessCtrl.deleteIllness);


module.exports = router;