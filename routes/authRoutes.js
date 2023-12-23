const router = require('express').Router();
// all functions/methods from people's controller's index.js
const { authCtrls } = require('../controllers');

router.post('/register', authCtrls.register);

router.post('/login', authCtrls.login);

router.post('/logout', authCtrls.logout);

module.exports = router;