//import Hike model
const { Hike, User } = require('../models');
const handle = require('../utils/promise-handler');

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
const getHikeById  = async (req, res) => {
  const [hikeFindErr, hikeData] = await handle(Hike.findById(req.params.id));

  if (hikeFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(hikeData) 
};


// this runs when POST /api/hikes is hit
//req.body => {hikeID: "", name: "", location: "", legnth in miles: "", time to complete: "", diffculty: "", dogs seen: "", overall experience: "" }
const saveHike =  async (req, res) => {
  const [hikeErr, hikeData] = await handle(Hike.create(req.body));

  if (hikeErr) {
    console.log(hikeErr);
    return res.json(hikeErr);
  };
  
  return User.findOneAndUpdate(
    {
      _id: req.user._id
    },
    {
      $push: { hikes: hikeData._id }
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
const removeHike = async (req, res) => {
  const [hikeFindErr, hikeData] = await handle(Hike.findByIdAndDelete(req.params.id));

  if (hikeFindErr) {
    return res.status(500).json(hikeFindErr)
  };

  // delete hike from User schema
  const [userFindErr, userData] = await handle(Hike.findByIdAndUpdate(
    req.user._id,
    {
      $pull: {
        hikes: req.params.id
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
  getSavedHikes,
  saveHike,
  removeHike,
  getHikeById
}