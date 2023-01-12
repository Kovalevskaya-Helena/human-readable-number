function mapSmallNumbers (number, withZero = true) {
    const numbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

    return parseInt(number, 10) === 0 && !withZero ? '' : numbers[number]
}

function mapTens  (number)  {
    const parts = {
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety',
    };

    return parseInt(number, 10) === 0 ? '' : parts[number];
}

function mapHundreds (number) {
    return parseInt(number, 10) === 0 ? '' : `${mapSmallNumbers(number)} hundred`;
}

function padNumber (number) {
    if (number >= 100) {
        return number.toString();
    }

    if (number >= 10) {
        return `0${number}`
    }

    return `00${number}`
}

module.exports  =function toReadable (number) {
    debugger;
    let [ hundred, tens, num ] = String(padNumber(number)).split('');

    const tensAndNum = parseInt(tens + num, 10);
    const isTensAndNumSmall =  tensAndNum < 20;
    const isSimpleNumber = number < 9;

    hundred = mapHundreds(hundred);
    tens = isTensAndNumSmall ? mapSmallNumbers(tensAndNum, isSimpleNumber) : mapTens(tens);
    num = isTensAndNumSmall ? '' : mapSmallNumbers(num, isSimpleNumber);


    return [ hundred, tens, num ].filter(Boolean).join(' ');
}
