let arr = [8, 9, 5, 7];
let x = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[0] !== arr[i])
    {x = false; break};
};
console.log(x)
