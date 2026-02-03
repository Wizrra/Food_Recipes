import React from "react";

export default function FoodCard({ recipe }) {
  return (
    <div className="shadow-xl rounded-xl overflow-hidden p-4">
      {/* food Image Container */}
      <div className="h-60 w-full rounded-xl overflow-hidden">
        <img
          src={recipe.image}
          alt=""
          className="object-center object-cover h-full w-full"
        />
      </div>
      {/* Food Description */}
      <div className="py-4 px-3">
        <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
        <p className="mb-6">{recipe.instructions[3]}</p>

        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2 ">
            <div className="rating bg-green-50 py-1 px-2 rounded-md">{recipe.rating}</div>
            <div className="rating">⭐</div>
          </div>

          <p className="flex gap-2 justify-between">
            <span className="bg-green-50 py-1 px-2 text-[12px] text-green-500 rounded-md">
              {recipe.tags[0]}
            </span>
            <span className="bg-green-50 py-1 text-[12px] px-2 text-green-500 rounded-md">
              {recipe.tags[1]}
            </span>
          </p>
        </div>

        <button className="text-white my-3 px-5 py-1 rounded-md bg-green-500">
          view
        </button>
      </div>
    </div>
  );
}
