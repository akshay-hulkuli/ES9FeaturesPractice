// function myTagFn(str) {
//     return { "Parsed": str[0], "Raw": str.raw[0] }
//  }

// var myUniCode = `\u2764\uFE0F`;

// var result = String.raw`\u2764\uFE0F`;

// console.log(result)


function myTagFn(str) {
    return { "Parsed": str[0], "Raw": str.raw[0] }
}

 let result2 =myTagFn`\u2764\uFE0F`
 console.log(result2)