const router = require('express').Router();
// all functions/methods from people's controller's index.js
const { illnessCtrl } = require('../controllers');
const { requireAuth } = require('../controllers/authCtrls.js');

router.get('/', illnessCtrl.getIllness);
router.post('/', illnessCtrl.createIllness);
router.put('/:id', illnessCtrl.updateIllness);
router.delete('/:id', illnessCtrl.deleteIllness);


module.exports = router;