var express = require('express');
var router = express.Router();
var ctrlProcedures = require('../controllers/procedures');




router.get('/procedures', ctrlProcedures.proceduresList);
router.get('/procedures/face', ctrlProcedures.proceduresFace);
router.get('/procedures/body', ctrlProcedures.proceduresBody);
router.get('/procedures/head', ctrlProcedures.proceduresHead);

router.get('/prices', ctrlProcedures.proceduresList);

router.get('/procedures/:type/:procedureid', ctrlProcedures.proceduresReadOne);


module.exports = router;