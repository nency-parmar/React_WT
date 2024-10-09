const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    },
    destination: 
    {
        type: String,
        required: true
    },
    date: 
    {
        type: Date,
        required: true
    },
    createdAt: 
    {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', bookingSchema);


// module.exports = mongoose.model('student',schema)