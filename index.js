#!/usr/bin/env node

'use strict';

// # Initialise CLI
// imports the Command Line Interface (CLI) in order to make the application work
module.exports = require('./lib/cli/index.js');

// # Closing Application
// make sure the manager gets stopped
process.on('SIGINT', function() {
    process.exit();
});