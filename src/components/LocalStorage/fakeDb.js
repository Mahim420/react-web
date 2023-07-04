const addToDb = (id) =>{
    let shoppingCart = {};
    const storedItem = localStorage.getItem("Shopping-Cart");

    if(storedItem){
        shoppingCart = JSON.parse(storedItem);
    }

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));

}

export {addToDb};