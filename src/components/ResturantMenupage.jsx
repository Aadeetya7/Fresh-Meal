import { Box, List, ListItem, Typography } from "@mui/material"
import RestaurantCardShimmer from "./ResturantCardShimmer"
import { useParams } from "react-router-dom"
import useResturantMenu from "../utils/useResturantMenu"

const RestaurantMenuPage = () => {

    const { resid } = useParams()
    console.log(resid);

    const resInfo = useResturantMenu(resid)

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