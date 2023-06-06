import React from 'react'
import CommonItemsLayout from './CommonItemsLayout';
const creams=[ 
    {
        id:"1",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/ffaeadac-5d3d-48bc-8f59-4558aa838a9a-1uKTNINM7veqDn5_vL3GXsDXlNIXRPwH_.jpeg",
        ItemName:"Godrej Yummiez Chicken Nuggets",
        price:"₹452",
        button:"4% Off"
    },
    {
        id:"2",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/78a0044b-9bb4-47e0-8eff-d5b7cda6e189-1Fv1eFaUUtuIx9WBUnGoA8wJeL0Rm_KfX.jpeg",
        ItemName:"WaterPrasuma Spicy Chicken Momosmelon Kiran",
        price:"₹325",
        button:"50% Off"
    },
    {
        id:"3",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/79ab70c1-2dd0-4b9b-95bb-fc235056f8ed-1_D3TavR7jwZb-PDBxX5Z2EpfUf5fCUWY.jpeg",
        ItemName:"Safal Frozen Green Peas",
        price:"₹192",
        button:"20% Off"
    },
    {
        id:"4",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1256-1447,pr-true,f-webp,q-80/inventory/product/8c4f0d9a-b113-4332-84ba-98e9371b2e40-image_file.jpeg",
        ItemName:"ITC Master Chef Crunchy Chicken Nugget",
        price:"₹284",
        button:"9% off"
    },
    {
        id:"5",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/5d76a876-773b-4f59-9913-fc9cd31533de-1XfEHwxw7dFU9WGCR8XazoGHSyx2Z5IgN.jpeg",
        ItemName:"Baskin Robbins Classic Vanilla Ice Cream",
        price:"₹365",
        button:"10% off"
    },
    {
        id:"6",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/d0a89dbd-71da-4e79-8a70-1cceae9b28e9-1w2Bgiyh-C4zJYao9LDTfvNrFlrpRIDZM.jpeg",
        ItemName:"Yummiez Green Peas",
        price:"₹196",
        button:"30% off"
    },
    {
        id:"7",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/91553094-42e6-4927-8481-f0aba9d6ed6d-1XG30YOfaHKnag-JF4QQx5mwUvbZjkuXq.jpeg",
        ItemName:"Kwality Wall's Magnum Almond Ice Cream Combo",
        price:"₹188",
        button:"5% off"
    },
    {
        id:"8",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/df17bd3f-bb8d-4332-93df-817edc97fe25-1Un4Rab-8VZ4osoCt0bSmQZYNfdhcZZVq.jpeg",
        ItemName:"Sumeru Wassup Chicken Sausages Naturally Smoked",
        price:"₹379",
        button:"10% off"
    },
    {
        id:"9",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/336067f6-0051-4cdb-ba43-0ee1c2eb8782-1zpqGBNQKt4oED3YhV8svyg3qKK7o78-m.jpeg",
        ItemName:"Baskin Robbins Cotton Candy Ice Cream",
        price:"₹376",
        button:"5% off"
    },
    
    {
        id:"10",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-522-484,pr-true,f-webp,q-80/inventory/product/c0329da3-8850-49fb-a00c-adf139731a03-1Yy21VrA34CJVEUtUXRvmGKoU7qtgE9wE.jpeg",
        ItemName:"ITC Master Chef Chicken Seekh Kabab",
        price:"₹315",
        button:"5% off"
    },
    {
        id:"11",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1846-1046,pr-true,f-webp,q-80/inventory/product/df81bc21-2b12-4ea5-b4f1-378029c30b1c-199.png",
        ItemName:"McCain Chilli Garlic Potato Nuggets & Smiles Cripsy Happy Potatoes Combo",
        price:"₹270",
        button:"5% off",
      
    },
    {
        id:"12",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/78005e8b-6961-45ff-9e41-151a90d6eb2f-image_file.webp",
        ItemName:"Scoops Red Velvett Ice Cream Cake",
        price:"₹352",
        button:"4% off"
    },
    {
        id:"13",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/a283d64d-d206-4cf9-b51f-33b087d74d9e-1jIpJhsOcxtGaE-6Lbf51mxKiMJj8Fh53.jpege",
        ItemName:"Prasuma Momos Original Chicken",
        price:"₹325",
        button:"1% off"
    },
    {
        id:"14",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/2753249f-9fe2-4581-8ee8-a076730dcf93-1PAX4BfnVSWGRTGksg0ti7PT0u-hTPsDr.jpeg",
        ItemName:"Prasuma Momos Cheesy Spicy Veg",
        price:"₹325",
        button:"1% off"
    },
    {
        id:"15",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-3737-3737,pr-true,f-webp,q-80/inventory/product/2ffb2241-5a05-4f80-b340-00c4b872d508-1TOgTUK3tcljknRW0BcD8BZhNaV4FA6Db.jpeg",
        ItemName:"Kwality walls Choco Brownie Fudge Tub Frozen Dessert",
        price:"₹256",
        button:"19% off"
    },
    {
        id:"16",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-3603-2954,pr-true,f-webp,q-80/inventory/product/28c95fed-b8d7-40d7-b32b-d469c724c07d-1OEI7eS4hyo2l__TiEmnwwDHCwVymWHt5.jpeg",
        ItemName:"Venky's Chicken Nuggets",
        price:"₹645",
        button:"10% off"
    },
    {
        id:"17",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/f1fa1dcf-7d9f-4a22-be84-53a4fc95578f-1kSgLZpOeaq7MCBZnFYO0I-UyhqVq2YxE.jpeg",
        ItemName:"Mccain Smiles",
        price:"₹240",
        button:"10% off"
    },
    {
        id:"18",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-3603-2954,pr-true,f-webp,q-80/inventory/product/28c95fed-b8d7-40d7-b32b-d469c724c07d-1OEI7eS4hyo2l__TiEmnwwDHCwVymWHt5.jpeg",
        ItemName:"Kwality Wall's Magnum Truffle Combo",
        price:"₹188",
        button:"5% off"
    },
    {
        id:"19",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/541131fb-3067-40ad-868d-ff506c42994f-1od2jER-VQlIqvrW24mCHLAESZBOrt52-.jpeg",
        ItemName:"Godrej Yummiez Chicken Nuggets",
        price:"₹326",
        button:"6% off"
    },
    {
        id:"20",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/d29ed8d9-cf7a-4547-a96d-a8883785ab64-1acGJFuKY7nAlD4E3hXMEMjjx22-xG917.jpeg",
        ItemName:"McCain French Fries",
        price:"₹360",
        button:"10% off"
    },
    {
        id:"21",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-517-677,pr-true,f-webp,q-80/inventory/product/5fd79a26-814f-4728-bc62-8bea5b1ab24e-12LBRj6jACHJNy_2ptsfQKL8CHKf_pKCX.jpeg",
        ItemName:"Yummiez Chicken Burger Patty",
        price:"₹281",
        button:"7% off"
    },
    {
        id:"22",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/7d27c208-1d5e-4997-a026-84cc43644e84-iD_Malabar_Parota_(Pack_of_2).jpg",
        ItemName:"iD Malabar Parota Combo",
        price:"₹172",
        button:"4% off"
    },
    {
        id:"23",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2653-2600,pr-true,f-webp,q-80/inventory/product/cdf8bd74-0f80-4254-a633-983cb52606e5-12q6gVUQHXIiqxk_OwIUOkHsA33XaR2iW.jpeg",
        ItemName:"Venky's Chicken Nuggets",
        price:"₹345",
        button:"10% off"
    },
    {
        id:"25",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/a40e2ab8-e04d-49f1-b03b-7f1e4b4c3bed-1up9iDNg-dbVkbeJnfX_H146_gmLTvR6g.jpeg",
        ItemName:"McCain Aloo Tikki",
        price:"₹335",
        button:"10% off"
    },
    {
        id:"26",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/d2ef33eb-b8e1-454e-8b2c-4bd1464137ae-1f48nCYV9zRwRmPzVwKG26XXrLb8HWliE.jpeg",
        ItemName:"Kwality Wall's Cornetto Double ChocolateÂ Cone Combo",
        price:"₹78",
        button:"2% off"
    },
    {
        id:"27",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/eba71a71-d820-4ffd-89cc-e2f4f3605ad5-10MwG0x7ycuLywhD5TYk7aqIUoHivJKF0.jpeg",
        ItemName:"McCain French Fries Crisp & Delicious",
        price:"₹205",
        button:"10% off"
    },
    {
        id:"28",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-577-433,pr-true,f-webp,q-80/inventory/product/8b1ae736-7c30-4295-9571-122c59252b38-413a466b-927e-4dd3-b4ff-3120d1aaf26b.jpeg",
        ItemName:"Buffet Chicken Spring Roll",
        price:"₹563",
        button:"24% off"
    },
    {
        id:"29",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-616-753,pr-true,f-webp,q-80/inventory/product/ff3befcf-7cd2-4278-a92a-445a4d5fd51d-1dp8Lmfk8lGv0zFhxt1_-mV6NPUR7LpgM.jpeg",
        ItemName:"Farmland Frozen Vegetables Sweet Corn",
        price:"₹150",
        button:"25% off"
    },
    {
        id:"30",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/58e12a9f-f873-49e9-aa44-d0802dfd0e8b-1ycIIldDZc-vYOobwNAw9L5r3j8jclcYx.jpeg",
        ItemName:"Kwality Wall's Cornetto Double Chocolate Cone Combo",
        price:"₹120",
        button:"10% off"
    },
    {
        id:"31",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-281-297,pr-true,f-webp,q-80/inventory/product/12bdff52-d370-4f56-99e2-82865dd73192-image_file.jpeg",
        ItemName:"Sumeru Chicken & Cheese Nuggets",
        price:"₹281",
        button:"21% off"
    },
    {
        id:"32",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/258efaf1-d534-4c64-b7b0-125da757895b-1004.jpeg",
        ItemName:"iD Wheat Lachha Paratha 400 gms Combo",
        price:"₹182",
        button:"4% off"
    },
    {
        id:"33",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4513-4513,pr-true,f-webp,q-80/inventory/product/5bc15be8-c921-43b5-b9c5-4a3ae2d4e4a2-1wxGmByekfTIE3bj60LWRUo8ImMSTqDqm.jpeg",
        ItemName:"KwaIity Wall's Cadbury Crackle",
        price:"₹285",
        button:"24% off"
    },
    {
        id:"34",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-3308-1891,pr-true,f-webp,q-80/inventory/product/96c801ed-ef18-459c-9bb3-b47a12f5654b-1VRIo7yG0sAK2uBBoSEMTNKv0TGtYmz-h.jpeg",
        ItemName:"Venky's Chicken Burger Patty",
        price:"₹305",
        button:"10% off"
    },
    {
        id:"35",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/aa88eee6-6821-4738-8df3-b842a7830ce1-367.jpg",
        ItemName:"Kwality Wall's Shameless Vanilla Tub(700ml) & Kwality Wall's Cornetto Double Chocolate Cone(105ml) Combo",
        price:"₹175",
        button:"7% off"
    },
    {
        id:"36",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/43ebc2f9-faeb-41a7-a36b-d697c2eaa292-1mOyjsvOIEEeuqWRUN59eG5rbeWTGTGo1.jpeg",
        ItemName:"Baskin Robbins Honey Nut Crunch Ice Cream",
        price:"₹376",
        button:"4% off"
    },
    {
        id:"37",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/7b1dcd1f-84b3-42aa-bc08-c40fe37bfe7d-1XT8uQ-nN9JwKhpTX8FgUvVcazxumncvH.jpeg",
        ItemName:"McCain Chilli Cheesy Nuggets",
        price:"₹135",
        button:"10% off"
    },
    {
        id:"38",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/2b777081-9312-436f-8d7c-fe0b154c903e-Cream_Bell_Matka_Kulfi_Jar_(Pack_of_2).jpg",
        ItemName:"Cream Bell Matka Kulfi Jar Combo",
        price:"₹100",
        button:"1% off"
    },
    {
        id:"39",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/101ca18a-5c90-4ee1-828e-83ada12d6fa9-1gIxiZSw0BqBYdI-c9Ge6w3BodogG9UA_.jpeg",
        ItemName:"Yummiez Chicken Popcorn Pou",
        price:"₹242",
        button:"8% off"
    },
    {
        id:"40",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/dbf8d1e7-e6a0-4dcb-9c24-174c77f5d263-Kwality_Wall's_Cornetto_Butterscotch%C3%82_Cone_(Pack_of_2).jpg",
        ItemName:"Kwality Wall's Cornetto Butterscotch Cone Combo",
        price:"₹88",
        button:"2% off"
    },
    {
        id:"41",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2659-2599,pr-true,f-webp,q-80/inventory/product/606984c6-1016-4f17-85ad-2ce5bd4959d2-136S4kQknjb68D-0gnrcZ5Ju1c0ysUUO6.jpeg",
        ItemName:"Venky's Chicken Sausages",
        price:"₹375",
        button:"1% off"
    },
    {
        id:"42",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/328580c9-d0aa-4b0a-af6f-b7e43b28246f-1UWUPDP1Rw2IDvbouFzOs99Bzbz0BsGyW.jpeg",
        ItemName:"Safal Frozen Sweet Corn",
        price:"₹153",
        button:"15% off"
    },
    {
        id:"43",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/a194a3ed-dd33-4663-bf51-ab615b2fb5de-804062ea-ef6f-4a96-b165-a23b1bf17e33.jpeg",
        ItemName:"Venkys Chicken Cutlets",
        price:"₹335",
        button:"2% off"
    },
    {
        id:"44",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1390-1050,pr-true,f-webp,q-80/inventory/product/6df849cb-a15c-4bb3-92c7-079acfbcf921-198.png",
        ItemName:"McCain Chilli Garlic Potato Nuggets & Aloo Tikki Combo",
        price:"₹237",
        button:"12% off"
    },
    {
        id:"45",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/6b8efe8c-64cf-43f9-8ccc-1ce2aacb9e30-1pkY8Ma6BnSOEb0wXhlbckXsPmL6j9eUC.jpeg",
        ItemName:"Zorabian Chicken Spicy Sausages",
        price:"₹170",
        button:"5% off"
    },
    {
        id:"46",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-668-687,pr-true,f-webp,q-80/inventory/product/f7f6b346-5cd2-4708-b711-977de93a4610-image_file.webp",
        ItemName:"Scoops Froops Tender Coconut Ice Cream",
        price:"₹311",
        button:"5% off"
    },
    {
        id:"47",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2664-2600,pr-true,f-webp,q-80/inventory/product/22a72b0b-d274-4d30-90cc-9654749c1e1e-1Rl2iaJedkzilw-RXJobYQVSXry7AynOW.jpeg",
        ItemName:"Venky's Chicken & Cheese Nuggets",
        price:"₹355",
        button:"3% off"
    },
    {
        id:"48",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/383a76db-52b6-4274-9a47-879491668304-1UBop1USi06w2HxN2jZUDPx90NtjwWKdU.jpeg",
        ItemName:"Mccain Smiles",
        price:"₹333",
        button:"10% off"
    },
    {
        id:"49",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/74f953fc-b051-4cdc-8c7e-04fc854a50c9-Kwality_Wall's_Cornetto_Oreo_Disc%C3%82_Cone_(Pack_of_2).jpg",
        ItemName:"Kwality Wall's Cornetto Oreo Disc Cone Combo",
        price:"₹132",
        button:"5% off"
    },
    {
        id:"50",
        imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/f2ca9f1e-8f0c-42c1-a2a9-8b5b6c9f48b2-1Iv4MASW6VLjk27lJoPaHadr_S5D0R_OF.jpeg",
        ItemName:"McCain Chilli Garlic Potato Bites Crunchy Potato Nuggets",
        price:"₹425",
        button:"12% off"
    },
    {
        id:"51",
        imagePath:"",
        ItemName:"",
        price:"",
        button:""
    },
    
    
    
   
    
]
function Icecreams() {
    return (
        <div>
    <div><h1>Food And Icecreams</h1></div>
    <div style={{display:'flex',flexWrap:'wrap'}} >
          {
              creams.map((x) =>{
                  return (
                    <div >
                      <CommonItemsLayout totalItems={creams}></CommonItemsLayout>
                      </div>
                  )
              } 
              )
             }
      </div>
      </div>);
    
  }
     
  
  
export default Icecreams;