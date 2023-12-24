/* 
    any request coming to /v1 is going to be pass through here, and redirect to the corrosponding router.
*/

const express = require('express');
const v1ApiRoutes = require('./V1/index');
const router = express.Router();

router.use('/v1', v1ApiRoutes);

module.exports = router;