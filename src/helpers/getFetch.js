const products = [
    {   id:1,
        title:"Laptop ASUS",
        description:"VivoBook 15 K513 Core i7 11a 15.6'' FHD IPS 512GB SSD 8GB RAM",
        price:1000,
        pictureUrl:"images/1.jpg" }
        ,
    {   id:2,
        title:"Computadora Lenovo",
        description:"IdeaCentre AIO 3i Intel Core i3 23.8\" Full HD 1TB + 128GB SSD 4GB RAM Business Black",
        price:800,
        pictureUrl:"images/2.jpg"},
    {   id:3,
        title:"Impresora Epson",
        description:"Impresora Multifuncional EcoTank L3110 Epson",
        price: 250,
        pictureUrl:"images/3.jpg"}        
 ]

export const getFetch = new Promise( (resolve) => {        
    setTimeout(()=> {
        resolve(products)
    },3000)
})