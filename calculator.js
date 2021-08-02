async function calculator(a, b) {

    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        }
        else {
            reject('no sum');

        };


    })
}

module.exports = calculator;