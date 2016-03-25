var express      = require('express');
var router       = express.Router();
var ctrlMain     = require('../controllers/main');
var ctrlContacts = require('../controllers/contacts');
var ctrlServices = require('../controllers/services');
var ctrlAbout    = require('../controllers/about');
var ctrlPrices   = require('../controllers/prices');


/* GET home page. */
router.get('/', ctrlMain.angularApp);

/* GET contacts page */
router.get('/contacts', ctrlContacts.contacts);

/* GET services page */
router.get('/services', ctrlServices.services);
router.get('/services/procedure', ctrlServices.procedure);

/* GET about page */
router.get('/about', ctrlAbout.about);
router.get('/about/diplomas', ctrlAbout.diplomas);

/* GET prices page */
router.get('/prices', ctrlPrices.prices);


module.exports = router;
