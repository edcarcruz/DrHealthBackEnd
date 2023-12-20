const router = require('express').Router();
const illnessRoute = require('./illnessRoutes');
const procedureRoute = require('./procedureRoutes');

router.use('/illness', illnessRoute);
router.use('/procedure', procedureRoute);


module.exports = router;