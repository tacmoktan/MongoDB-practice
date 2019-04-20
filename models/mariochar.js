const mongoose = require('mongoose');       //loads mongoose
const { Schema } = mongoose;                // destruturing i.e. similar to Schema = mongoose.Schema

//create schema
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//create model
const MarioCharModel = mongoose.model('mariochar', MarioCharSchema );

module.exports = MarioCharModel;