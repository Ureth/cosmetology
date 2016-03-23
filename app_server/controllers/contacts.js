/* GET 'contacts' page */
module.exports.contacts = function(req, res){
  res.render('index', { title: 'Contacts' });
};