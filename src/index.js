

const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Caracas'];

const rendomString = () => {
    const string = cities[ Math.floor( Math.random() * cities.length )];
    return string;
}

const reverseString2 = str => {
    return new Promise( (resolve, reject) => {
        if(!str){
            reject(Error('Error'))
        }

        resolve( str.split("").reverse().join("") );
    });
};

module.exports = rendomString;