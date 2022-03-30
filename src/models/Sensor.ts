import mongoose from 'mongoose';

const { Schema } = mongoose;

const sensorSchema = new Schema({
    type: String,
    designation: String,
    rawValue: Number
});

const sensor = mongoose.model("User", sensorSchema);

export default sensor;