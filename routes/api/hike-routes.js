const router = require('express').Router();
const authCheck = require('../../middleware/authentication');

const { getSavedHikes, saveHike, removeHike, getHikeById} = require ('../../controllers/hike-controller');

// // Get and Post at api/hikes
// router.use(authCheck);

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
