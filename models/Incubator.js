const mongoose = require("mongoose");

const incubatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: String,
});

module.exports = mongoose.model("Incubator", incubatorSchema);
