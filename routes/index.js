const router = require('express').Router();
const illnessRoute = require('./illnessRoutes');
const procedureRoute = require('./procedureRoutes');
const authRoutes = require('./authRoutes');

router.use('/illness', illnessRoute);
router.use('/procedure', procedureRoute);
router.use('/auth', authRoutes);


module.exports = router;