
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const allTaskDiv = document.querySelector(".alltasks");


form.addEventListener("submit",function(e){
    e.preventDefault();

    const taskValue = taskInput.value;

    if(taskValue.trim()==""){
        alert("Please add task first");
    }

    // craete parent for todo
    const parentDiv = document.createElement("div");

    const span = document.createElement("span");
    span.textContent = taskValue;

    const deleteButton = document.createElement("button");
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.height="50px"
    deleteButton.innerHTML = "X"; 


    const completeButton = document.createElement("button");
    completeButton.style.backgroundColor = "gray";
    completeButton.textContent = "✅";

    parentDiv.style.display="flex";
    parentDiv.style.width = "200px";
    parentDiv.style.justifyContent="space-between";
    parentDiv.style.alignItems="center";
    parentDiv.style.marginBottom = "20px";



    parentDiv.append(span,completeButton,deleteButton);
    allTaskDiv.append(parentDiv);

    deleteButton.addEventListener("click",function(){
        parentDiv.remove();
    });

    form.reset();

});



