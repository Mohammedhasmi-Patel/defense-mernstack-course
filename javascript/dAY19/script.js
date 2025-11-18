console.log("Hello world is started");



const p1 =  fetch("https://api.github.com/users");

const p2 = p1.then((res)=>{
    return res.json();
});

// p2.then((response)=>{
//     console.log(response)
// })




console.log("Hello World is ended");


const p3 = new Promise((resolve,reject)=>{
    // resolve("Fullfilled");
    reject("Cosmic Orange");
});

p3.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
});