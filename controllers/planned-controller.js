const { Planned, User } = require('../models');
const handle = require('../utils/promise-handler');

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
const getPlannedHikeById  = async (req, res) => {
  const [plannedFindErr, plannedData] = await handle(Planned.findById(req.params.id));

  if (plannedFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(plannedData) 
};


// this runs when POST /api/hikes is hit
//req.body => {hikeID: "", name: "", location: ""
const planHike =  async (req, res) => {
  const [plannedErr, plannedData] = await handle(Planned.create(req.body));

  if (plannedErr) {
    console.log(plannedErr);
    return res.json(plannedErr);
  };
  
  return User.findOneAndUpdate(
    {
      _id: req.user._id
    },
    {
      $push: { plannedHikes: plannedData._id }
    },
    {
      new: true
    },
    {
      hikeSaved: true
    }
  )
    .then((userInfo) => {
      if (userInfo !== null) {
        return res.json(userInfo);
      };
    })
    .catch((err) => {
      return res.json(err);
    });
};

//this will run when DELETE /api/hikes/:id is hit
const removePlannedHike = async (req, res) => {
  const [plannedFindErr, plannedData] = await handle(Planned.findByIdAndDelete(req.params.id));

  if (plannedFindErr) {
    return res.status(500).json(plannedFindErr)
  };

  // delete hike from User schema
  const [userFindErr, userData] = await handle(Planned.findByIdAndUpdate(
    req.user._id,
    {
      $pull: {
        plannedHikes: req.params.id
      }
    },
    {
      new: true
    }
  ));

  if (userFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(userData) 

};

module.exports = {
  getPlannedHikes,
  planHike,
  removePlannedHike,
  getPlannedHikeById
}