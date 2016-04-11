var mongoose = require('mongoose');
var Proc = mongoose.model('Procedure');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.proceduresList = function (req, res) {
        Proc
        .find({})
        .exec(function(err, procedures){
            if (!procedures) {
                sendJsonResponse(res, 404, {
                    "message": "procedureid not found"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, procedures);
        });
};

module.exports.proceduresFace = function (req, res) {
        Proc
            .find({type: "face"})
            .exec(function(err, procedures){
                if (!procedures) {
                    sendJsonResponse(res, 404, {
                        "message": "procedureid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, procedures);
            });
};

module.exports.proceduresBody = function (req, res) {
    Proc
        .find({type: "body"})
        .exec(function(err, procedures){
            if (!procedures) {
                sendJsonResponse(res, 404, {
                    "message": "procedureid not found"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, procedures);
        });
};

module.exports.proceduresHead = function (req, res) {
    Proc
        .find({type: "head"})
        .exec(function(err, procedures){
            if (!procedures) {
                sendJsonResponse(res, 404, {
                    "message": "procedureid not found"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, procedures);
        });
};


module.exports.proceduresReadOne = function (req, res) {
    if (req.params && req.params.procedureid) {
        Proc
            .findById(req.params.procedureid)
            .exec(function(err, procedure) {
                if (!procedure) {
                    sendJsonResponse(res, 404, {
                        "message": "procedureid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, procedure);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No locationid in request"
        });
    }
};