import axios from "axios";
import { useEffect, useState } from "react";

class Foods {
  static foodList = [];
}

export function useFetchFood() {
  const [foodList, setFoodsList] = useState(Foods.foodList);
  useEffect(() => {
    if (Foods.foodList.length === 0) {
      axios
        .get("/foods")
        .then((r) => {
          setFoodsList(r.data);
          Foods.foodList = r.data;
        })
        .catch((e) => {
          console.error(e);
        });
    }
    else {
      setFoodsList(Foods.foodList);
    }
  }, [0]);

  return foodList;
}