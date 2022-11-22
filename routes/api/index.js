const router = require("express").Router();
// const loginRoutes = require("./calendar")
const loginRoutes = require("./login")

// router.login('/login', loginRoutes)
router.use('/login', loginRoutes)

module.exports = router;