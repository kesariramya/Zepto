import React from 'react';
const category=[
    {
        id:"1",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-420,ar-664-452,pr-true,f-webp,q-80/inventory/category/fad86a63-828f-4381-b9e8-58b39d48ed41-Frame_11049_(1).png"
    },
    {
        id:"2",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-420,ar-692-471,pr-true,f-webp,q-80/inventory/category/80f85556-668a-4953-975d-c9b8c7147ddf-Atta,_Rice,_Oil_&_Dals-01.png"
    },
    {
        id:"3",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/dfbc7b23-ddd8-4c20-8b0c-4e8e3d5d2612-imageWithName",
    },
    {
        id:"4",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/0bb572e4-7c2a-472c-9d26-2c19cb8897ba-imageWithName",
    },
    {
        id:"5",        
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/844f1946-5dfd-415f-9d4a-83bef891af5b-imageWithName",
    },
    {
        id:"6",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/4cfc43e9-78b8-419c-8d03-6d0adcfa8729-imageWithName",
    },
    {
        id:"7",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/954dd3f4-2b40-4cba-9e8c-d7cf2da47ac0-imageWithName",
    },
    {
        id:"8",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/16913142-c1a3-49bd-bd15-9a68818dd3e8-imageWithName",
    },
    {
        id:"9",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/bb61d61d-8654-4029-a0de-592f14563c82-imageWithName",
    },
    {
        id:"10",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/fc2684a7-3ee9-47a7-88fc-40c08184431a-imageWithName",
    },
    {
        id:"11",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/a936056e-08fc-4051-a471-504e0706c934-imageWithName",
    },
    {
        id:"12",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/a30ecdc7-b9a8-4af0-b681-6461f1ba09cd-imageWithName",
    },
    {
        id:"13",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-332-425,pr-true,f-webp,q-80/inventory/category/221b2f83-d4f6-4a22-886f-8c352f3ded3a-imageWithName",
    },
    {
        id:"14",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/a480a7c9-2c3b-4fe3-9e4e-13f87517e481-imageWithName",
    },
    {
        id:"15",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/776754fb-0209-4305-8f8d-4d9c626c6b30-imageWithName",
    },
    {
        id:"16",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/0114bff9-3036-4434-92a1-817d88f59509-imageWithName",
    },
    {
        id:"17",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/fe26c8cb-d8eb-4acf-a3f5-2ee79f218949-imageWithName",
    },
    {
        id:"18",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/8a9eda1e-06cb-403e-8830-006991ec824f-imageWithName",
    },
    {
        id:"19",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/c3f0b92d-38ac-4a43-8739-5c5dc83e8c6e-imageWithName",
    },
    {
        id:"20",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/af95a989-fde0-4079-a3ea-f2e61b4847c4-imageWithName",
    },
    {
        id:"21",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/308c76dd-3b3d-4f16-9229-64cdc89752dc-imageWithName",
    },
    {
        id:"22",
        imagepath:"https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/7f7750aa-8539-44de-8630-df4ddad35df2-imageWithName",
    },]
    
      function Catogeries() {
        
          return (<div>
           <h1>explore by catogeries</h1>
           {
            category.map((x) =>{
                return (
                    <img src={x.imagepath} alt="vegetables" />
                )
            } 
            )
           }
    </div>);
  
}

export default Catogeries;