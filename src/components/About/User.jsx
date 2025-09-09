import { Box, Typography } from "@mui/material";
import { useState } from "react";

const User = ({ name, location, contact }) => {
    const [count] = useState(0)


    return (
        <>
            <Box>
                <Typography variant="h2">
                    Count : {count}
                </Typography>
                <Typography variant="h3">
                    Name : {name}
                </Typography>
                <Typography variant="h4">
                    Location  : {location}
                </Typography>
                <Typography variant="h5">
                    Contact : {contact}
                </Typography>
            </Box>
        </>
    )
}

export default User;