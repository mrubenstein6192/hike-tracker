const router = require('express').Router();


const hikeRoutes = require('./hike-routes');
const plannedRoutes = require('./planned-routes');

router.use('/hikes', hikeRoutes);
router.use('/plannedhikes', plannedRoutes);

module.exports = router;

