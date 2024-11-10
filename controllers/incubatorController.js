const Incubator = require("../models/Incubator");

exports.getIncubators = async (req, res) => {
  try {
    const incubators = await Incubator.find();
    res.status(200).json(incubators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
