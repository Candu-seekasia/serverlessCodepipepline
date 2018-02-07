'use strict';
console.log('CodePipeline sample');

var time = require('time');


exports.handler = (event, context, callback) => {
	 var config = {
        user: '',
        password: '',
        server: '', 
        database: '' 
    };

	var currentTime = new time.Date();
	currentTime.setTimezone("America/Los_Angeles");
    var result = 'The time1 is '+ currentTime.toString();
    var response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };
    callback(null, response);

   
    
};
