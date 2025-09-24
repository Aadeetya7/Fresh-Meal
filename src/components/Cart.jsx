import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../../store/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <Box>
            <Typography>
                Cart
            </Typography>
            <Button
                sx={{ border: "solid", borderWidth: "1px" }}
                onClick={handleClearCart}
            >
                Clear
            </Button>
            {cartItems.length === 0 && <Typography>Add items it is empty</Typography>}
            <Box>
                <ItemList items={cartItems} />
            </Box>
        </Box>
    )
}

export default Cart