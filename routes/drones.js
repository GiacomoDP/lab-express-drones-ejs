const express = require('express');
const router = express.Router();

// require the Drone model here
//const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")
//const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones-ejs";



router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones)=>{
    console.log("drones onformations", drones)
    res.render("./drones/list", {drones})
  })
  .catch(error => {console.log(error)})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const newDrone = await Drone.create(req.body)
    console.log('new drone created:', newDrone)
    res.redirect("/drones")
  }catch (err){
    console.log("something went wrong:", err)
    res.render("drones/create-form")
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
