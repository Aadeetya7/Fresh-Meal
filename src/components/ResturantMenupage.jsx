import { Box, List, ListItem, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import RestaurantCardShimmer from "./ResturantCardShimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"

const RestaurantMenuPage = () => {

    const [resInfo, setResinfo] = useState(null)
    const { resid } = useParams()
    console.log(resid);


    const fetchData = async () => {
        const data = await fetch(MENU_API + resid + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        const cardData = json?.data?.cards?.find((item) => item?.card?.card?.info);
        console.log(cardData, "inside the fetch function ");
        setResinfo(cardData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(resInfo?.card?.card?.info?.name, "2nd");

    const { name, cuisines, costForTwoMessage, locality, totalRatingsString } = resInfo?.card?.card?.info || {};
    if (resInfo === null) return <RestaurantCardShimmer />

    return (
        <Box sx={{ padding: 3, maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h4" gutterBottom>
                {name}
            </Typography>

            <Typography variant="h5" gutterBottom>
                {cuisines.join(",")}
            </Typography>
            <Typography variant="h4" gutterBottom>
                {locality}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {costForTwoMessage}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {totalRatingsString}
            </Typography>


        </Box>

    )
}

export default RestaurantMenuPage