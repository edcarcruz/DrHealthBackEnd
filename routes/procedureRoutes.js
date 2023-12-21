const router = require('express').Router();
// all functions/methods from people's controller's index.js
const { procedureCtrl } = require('../controllers');

router.get('/', procedureCtrl.getProcedure);
router.post('/', procedureCtrl.createProcedure);
router.put('/:id', procedureCtrl.updateProcedure);
router.delete('/:id', procedureCtrl.deleteProcedure);


module.exports = router;