const incomeScore = document.getElementById("income-score");

const form = document.querySelector("form");

form.addEventListener("click",(e)=>{
    e.preventDefault();
    const incomeAmount = parseInt(document.querySelector("#income").value);
    let totalTax = 0;
    
    if(incomeAmount <= 1200000){
        // incomeScore.innerText = 0;
        totalTax = 0;
    }

    else if(incomeAmount >= 1200000 && incomeAmount <= 1500000){
        totalTax = (incomeAmount - 1200000)*0.15;
    }

    else if(incomeAmount <= 2000000){
        totalTax = (incomeAmount - 1600000)*0.20 + 60000;
    }
    else if(incomeAmount <= 2400000){
        totalTax = (incomeAmount - 2000000) * 0.25 + 60000 + 80000;
    }

    else{
        totalTax = (incomeAmount - 2400000) * 30 + 60000 + 80000 + 100000
    }

    incomeScore.textContent = totalTax;
    // form.reset();

    
})