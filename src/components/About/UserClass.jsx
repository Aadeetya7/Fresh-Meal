import { Box, Button, Typography } from "@mui/material";
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/aditya7")
        const json = await data.json()
        console.log(json);

        this.setState({
            userInfo: json
        })
    }


    render() {

        const { login, html_url, type, avatar_url } = this.state.userInfo

        return (
            <Box>
                <img src={avatar_url} />
                <Typography variant="h3">
                    Name :{login}
                </Typography>
                <Typography variant="h4">
                    Location  :{html_url}
                </Typography>
                <Typography variant="h5">
                    Contact : {type}
                </Typography>
            </Box>
        )
    }
}
export default UserClass