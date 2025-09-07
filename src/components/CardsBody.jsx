import '../styles/CardsBody.scss'
import { styled, alpha, Grid, TextField, InputAdornment, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import ResturantCardShimmer from './ResturantCardShimmer';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const CardsBody = () => {
    const [resturantData, SetresturantData] = useState([])
    const [filteredResturant, SetfilteredResturant] = useState([])
    const [searchText, setsearchText] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#")
        const json = await data.json();
        const restuCard = json?.data?.cards.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        const restu = restuCard.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        SetresturantData(restu);
        SetfilteredResturant(restu);
        console.log(restu);
    }

    const handleSearchInput = () => {
        const filteredData = resturantData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        // res.info.name.includes(searchText)
        SetfilteredResturant(filteredData)
    }

    return resturantData.length === 0 ?
        (<ResturantCardShimmer />) : (
            <>
                {/* Search Icon */}
                <Box sx={{ display: "flex", alignItems: "Center", justifyContent: "space-between", mb: 2 }}>
                    <Search>
                        <TextField
                            variant="outlined"
                            placeholder="Search…"
                            size="small"
                            value={searchText}
                            onChange={(e) => {
                                setsearchText(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSearchInput()
                            }}
                            sx={{
                                borderRadius: "12px",           // rounded corners
                                backgroundColor: "#fff",        // white background
                                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", // subtle shadow
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px",         // match input corners
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "10px 12px",         // padding inside input
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <Box
                                            sx={{ cursor: "pointer" }}
                                            onClick={handleSearchInput}
                                        >
                                            <SearchIcon
                                                color="action"
                                                sx={{ display: "block" }}
                                            />
                                        </Box>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Search>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            const filteredData = resturantData.filter((item) => item?.info.avgRating >= 4.1);
                            console.log("hello");
                            SetresturantData(filteredData)
                        }}
                    >
                        Top Rated Resturants
                    </Button>
                </Box>
                {/* Resturant cards */}
                <Grid container spacing={2}>
                    {
                        filteredResturant.map((resturant) => {
                            return <RestaurantCard resData={resturant} key={resturant.info.id} />
                        })
                    }
                </Grid>
            </>
        )
}

export default CardsBody