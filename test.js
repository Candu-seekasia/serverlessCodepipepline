'use strict';

exports.handler = (event, context, callback) => {
	
    var response = {
        statusCode: 200,
        body: JSON.stringify("test")
    };
    callback(null, response);

   
    
};
