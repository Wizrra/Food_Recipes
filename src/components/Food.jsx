import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Food() {
  const [recipe, setRecipe] = useState({});

  const path = useParams();

  useEffect(() => {
    async function getSingleRecipe() {
      try {
        const result = await fetch(`https://dummyjson.com/recipes/${path.id}`);
        const data = await result.json();
        setRecipe(data);
        console.log(data);
      } catch (error) {
        console.log("Cannot be fetched due to network, abeg no vex");
      }
    }
    getSingleRecipe();  
  }, []);

  return <div> {path.id}</div>;
}
