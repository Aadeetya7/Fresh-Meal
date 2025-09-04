import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

let renderWithSubScript = (name) => {
    return name.split("").map((char, index) =>
        /\d/.test(char) ? <sub key={index}>{char}</sub> : char
    )
}

const RestaurantCard = ({ resData }) => {

    const { name, imageTitle, image, cuisine, avgRating, costForTwo, deliveryTime } = resData;

    return (
        <>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={image}
                            title={imageTitle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {renderWithSubScript(name)}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {cuisine}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {avgRating}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {costForTwo}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {deliveryTime}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

export default RestaurantCard