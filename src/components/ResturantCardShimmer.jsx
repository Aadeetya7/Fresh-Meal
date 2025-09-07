import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const ResturantCardShimmer = () => {
    return (
        <Grid container spacing={2}>
            {[...Array(8)].map((_, i) => (
                <Grid item key={i}>
                    <Skeleton variant="rectangular" width={"284px"} height={"316px"} ></Skeleton>
                </Grid>
            ))}
        </Grid>
    )
}

export default ResturantCardShimmer