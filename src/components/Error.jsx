import { Box, Typography } from "@mui/material"
import { useRouteError } from "react-router-dom"


const Error = () => {
    const err = useRouteError();
    return <Box>
        <Typography>
            Error page
        </Typography>
        {err.status} : {err.statusText}
    </Box>
}

export default Error