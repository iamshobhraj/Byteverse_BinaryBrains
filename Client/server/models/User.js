const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roomNumber: {
    type: Number,
    required: true
  },
  rollNumber: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  issueAvenue: {
    type: String,
    required: true
  }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
