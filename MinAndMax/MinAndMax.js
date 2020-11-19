/* 
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb legkisebb elemét!
*/

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(getMinElementFromAnArray([1, -10, 2, -100, 3]));


/*
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb legnagyobb elemét!
*/

function getMaxElementFromAnArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxElementFromAnArray([1, -10, 2, -100, 3]));
