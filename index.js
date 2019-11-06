#!/usr/bin/env node
 //Brian Fopiano
'use strict';
// # Initialise CLI
// imports the Command Line Interface (CLI) in order to make the application work
module.exports = require('./lib/cli/index.js');
process.on('SIGINT', function() {
    process.exit();
});