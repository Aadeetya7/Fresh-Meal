import { Box, List, ListItem, Typography } from "@mui/material"
import RestaurantCardShimmer from "./ResturantCardShimmer"
import { useParams } from "react-router-dom"
import useResturantMenu from "../utils/useResturantMenu"
import ResturantCatogery from "../components/ResturantCatogery"
import { useState } from "react"

const RestaurantMenuPage = () => {

    const { resid } = useParams()

    const resInfo = useResturantMenu(resid)

    const [expandIndex, setexpandIndex] = useState(null)

    const { name, cuisines, costForTwoMessage, locality, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info || {};

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

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

            {categories.map((category, index) => {
                return <ResturantCatogery
                    data={category?.card?.card}
                    key={category?.card?.card?.categoryId}
                    expanded={expandIndex === index}
                    onChange={() => setexpandIndex(expandIndex === index ? null : index)}
                />
            })}

        </Box>

    )
}

export default RestaurantMenuPage