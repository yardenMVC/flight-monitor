const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors");
const FlightRouter = require("./routes/flightData"); 
require("dotenv").config();
const app = express();
//
app.use(cors());
app.use(express.json());
app.use("/api/FlightData", FlightRouter);
//
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connection to MongoDB is successful"))
.catch((err) => console.error("MongoDB Connection error:", err));

const port=process.env.PORT || 3000;
// start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});







  