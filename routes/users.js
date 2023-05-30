const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} = require('../controllers/userController');
const express = require('express');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

  module.exports = router;