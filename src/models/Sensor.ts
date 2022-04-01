import mongoose from "mongoose";

const { Schema } = mongoose;

enum SensorType {
  TEMPERATURE = "TEMPERATURE",
  HUMIDITY = "HUMIDITY",
  BARO = "BARO",
  PROXIMITY = "PROXIMITY",
}

const sensorSchema = new Schema({
  type: {
    type: String,
    enum: ["TEMPERATURE", "HUMIDITY", "BARO", "PROXIMITY"],
  },
  designation: String,
  rawValue: Number, Boolean,
});

sensorSchema.set("toJSON", { virtuals: true });
const sensor = mongoose.model("Sensor", sensorSchema);

export default sensor;
