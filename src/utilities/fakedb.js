const addToDb = id =>{
    let shoppingCart ={};
    const storedCart = localStorage.getItem("Shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
}


const removeFromDb = id =>{
    const storedItem = localStorage.getItem('Shopping-cart');
    if(storedItem){
        const shoppingCart = JSON.parse(storedItem);
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
