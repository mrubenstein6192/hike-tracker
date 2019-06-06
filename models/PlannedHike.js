const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlannedSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true 
  }

});

const Planned = mongoose.model('planned', PlannedSchema);

module.exports = Planned;