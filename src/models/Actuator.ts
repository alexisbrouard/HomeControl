import mongoose from 'mongoose';

const { Schema } = mongoose;
enum ActuatorType{
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

const actuatorSchema = new Schema({
    type: {type: String, enum: ["BLINDS", "LIGHT"]},
    designation: String,
    state: Boolean
});

const actuator = mongoose.model("Actuator", actuatorSchema);

export default actuator;