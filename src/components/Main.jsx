import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

export default function Main() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const result = await fetch("https://dummyjson.com/recipes");
        const data = await result.json();
        console.log(data);
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <main className="p-4">
      <p className="text-xl mb-4">Our Recipes</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {recipes.map((r, i) => (
          <FoodCard recipe={r} />
        ))}
      </div>
    </main>
  );
}
