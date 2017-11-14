'use strict';

const signet = require('./signet-types');
const sep = require('path').sep;
const fork = require('child_process').fork;

function callMochadoc(mochadocOptions, callback) {
    const runnerPath = __dirname + sep + 'runner.js';
    const args = Object.keys(mochadocOptions).reduce(function(result, key) {
        if(key !== 'silent' || mochadocOptions[key] === true) {
            result.push('--' + key);
        }

        if(key === 'config') {
            result.push(mochadocOptions[key]);
        }

        return result;
    }, []);

    fork(runnerPath, args, function(err) {
        const success = Boolean(err);
        const error = Boolean(err) 
            ? new Error('An error occurred while running Mochadoc: ' + err.message)
            : null;

        callback(error, success);
    })
}

module.exports = signet.enforce(
    'mochadocOptions, callback => undefined', 
    callMochadoc);