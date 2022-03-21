// simplae jay rokom asy say rokom vaby data ppathabo 

// const addToLocalStorage=id=>{

//     const quantity= localStorage.getItem(id,1)
//     if(quantity){
//         const newQuantity=parseInt(quantity)+1
//         localStorage.setItem(id,newQuantity);

//     }
//    else{
//        localStorage.setItem(id,1)
//    }
// }


//data sent as object 
//tobay ay vaby dily akta sudu add hoby 

// const addToLocalStorage=id=>{
//  let shoppingCard={};
//  const quantity =shoppingCard[id]; 
//  if(quantity){
//      const newQuantity=quantity+1;
//      shoppingCard[id]=newQuantity;
//  }
//  else{
//      shoppingCard[id]=1;
//  }
//  localStorage.setItem('shoping card',JSON.stringify(shoppingCard));

// }


//akdik add korar jonno


const addToLocalStorage=id=>{
 
    
    //42 thakay 49 line porjonto korty hobya jodi akdik value ak saty rakty chai
 let shoppingCard;
 const storedCart = localStorage.getItem('shoping card')
 if(storedCart){
     shoppingCard=JSON.parse(storedCart);
 }
 else{
     shoppingCard={};
 }


 const quantity =shoppingCard[id]; 
 if(quantity){
     const newQuantity=quantity+1;
     shoppingCard[id]=newQuantity;
 }
 else{
     shoppingCard[id]=1;
 }
 localStorage.setItem('shoping card',JSON.stringify(shoppingCard));

}
export default addToLocalStorage