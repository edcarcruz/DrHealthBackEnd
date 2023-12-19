const router = require('express').Router();
const illnessRoute = require('./illnessRoutes');

router.use('/illness', illnessRoute);

module.exports = router;