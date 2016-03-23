/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

module.exports.diplomas = function(req, res){
  res.render('index', { title: 'Diplomas' });
};