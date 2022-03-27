/*************************module 50-5-1***************************************/
/* const db={}
const addToDb=item=>{
    // 1. set data if given data
    // db.alom= 1;

    //2. set data if given data
    // db['allom']=1

    //set data if data can not given
db[item] =1

    console.log(db)
}
// addToDb()
addToDb('hero') */


/*************************module 50-5-2***************************************/

/* const db={}
const addToDb=item=>{

    //ay jaigai chek kory si jay say ta agay asy ki na
    //jodi thaky taholy tar vlaue orthat 1 ar saty agar value t ajukto hoay jaby
    if(item in db){
        db[item] =db[item]+1;
    }
    else{
        db[item] =1
    }
    console.log(db)
}
addToDb('shihab') */
//amra console ay giay dakty pari 1
//function ar modday v=bivinno name kingba akoi name pass kory dakbo 


/*************************this value add local storage***************************************/
/* const db={}
const addToDb=item=>{
    if(item in db){
        db[item] =db[item]+1;
    }
    else{
        db[item] =1
    }
    console.log(db)
}
addToDb('shihab')
//local storage 2 vlue recive kory akti holo key onno ti holo vlue
//key diay storage thaky amar value ta get kori
//key value 2 takai string hoty hobya
//array / object jahy to non-prmitive valu tai ader kay stringfy diy string ay convert kora hoays ay

localStorage.setItem('name',JSON.stringify(db))


//akdik value dity chily console ay trial dakty pari */

/*************************module 50-5-1***************************************/
