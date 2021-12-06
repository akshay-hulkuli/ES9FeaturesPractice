let squareRootFinder = function(num){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          if(num>=0){
             resolve(Math.sqrt(num))
          }
          else reject('negative number!!!')
       },3000)
    })
}


squareRootFinder(10)//modify to add -10
.then(result=>{
console.log("result is",result)
}).catch(error=>console.log(error))
.finally(() =>{
console.log("inside finally")
console.log("executes all the time")
})
