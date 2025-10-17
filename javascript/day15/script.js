// console.log("Hello champions")

// const newElement = document.createElement("h2");
// newElement.textContent = "Strike is coming";


// const existingHeading = document.getElementById("first");
// existingHeading.after(newElement);

// // 

// const diwali = document.createElement("h3");
// diwali.innerText = "Diwali Aaane wali hai";
// newElement.after(diwali);

// diwali.classList.add("diwali");
// diwali.classList.add("weekend");

// const unorder = document.getElementById("unorder");
// const list = document.createElement("li");
// list.textContent = "Hasmi"
// unorder.append(list);

const unorder = document.getElementById("unorder");

const myFriends = ["Hajji","Mubi","Maahi","Arbaz","Asfak"];
// appendList(myFriends);

const fragement = document.createDocumentFragment();

for(friends of myFriends){
    const currentList = document.createElement("li");
    currentList.textContent = friends;
    fragement.append(currentList)
}

unorder.append(fragement)


function appendList(arr){
    for(val of arr){
        const currentList = document.createElement("li");
        currentList.textContent = val;
        unorder.append(currentList);
    }
}