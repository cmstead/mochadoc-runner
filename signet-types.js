'use strict';

const signet = require('signet')();

const supportedArgs = {
    silent: signet.isTypeOf('boolean'),
    config: signet.isTypeOf('string')
};

function isValidMochadocOptions(value) {
    return Object.keys(value).reduce(function(result, key) {
        return result 
            && supportedArgs[key] 
            && supportedArgs[key](value[key]);
    }, true);
}

signet.subtype('object')('mochadocOptions', isValidMochadocOptions);
signet.defineDuckType('error', {
    message: 'string'
});

signet.alias('errorOption', 'variant<null, error>');
signet.alias('success', 'boolean');

signet.alias('callback', 'function<errorOption, success => undefined>');

module.exports = signet;