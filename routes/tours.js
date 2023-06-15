const express = require('express');
const {
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
  createTour,
  getTopThree,
} = require('../controllers/tourController');

const router = express.Router();

router.route('/get-top-3').get(getTopThree, getAllTours);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
