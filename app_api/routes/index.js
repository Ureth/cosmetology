var express = require('express');
var router = express.Router();
var ctrlProcedures = require('../controllers/procedures');

router.get('/procedures', ctrlProcedures.proceduresList);
router.get('/procedures/:procedureid', ctrlProcedures.proceduresReadOne);

module.exports = router;