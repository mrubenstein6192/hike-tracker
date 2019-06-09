//import Hike model
const { Hike } = require('../models');

// this runs when GET /api/hikes is hit
const getSavedHikes = (req, res) => {
  Hike.find({})
    .then(dbHikeData => res.json(dbHikeData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// /api/hikes/:id
function getHikeById(req, res) {
  Hike.findById(req.params.id)
  .then(dbHikeData => res.json(dbHikeData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}


// this runs when POST /api/hikes is hit
//req.body => {hikeID: "", name: "", location: "", legnth in miles: "", time to complete: "", diffculty: "", dogs seen: "", overall experience: "" }
const saveHike = (req, res) => {
  Hike.create(req.body)
    .then(dbHikeData => res.json(dbHikeData))
    .catch(err=> {
      console.log(err);
      res.json(err);
    });
};


//this will run when DELETE /api/hikes/:id is hit
const removeHike = (req, res) => {
  Hike.remove({
    _id: req.params.id
  })
    .then(dbHikeData => res.json(dbHikeData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

module.exports = {
  getSavedHikes,
  saveHike,
  removeHike,
  getHikeById
}