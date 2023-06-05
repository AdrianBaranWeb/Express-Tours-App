const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour needs name!'],
    unique: true
  },
  riting: Number,
  price: {
    type: Number,
    require: [true, 'Tour needs price!'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
