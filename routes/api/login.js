const router = require("express").Router();
const dbUsers = require("../../../models/Login")

router.get("/", function(req, res){
  dbLogin.find({})
.then(function(login) {
    res.json(login);
})
.catch(function(err) {
    return err;
});
});
        
module.exports = router;