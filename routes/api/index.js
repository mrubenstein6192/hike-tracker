const router = require('express').Router();

const hikeRoutes = require('./hike-routes');

router.use('/hikes', hikeRoutes);


module.exports = router;