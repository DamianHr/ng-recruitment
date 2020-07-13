const PORT = 8009;
const HOST = '127.0.0.1';

const mockData = { data: 'someTestdata'};



var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-content-type-options");
    res.header("x-content-type-options", "nosniff");
    next();
});


/* Main routes */

app.get('/data', function (req, res) {
    res.status(200).send(mockData);
});

app.listen(PORT, function() {
    console.log('Example app listening on port ' + PORT + '...');
});
