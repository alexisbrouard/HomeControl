import mongoose from 'mongoose';

const { Schema } = mongoose;

const actuatorSchema = new Schema({
    type: String,
    designation: String,
    state: Boolean
});

module.exports = mongoose.model("Actuator", actuatorSchema)