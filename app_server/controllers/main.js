/* GET home page */
module.exports.index = function(req, res){
  renderMainpage(req, res);
};

var renderMainpage = function(req, res){  
  res.render('index', {title: 'Main page'})
};

