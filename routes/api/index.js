const router = require("express").Router();
// const loginRoutes = require("./calendar")
const loginRoutes = require("./login")

// router.use('/calendar', loginRoutes)
router.use('/login', loginRoutes)

module.exports = router;