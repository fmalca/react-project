const products = [
    {   id:1,
        title:"Notebook AMD Athlon HP 14-DK1015LA",
        description:"Esta computadora portátil delgada y ultraportátil ofrece un rendimiento confiable. Gracias a la batería de larga duración, es fácil mantenerse sociable, productivo y conectado a lo que importa. La pantalla con microborde le brinda mucho para ver con la mayor imagen posible en un marco más pequeño",
        category:"hogar",
        price:315,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624231/hogar-1_jhvvzt.png",
        stock: 6
     },
    {   id:2,
        title:"Laptop ci5 ASUS TUF F506LH",
        description:"A pesar de contar con un chasis mas péqueño y liivnao que sus predecesores, el F15 alberga una batería más grande para una vida más larga. Las pruebas de caída aseguran que cada ",
        category:"hogar",
        price:1070,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624230/hogar-2_gr2uax.png",
        stock: 5
    },
    {   id:3,
        title:"Laptop ci3 DELL 8/s256/15.6/free",
        description:"Laptop de 15 pulgadas que ofrece un rendimieno con capacidad de respuesta en un diseño elegante con bordes angostos de dos lados, cuenta con un almacenamiento SSD 256GB M.2 NV;e, ExpressCharge, y procesador Intel Core",
        category:"hogar",
        price: 560,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624230/hogar-3_rb5erl.png",
        stock: 3
    },        
    {   id:4,
        title:"Laptop WS Ci7 MSI WF65 10TI 16/512+1/15.6/VDQ4w10",
        description:"",
        category:"empresa",
        price:2199,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624230/empresa-1_qznict.png",
        stock: 1
     },
    {   id:5,
        title:"Laptop WS Ci7 HP ZBook Firefly 14 G8 8/512/14/w10p",
        description:"Nuestro ZBook más pequeño y liviano que jamás haya existido ofrece verdadera movilidad para las personas que llevan la típica PC empresarial más allá de su punto de ruptura",
        category:"empresa",
        price:1766,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624230/empresa-2_j5n8cx.png",
        stock: 2
    },
    {   id:6,
        title:"Laptop Ci7 Dell Latitude 3510 8/1T/15.6/w10pro",
        description:"El nuevo Latitude 3510 es más pequeño y fino. Presenta un acabado más ligero y biseles de pantalla estrechos para darle más espacio de trabajo.",
        category:"empresa",
        price: 1250,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624230/empresa-3_loeker.png",
        stock: 3
    },
    {   id:7,
        title:"PC Ci9 10900 MK RINO Darkblader-G 16/s512/24/VD6/F",
        description:"Intel Ci9 de 10ma generación, placa ASUS TUF Gaming Z590-Plus ifi 1200 ATX, video NVIDIA RTX2060 6GB",
        category:"gamer",
        price:2129,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624231/gamer-1_nudxcj.png", 
        stock: 4
    },
    {   id:8,
        title:"PC Ci7 10700KF MK RINO Panzer Evo 16/s500/27VD8",
        description:"Intel Ci7 de 10ma generación, placa ASUS ROG STRIX 1200 ATX, video NVIDIA RTX360ti 8GB",
        category:"gamer",
        price:2356,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624231/gamer-2_hhygf5.png",
        stock: 5
    },
    {   id:9,
        title:"PC Ryzen7 3800XT MK RINO ROG Z11 16/s500/VD8/Fr",
        description:"Procesador AMD Ryzen 7 3800XT 3.90 GHZ 16GB RAM Disco de estado sólido de 500 GB Video Radeon RX6600XT 8GB",
        category:"gamer",
        price: 2412,
        pictureUrl:"https://res.cloudinary.com/ds3gb0bqn/image/upload/v1639624231/gamer-3_etis00.png",
        stock: 4
    }                            
 ]

export const getFetch = new Promise( (resolve) => {        
    setTimeout(()=> {
        resolve(products)
    },3000)
})