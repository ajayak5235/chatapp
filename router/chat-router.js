const express = require('express');


const userAuthenticate = require('../middleware/auth')
const userController = require('../controllers/chatcontroller');

const router = express.Router();

router.post('/chatmsg' ,userController.personalMsg); //, userAuthenticate.authenticate,


module.exports = router;
