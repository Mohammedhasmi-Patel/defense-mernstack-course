const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const boyName = document.getElementById("boy").value;
    const girlName = document.getElementById("girl").value;
    const score = document.getElementById("score");

    // console.log(boyName);
    // console.log(girlName);

    const boyPercentage = boyName.length ** 3;
    const girlPercentage = girlName.length ** 3;

    const calculatedTotalValue = boyPercentage * girlPercentage;
    // console.log(calculatedTotalValue);
    score.innerText = calculatedTotalValue % 101;
    form.reset();
    

});