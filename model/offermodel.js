const mongoose = require("mongoose");

const offerDarachema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  startingDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("offer", offerDarachema);