var mongoose = require('mongoose');

var procedureSchema = new mongoose.Schema({
    title: {type: String, required: true},
    duration: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: String, required: true}
});

mongoose.model('Procedure', procedureSchema);

