const addToDb = (id) =>{
    let counter = {};
    const storedItem = localStorage.getItem("Count");

    if(storedItem){
        counter = JSON.parse(storedItem);
    }

    const quantity = counter[id];
    if(quantity){
        const newQuantity = quantity + 1;
        counter[id] = newQuantity;
    }
    else{
        counter[id] = 1;
    }

    localStorage.setItem("Count", JSON.stringify(counter));

}


const getCount = () =>{
    let counter = {};
    const storedItem = localStorage.getItem('Count')
    if(storedItem){
        counter = JSON.parse(storedItem)
    }

    return counter;
}

export {addToDb, getCount};