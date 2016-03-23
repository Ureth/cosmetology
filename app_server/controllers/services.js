/* GET 'servises' page */
module.exports.services = function(req, res){
  res.render('index', { title: 'Services' });
};

/* GET 'procedure' page */
module.exports.procedure = function(req, res){
  res.render('index', { title: 'Procedure' });
};