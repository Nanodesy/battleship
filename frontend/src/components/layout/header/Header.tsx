import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, logout, selectFullName} from "../../../services/AuthorizationService.slice";
import {AppDispatch} from "../../../store";

const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const Login = <Button component={Link} to="/auth/login" color="inherit">Login</Button>
    const Logout = <Button onClick={() => dispatch(logout())} color="inherit">Logout</Button>
    const username = useSelector(selectFullName);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton component={Link} to="/" size="large" edge="start" color="inherit" aria-label="menu"
                                sx={{mr: 2}}>
                        <LogoDevIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, userSelect: "none"}}>
                        Battleship
                    </Typography>
                    <IconButton component={Link} to="/profile">
                        <LogoDevIcon></LogoDevIcon>
                    </IconButton>
                    { useSelector(isLoggedIn) ? <Typography>{username}</Typography> : undefined}
                    { useSelector(isLoggedIn) ? Logout : Login }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header