function multiply(x, y, z) {
    return x * y * z;
}

const numbers = [1, 2, 3];

console.log(multiply(...numbers));


const bigFunction = (a,b,c,d,e,f) => {
    console.log(`parameters sent : ${a} ${b} ${c} ${d} ${e} ${f}`);
}

bigFunction(...numbers,4,5,6);


//concationation
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];

console.log(arr1);