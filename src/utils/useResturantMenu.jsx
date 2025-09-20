import { useEffect, useState } from "react";
import { MENU_API } from "./constants"

const useResturantMenu = (resid) => {
  const [resinfo, setResinfo] = useState(null)

  const fetchData = async () => {
    const data = await fetch(MENU_API + resid + "&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json()
    // const cardData = json?.data?.cards?.find((item) => item?.card?.card?.info);
    // console.log(json?.data?.cards, "inside the fetch function for resturant menu ");
    // setResinfo(cardData)

    const cardData = json?.data;
    setResinfo(cardData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return resinfo
}

export default useResturantMenu