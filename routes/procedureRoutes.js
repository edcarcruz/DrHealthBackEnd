const router = require('express').Router();
// all functions/methods from people's controller's index.js
const { procedureCtrl } = require('../controllers');
const { requireAuth } = require('../controllers/authCtrls.js');

router.get('/', procedureCtrl.getProcedure);
router.post('/', procedureCtrl.createProcedure);
router.put('/:id', procedureCtrl.updateProcedure);
router.delete('/:id', procedureCtrl.deleteProcedure);


module.exports = router;