/* EXAMPLE 1(LOOPS)

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function createPromiseWithLoop(){
return new Promise(function executor(resolve, reject){
for(let i = 0 ; i < 1000000 ;i++){}                      //currently here the for loop is running for long time so after the for loop is completed we will immediately get to know the state of the promise 
        let num = getRandomInt(10)
        if(num%2 == 0){
            resolve(num)
        }else{
            reject(num)
        }
  
})
}  
let x =  createPromiseWithLoop()
console.log(x) */




/* EXAMPLE 2 (using setTimeout)


function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function createPromiseWithLoop(){
return new Promise(function executor(resolve, reject){
    setTimeout(function (){
        let num = getRandomInt(10)
        if(num%2 == 0){
            resolve(num)
        }else{
            reject(num)
        }
    },10000)
})
}  

let x =  createPromiseWithLoop()
console.log(x)

// Here the o/p will be now we can see it immediately gives the pending state, as we have written return new Promise
so new Promise is expected to return ,  then there is a callback function that function will be immediately called and this function says setTimeout, the moment javascript 
sees setTimeout it will go to the runtime and say hey runtime start the timer of 10secs and after that it immediately prints the state of promise as pending
and after 10 secs the state of the promise would be changed if the num was evevn o/p would be (Promise { <state>: "fulfilled", <value>: 2 })
else if the num was odd (Promise { <state>: "rejected", <reason>: 3 })




*/