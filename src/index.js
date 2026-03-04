'use strict'

// 1

function createLogger(prefix) {

    return function(message) {
        
        console.log(`${prefix}: ${message}`)

    }

}

const authLogger = createLogger('AUTH');

const apiLogger = createLogger('API');

authLogger('User logged in');

apiLogger('Request failed');

// 2

function createLimiter(limit) {

    if(typeof limit !== 'number' || Number.isNaN(limit) || limit < 1) {

        console.log('Wrong value')

    }
    else{

    let count = 0

    return function() {

        if (count < limit) {
            count++;
            return "Ok";
        }

        return "Error";

    }
    
}
}

const limited = createLimiter(2);

console.log(limited());

console.log(limited());

console.log(limited());
