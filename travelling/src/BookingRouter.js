const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Booking = require('./Booking');

const connectionString = 'mongodb+srv://nencyp1604:Dynrac-zebboh-9biqja@cluster0.lqxeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/MyProject';

mongoose.connect(connectionString).then(() => {
    console.log("Connection Established With Cloud...");
    const app = express();

    // Get All
    app.get('/bookings',async(req,res) => {
        const data = await Booking.find();
        res.send(data);
    })
    // Get By Id
    app.get('/bookings/:name',async(req,res) => {
        const data = await Booking.findOne({name:req.params.name});
        res.send(data);
    })

    // Create
    app.post('/bookings',async(req,res) => {
        const book = new Booking(req.body);
        const data = await book.save();
        res.send(data);
    })

    // Delete
    app.delete('/bookings/:name',async(req,res) => {
        const data = await Booking.deleteOne({name:req.params.name});
        res.send(data);
    })

    // Update
    app.put('/bookings/:name',async(req,res) => {
        const book = await Booking.findOneAndUpdate({name:req.params.name})
        res.send(data);
    })

    app.listen(3001,()=>{
        console.log("Server Started on Port 3001...");
    })
})