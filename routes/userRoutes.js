const express = require('express')
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.addUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;