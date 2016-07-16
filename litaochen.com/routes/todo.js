var express     = require('express'),
    router      = express.Router();


//get route to show main page
router.get('/', function(req, res) {
   res.render("todo");
});


//post route to add an todo item
router.post('/', function(req, res) {
    
});




//export router for final use
module.exports = router;
