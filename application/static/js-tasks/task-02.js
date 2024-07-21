// Main tasks:
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
let min = function (list) {
    return Math.min(...list);
};

let max = function (list) {
    return Math.max(...list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    return toReturn === "value"
        ? Math.min(...arr)
        : arr.indexOf(Math.min(...arr));
}

// Additional tasks:
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return n * 2 - 2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    if (n <= 0) {
        return n;
    } else if (n > 0 && n < 14) {
        return n - 1;
    } else {
        return n - 2;
    }
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    return (h * 60 ** 2 + m * 60 + s) * 1000;
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
