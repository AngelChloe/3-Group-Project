const router = require("express").Router();
const dbLogin = require("../../models/login")

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