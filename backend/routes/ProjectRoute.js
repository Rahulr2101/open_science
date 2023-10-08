const {Create} = require('../controllers/ProjectController')
const {View} = require('../controllers/ProjectController')
const {SearchByName}=require('../controllers/ProjectController')
const {SearchBYSkill}=require('../controllers/ProjectController')
const router = require("express").Router();

router.get('/view',View)
router.get('/search/name:id',SearchByName)
router.get('/search/skill:id',SearchBYSkill)
router.post('/create',Create)
module.exports = router;