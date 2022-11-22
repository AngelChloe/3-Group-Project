const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./../authentication");

// API Routes
router.use("/api", apiRoutes);

router.get('/destinations', function(){
    console.log("destinations")
});

// Authentication Routes
router.use("/auth", authRoutes);

module.exports = router;