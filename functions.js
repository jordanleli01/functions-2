function firstLetterName(name) {
    alert("the name " + " starts with the letter" + name[0]);
}

function divisibleByTwo(number) {
    if(number % 2 == 0) {
        console.log (" The number" + number + " is divisible by 2: true");
        return true;
    }
    else {
        console.log("The number " + number + "is divisible by 2: false");
        return false;
    }
}

function largestNum(arr) {
    let largest = arr[0];
    for(let i=1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

firstLetterName("Jordan");
divisibleByTwo(14);

let arr = [1, 4, 3, 7, 9 ,0, 1, 23, 2, 5];

console.log(largestNum(arr));