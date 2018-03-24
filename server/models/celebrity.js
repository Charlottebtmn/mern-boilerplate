const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'The name is required']
  },
  lastName: {
    type: [String],
    required: [true, 'The lastName is required']
  },
  occupation: {
    type: String,
    required: [true, 'The occupation is required']
  },
  pictureUrl: String,
  conversationSteps: [{
    id: Number,
    options: [{
      value: Number,
      label: String,
      trigger: Number
    }],
    message: String,
    trigger: Number
  }]
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
