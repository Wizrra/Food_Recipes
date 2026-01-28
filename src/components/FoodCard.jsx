import React from "react";

export default function FoodCard() {
  return (
    <div className="shadow-xl">
      {/* food Image Container */}
      <div className="">
        <img src="/Images/food.jfif" alt="" />
      </div>
      {/* Food Description */}
      <div>
        <h3 className="text-xl font-bold">Chicken & Chips</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          veritatis.
        </p>
      </div>

      <button>view</button>
    </div>
  );
}
