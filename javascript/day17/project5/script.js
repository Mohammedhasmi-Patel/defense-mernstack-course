const timeDiv = document.getElementById("timediv");


setInterval(()=>{
    const currentTime = new Date();
    // console.log(currentTime.toLocaleTimeString());
    timediv.innerText = currentTime.toLocaleTimeString();
},1000);