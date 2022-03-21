const removeFromLocalStorage =id=>{
    const storedCart=localStorage.getItem('shoping card')
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoping card',JSON.stringify(shoppingCart));
        }

    }
}

export default removeFromLocalStorage;