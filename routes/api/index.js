const router = require('express').Router();
const userRoutes = require('./user-routes');

const hikeRoutes = require('./hike-routes');
const plannedRoutes = require('./planned-routes');

router.use('/hikes', hikeRoutes);
router.use('/plannedhikes', plannedRoutes);
router.use('/user', userRoutes)

module.exports = router;

