const express = require("express");
const router = express.Router();
const FlightData = require("../models/flight_monitor_models.js");



router.post("/", async (req, res) => {
    try {
      const newFlightData = new FlightData(req.body);
      try{
        await newFlightData.save();
      }
      catch(error){
        res.status(500).json({message:"database error:"+ error })
      }
      res.status(201).json({data : newFlightData});
    }
    catch(error)
    {
      
        res.status(400).json({message: "invalid input"})
    }
}
)
module.exports=router;