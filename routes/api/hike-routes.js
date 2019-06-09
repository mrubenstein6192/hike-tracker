const router = require('express').Router();

const { getSavedHikes, saveHike, removeHike, getHikeById} = require ('../../controllers/hike-controller');

// Get and Post at api/hikes
router 
  .route('/')
  .get(getSavedHikes)
  .post(saveHike);

  // Delete at /api/books/:id
  router 
    .route("/:id")
    .get(getHikeById)
    .delete(removeHike)


    module.exports = router;
