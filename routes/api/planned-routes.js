const router = require('express').Router();

const { getPlannedHikes, planHike, removePlannedHike, getPlannedHikeById} = require ('../../controllers/planned-controller');

// Get and Post at api/hikes
router
  .route('/')
  .get(getPlannedHikes)
  .post(planHike);

  
  // Delete at /api/books/:id
  router
    .route("/:id")
    .get(getPlannedHikeById)
    .delete(removePlannedHike);

    module.exports = router;
