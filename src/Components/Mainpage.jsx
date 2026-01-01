import React, { use, useState } from "react";
import Card from "./Card";

const Mainpage = () => {

  const arr = [
    {
      id: 1,
      name: "T-Shirts",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/511O-a9eUyL.jpg",
      price: 299,
    },
    {
      id: 2,
      name: "Sports Shoes",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/61utX8kBDlL._UY695_.jpg",
      price: 899,
    },
    {
      id: 3,
      name: "Shirts",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/71YyZ7K2n-L._UY741_.jpg",
      price: 499,
    },
    {
      id: 4,
      name: "Jeans",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/71c3EH8n2TL._UY741_.jpg",
      price: 699,
    },
    {
      id: 5,
      name: "Kurtas & Sets",
      off1: 50,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/81q4H6bZ4yL._UY741_.jpg",
      price: 599,
    },
    {
      id: 6,
      name: "Trousers",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/61WwH8PjOeL._UY741_.jpg",
      price: 499,
    },
    {
      id: 7,
      name: "Track Pants",
      off1: 30,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/61B8Zz9z8HL._UY741_.jpg",
      price: 399,
    },
    {
      id: 8,
      name: "Loungewear",
      off1: 30,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/71xYxF1v7JL._UY741_.jpg",
      price: 299,
    },
    {
      id: 9,
      name: "Innerwear",
      off1: 30,
      off2: 70,
      imgsrc: "https://m.media-amazon.com/images/I/71k0o7R8NJL._UY741_.jpg",
      price: 199,
    },
    {
      id: 10,
      name: "Belts & Wallets",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/71FZg6fYl0L._UY741_.jpg",
      price: 299,
    },
    {
      id: 11,
      name: "Sunglasses & Frames",
      off1: 30,
      off2: 70,
      imgsrc: "https://m.media-amazon.com/images/I/61vW7mYpJFL._UY741_.jpg",
      price: 399,
    },
    {
      id: 12,
      name: "Casual Shoes",
      off1: 40,
      off2: 80,
      imgsrc: "https://m.media-amazon.com/images/I/71xvYxFZtYL._UY741_.jpg",
      price: 799,
    },
  ];
  
  const[A,setA]= useState(arr);

 const Sortings = () => {
    A.sort((a,b) => a.price - b.price);
    setA([...A]);
  }

  const gt499 = () => {
    const B = A.filter((item)=> item.price > 499);
    setA(B);
  }
   

  return (
    <>
      <button className="bg-red-200 h-10 w-30 mt-2" onClick={Sortings}>
        Sort by price
      </button>
      <button className="bg-red-200 h-10 w-30 ml-4" onClick={gt499}>Price gt 499</button>
      <div className="flex justify-center">
        <h1 className="text-[#2713ab] text-[48px] font-poppins">
          SHOP BY CATEGORY
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-6 gap-2 justify-center items-center mt-10 mb-10">
          {A.map((item) => (
            <Card key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mainpage;
