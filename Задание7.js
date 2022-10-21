let arr = ['z', 1, 3, 'f', , 'g', null, 2, 0.8, 4]
let isNull = 0;
let numberCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numberCount += 1;
        if (arr[i] == null) {
            isNull += 1;
        } else if (arr[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }
}
console.log(`В массиве: ${numberCount} цифр, ${isNull} Null's, ${evenCount} чётных, ${oddCount} нечётных!`);
