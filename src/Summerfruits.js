import React from 'react'
const fruits=[ 
    {
        id:"1",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1022,pr-true,f-webp,q-80/inventory/product/2e256ec1-4f92-4d71-b952-41f8188b9dfd-tmp/6d2288ae-a5f3-4af0-89e6-c419ea40d387.jpeg",
        name:"Mango Alphonso (Hapus)",
        price:"₹513",
        button:"14% Off"
    },
    {
        id:"2",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4008-4008,pr-true,f-webp,q-80/inventory/product/f8a73d5c-53b5-4d8e-9c80-50c66f4f43ca-shutterstock_486923446.jpg",
        name:"Watermelon Kiran",
        price:"₹90",
        button:"50% Off"
    },
    {
        id:"3",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/37815e21-604f-4868-8287-1c7a27b9ef46-tmp/27ba1e7f-4166-4362-aee2-6fda4bd3a74d.jpeg",
        name:"Muskmelon Semi Ripe",
        price:"₹120",
        button:"16% Off"
    },
    {
        id:"4",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4520-3613,pr-true,f-webp,q-80/inventory/product/cc9e44cc-06af-49f0-b8cd-b5ef0d73a0f0-shutterstock_1978892732.jpg",
        name:"Tender Coconut (Nariyal)/Kobbari Bondam",
        price:"₹168",
        button:"20% off"
    },
    {
        id:"5",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-480,pr-true,f-webp,q-80/inventory/product/3e8dfc9a-0152-4a4b-8e1e-465d39c183f6-Photo.jpeg",
        name:"Mango Totapuri",
        price:"₹79",
        button:"15% off"
    },
    {
        id:"6",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-679-602,pr-true,f-webp,q-80/inventory/product/a9ebd0f1-127d-49b6-9fba-0d0762e09c20-/tmp/20230202-0613511.jpeg",
        name:"Pomegranate",
        price:"₹161",
        button:"15% off"
    },
    {
        id:"7",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/d193005a-7236-4fe3-b356-f653cbde0a89-Photo.jpeg",
        name:"Papaya Lady Red/Poppadi Pandu/Boppas Pandu Semi Ripe",
        price:"₹71",
        button:"15% off"
    },
]
function Summerfruits() {
    return (
    <div>
        <div>
        <h1> explore new catogeries</h1>
        </div>
    <div style={{display:'flex'}} >
      
          
          {
              fruits.map((x) =>{
                  return (
                    <div >
                      <img src={x.imagepath} alt="fruits" />
                      <h1>{x.name}</h1>
                      <h3>{x.price}</h3>
                      <button>
                        <h2>{x.button}</h2>
                      </button>
                      </div>
                  )
              } 
              )
             }
      </div>
      </div>);
    
  }
     
  
  
export default Summerfruits;