/* GET 'prices' page */
module.exports.prices = function(req, res){
  res.render('index', { title: 'Prices' });
};