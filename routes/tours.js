const express = require('express');
const {
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
  createTour,
  checkId,
  checkBody,
} = require('../controllers/tourController');

const router = express.Router();

router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
