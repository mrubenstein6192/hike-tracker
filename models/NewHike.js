const mongoose = require('mongoose');

const { Schema } = mongoose;

const HikeSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true 
  },
  date: {
    type: String
  },
  distance: {
    type: Number
  },
  time: {
    type: String
  },
  difficulty: {
    type: String
  },
  dogs: {
    type: Number
  },
  experience: {
    type: String
  }

});

const Hike = mongoose.model('hike', HikeSchema);

module.exports = Hike;