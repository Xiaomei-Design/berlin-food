/**
 * @file express app showing map
 */

var program = require('commander');
var packagejson = require('./../package.json');
var express = require('express');
var app = express();

program
    .version(packagejson.version)
    .option('-p, --port [number]', 'port', Number, 3000)
    .option('-s, --socket [string]', 'socket/ip', String, '127.0.0.1')
    .description('Express app showing map');
program.parse(process.argv);

app.use('/', function (req, res) {
    res.type('html');
    res.send('map app');
});

app.listen(program.port, program.socket, function () {
    console.log('map started at %s:%j', program.socket, program.port);
});
