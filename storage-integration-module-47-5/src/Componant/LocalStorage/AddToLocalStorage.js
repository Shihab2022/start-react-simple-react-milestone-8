const addToLocalStorage=id=>{

    const quantity= localStorage.getItem(id,1)
    if(quantity){
        const newQuantity=parseInt(quantity)+1
        localStorage.setItem(id,newQuantity);

    }
   else{
       localStorage.setItem(id,1)
   }
}
export default addToLocalStorage