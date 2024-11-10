const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const authRoutes = require("./routes/authRoutes");
const authRoutes = require('./routes/authRoutes');
const incubatorRoutes = require("./routes/incubatorRoutes");
const mentorRoutes = require("./routes/mentorRoutes");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/incubator", incubatorRoutes);
app.use("/api/mentor", mentorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
