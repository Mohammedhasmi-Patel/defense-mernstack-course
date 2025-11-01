// zomato application

function placeOrder(callback){
    console.log("Payment is in processed mode");

    setTimeout(()=>{
        console.log("Payment successfully");
        callback();
    },3000)
}

function preparingFood(callback){
    console.log("Food preparing is started");
    callback();
}

function pickupOrder(callback){
    console.log("Delievery Pickeup the order");
    callback();
}

function orderDelievred(){
    console.log("Order delivered successfully");
}

// placeOrder(preparingFood);

placeOrder(()=>{
    preparingFood(()=>{
        pickupOrder(()=>{
            orderDelievred();
        });
    });
});
