import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchHotels() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios.get("/settling/hotel").then((r) => {
      setHotels(r.data);
    });
  }, [0]);
  
  return hotels;
}
