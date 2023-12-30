import React from "react";
import biriyani from "../images/biriyani.jpg";
import sandwich from "../images/sandwich.jpg";
import cake from "../images/cake.jpg";
import burger from "../images/burger.jpg";
import pizza from "../images/pizza.jpg";
import chicken from "../images/chicken.jpg";

function Menubar() {
  return (
    <div className="bg-zinc-100 p-10">
      <h1 className="text-3xl"> Inspiration from your first order</h1>
      <div className="flex mt-5">
        <img className="rounded-full m-11 w-40 h-40" src={pizza} alt="" />
        <img className="rounded-full m-11 w-40 h-40" src={chicken} alt="" />
        <img className="rounded-full m-11 w-40 h-40" src={burger} alt="" />
        <img className="rounded-full m-11 w-40 h-40" src={cake} alt="" />
        <img className="rounded-full m-11 w-40 h-40" src={sandwich} alt="" />
        <img className="rounded-full m-11 w-40 h-40" src={biriyani} alt="" />
      </div>
    </div>
  );
}

export default Menubar;
