import { Box, Typography } from '@mui/material'
import UserClass from './UserClass'

const About = () => {

    return (
        <Box>
            <Typography>This is About Page</Typography>
            {/* <User name={"Function Component"} location={"Pune"} contact={"Hello India"} /> */}
            <UserClass name={"Class Component"} location={"pimpri"} contact={"Hello World"} />
        </Box>
    )
}

export default About