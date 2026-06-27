let a = 10, b = 20, c = 30;

let max = a < b ? (b < c ? "C is max" : "b is max") : "a is max";
console.log(max);


let temp = 35

let feel = (temp > 40) ? "Very hot" :
    (temp > 35) ? "hot" :
        (temp > 30) ? "warm" :
            (temp > 20) ? "cold" : "coldest";

console.log(feel);