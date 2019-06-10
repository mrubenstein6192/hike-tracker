const { Planned } = require('../models');

// this runs when GET /api/hikes is hit
const getPlannedHikes = (req, res) => {
  Planned.find({})
    .then(dbHikeData => res.json(dbHikeData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// /api/hikes/:id
function getPlannedHikeById(req, res) {
  Planned.findById(req.params.id)
  .then(dbHikeData => res.json(dbHikeData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}


// this runs when POST /api/hikes is hit
//req.body => {hikeID: "", name: "", location: ""
const planHike = (req, res) => {
  Planned.create(req.body)
    .then(dbHikeData => res.json(dbHikeData))
    .catch(err=> {
      console.log(err);
      res.json(err);
    });
};

//this will run when DELETE /api/hikes/:id is hit
const removePlannedHike = (req, res) => {
  Planned.remove({
    _id: req.params.id
  })
    .then(dbHikeData => res.json(dbHikeData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

module.exports = {
  getPlannedHikes,
  planHike,
  removePlannedHike,
  getPlannedHikeById
}