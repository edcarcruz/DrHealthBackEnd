const router = require('express').Router();
// all functions/methods from people's controller's index.js
const { illnessCtrl } = require('../controllers');
const { requireAuth } = require("../controllers/authCtrls.js")

router.get('/', illnessCtrl.getIllness);
router.post('/', requireAuth, illnessCtrl.createIllness);
router.put('/:id', requireAuth, illnessCtrl.updateIllness);
router.delete('/:id', requireAuth, illnessCtrl.deleteIllness);


module.exports = router;