const { Signup } = require("../controllers/AuthController");
const { Login } = require("../controllers/AuthController");
const router = require("express").Router();

router.post('/signup', Signup);
router.post('/login', Login)
module.exports = router;