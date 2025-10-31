 const parent = document.getElementById("parent");
    const children = [...parent.children];
    const body = document.querySelector("body");
    // console.log(children)
    children.forEach((element)=>{
        // console.log(element)
        element.addEventListener("click",()=>{
            body.style.backgroundColor = element.innerText;
        });
    });