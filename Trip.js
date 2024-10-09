const mongoose = require('mongoose');
const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  destination: { type: String, required: true },
  budget: { type: Number },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
module.exports = mongoose.model('Trip', TripSchema);
