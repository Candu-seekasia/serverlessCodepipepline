'use strict';
console.log('CodePipeline sample');

var time = require('time');
var sql = require("mssql");
var config = {
        user: 'sqlCFSWebAppHK',
        password: 'O7nRxZLrWUTT8nlI2yYB',
        server: '10.90.10.76', 
        database: 'JobsDB_System' 
    };

exports.handler = (event, context, callback) => {
	

	var currentTime = new time.Date();
	currentTime.setTimezone("America/Los_Angeles");
    var result = 'The time1 is '+ currentTime.toString();
    var response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };

       // connect to your database
    sql.connect(config, function (err) {
    
        if (err) {
        		console.log('DB:'+err);
        		return callback(err)
    	}

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from [Country]', function (err, recordset) {
            
        if (err) {
        		console.log('DB1:'+err);
        		return callback(err)
    	}

            // send records as a response
            //res.send(recordset);
            //console.log("response data: " + JSON.stringify(response))
			callback(null, recordset);
            
        });
    });
    
};
