const fs = require('fs');
const path = require('path');

const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../dev-data/data/tours-simple.json'))
);

const checkId = (req, res, next, value) => {
  const serachId = +req.params.id;
  const tour = tours.find(({ id }) => serachId === id);

  if (!tour)
    return res.status(404).json({
      status: 'Fail',
      message: `Not found tour with id: ${serachId}`,
    });

  next();
};

const getAllTours = (_req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTourById = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour>',
    },
  });
};

const deleteTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Deleted tour>',
    },
  });
};

const createTour = (req, res) => {
  const id = tours[tours.length - 1].id + 1;
  const newTour = { ...req.body, id };

  tours.push(newTour);

  fs.writeFile(simpleTours, JSON.stringify(tours), (err) => {
    res.status(201).send({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  });
};

module.exports = {
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
  createTour,
  checkId
};
