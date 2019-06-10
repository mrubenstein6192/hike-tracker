const router = require('express').Router();
const authCheck = require('../../middleware/authentication');

const { getPlannedHikes, planHike, removePlannedHike, getPlannedHikeById} = require ('../../controllers/planned-controller');

// router.use(authCheck);
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
