import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const RestaurantCard = ({ resData }) => {
    // console.log(resData);
    if (!resData?.info) return null;

    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, locality, id } = resData.info;

    return (
        <>
            <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea component={Link} to={`/resturants/${id}`} >
                        <CardMedia
                            sx={{ height: 140 }}
                            image={cloudinaryImageId}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                noWrap
                                sx={{ maxWidth: 246 }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary', maxWidth: 246 }}
                                gutterBottom
                                noWrap
                            >
                                {(cuisines.join(","))}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {avgRating || "--"}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {costForTwo}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {locality}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

export default RestaurantCard