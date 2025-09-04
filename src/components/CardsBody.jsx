import '../styles/CardsBody.scss'
import { styled, alpha, Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RestaurantCard from './RestaurantCard';
import { SiOxygen } from 'react-icons/si';

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

const resData = [
    {
        name: "O2",
        cuisine: "Banquet Hall, Dinner, Breakfast",
        avgRating: 4.3,
        costForTwo: "₹800 for two",
        deliveryTime: "30–40 min",
        image: "src/assets/images/FoodImage-1.jpg",
        imageTitle: "First-image"
    },
    {
        name: "B12",
        cuisine: "Italian, Pizza, Pasta",
        avgRating: 4.1,
        costForTwo: "₹600 for two",
        deliveryTime: "25–35 min",
        image: "src/assets/images/foodImage-2.jpg",
        imageTitle: "Second-image"

    },
    {
        name: "Spice Garden",
        cuisine: "North Indian, Mughlai, Biryani",
        avgRating: 4.5,
        costForTwo: "₹1000 for two",
        deliveryTime: "35–45 min",
        image: "src/assets/images/foodImage-3.jpg",
        imageTitle: "Third-image"

    },
    {
        name: "Green Leaf",
        cuisine: "Vegan, Salads, Healthy Food",
        avgRating: 4.6,
        costForTwo: "₹700 for two",
        deliveryTime: "20–30 min",
        image: "src/assets/images/foodImage-4.jpg",
        imageTitle: "Fourth-image"

    },
    {
        name: "Dragon Hut",
        cuisine: "Chinese, Thai, Asian Fusion",
        avgRating: 4.2,
        costForTwo: "₹900 for two",
        deliveryTime: "30–40 min",
        image: "src/assets/images/foodImage-5.jpg",
        imageTitle: "Fifth-image"

    },
    {
        name: "Savvali",
        cuisine: "Mutton Rassa",
        avgRating: 5,
        costForTwo: "₹1000 for two",
        deliveryTime: "30–40 min",
        image: "src/assets/images/footImage-6.jpg",
        imageTitle: "Fifth-image"

    }
];

const CardsBody = () => {
    return (
        <>
            {/* Search Icon */}
            <Search sx={{ mb: 2, }}>
                <TextField
                    variant="outlined"
                    placeholder="Search…"
                    size="small"
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
                            <InputAdornment    >
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Search>
            {/* Resturant cards */}
            <Grid container spacing={2}  >
                {
                    resData.map((resturant, index) => {
                        return <RestaurantCard resData={resturant} key={index} />
                    })
                }
            </Grid>
        </>
    )
}

export default CardsBody