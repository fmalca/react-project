const products = [
    {   id:1,
        name:"laptop Lenovo",
        description:"ci7 8 ram 500 sd",
        stock:5},
    {   id:2,
        name:"All in one",
        description:"ci7 8 ram 240 sd",
        stock:3},
    {   id:3,
        name:"Work Station",
        description:"ci7 16 ram 4Tb sd",
        stock:2}        
 ]

export const getFetch = new Promise( (resolve) => {        
    setTimeout(()=> {
        resolve(products)
    },3000)
})