let pattern  = RegExp('(^[A-Z][0-9]*[A-Z]$)');

let strings = ['A23749287Z','Asdd234'];

strings.forEach((string)=>{
    console.log(pattern.test(string));
})
