import mongoose from 'mongoose';

const { Schema } = mongoose;

const sensorSchema = new Schema({
    type: String,
    designation: String,
    rawValue: Number
});

module.exports = mongoose.model("Sensor", sensorSchema)