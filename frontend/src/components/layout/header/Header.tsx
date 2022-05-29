import {Component} from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import {Link} from "react-router-dom";

type Props = {}
type State = {}

export default class Header extends Component<Props, State> {
    render() {
        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton component={Link} to="/" size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                            <LogoDevIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, userSelect: "none"}}>
                            Battleship
                        </Typography>
                        <Button component={Link} to="/auth/login" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}