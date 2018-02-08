'use strict';

exports.handler = (event, context, callback) => {
    
    console.log("isproduction",process.env.ISPRODUCTION+"");
    console.log("debug",process.env.DEBUGE+""); 
    var response = {
        statusCode: 200,
        body: JSON.stringify("test "+event.name)
    };
    callback(null, response);

};
