import { AccordionDetails, Button, Divider, Typography } from "@mui/material"
import { Box } from "@mui/material"
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

const ItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch();


    const handleAddItem = (item) => {
        dispatch(addItem(item));
        //    Whatever we pass in from here goes like action.payload
    }

    return (
        <AccordionDetails>
            {/* {items?.card?.info?.name} */}
            {items.map((item, index) => {
                return (
                    <React.Fragment key={item.card.info.id} >
                        {index !== 0 && <Divider />}
                        <Box sx={{ paddingTop: index !== 0 ? "10px" : "0px", paddingBottom: "10px" }}>
                            <Box component="div">
                                <Typography
                                    component="span"
                                >
                                    {item.card.info.name}
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{ paddingLeft: "20px" }}
                                >
                                    Rs.{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}
                                </Typography>
                            </Box>
                            <Typography
                                component="div"
                            >
                                {item.card.info.description}
                            </Typography>
                            <Button onClick={() => handleAddItem(item)}>
                                Add +
                            </Button>
                        </Box>

                    </React.Fragment>
                )
            })}
        </AccordionDetails >
    )
}

export default ItemList