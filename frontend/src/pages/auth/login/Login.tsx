import {FormEvent} from "react";
import {Box, Button, Link, TextField, Typography} from "@mui/material";
import {Auth} from "../../../types/Auth";
import {signIn} from "../../../services/AuthorizationService";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import {setUser} from "../../../services/AuthorizationService.slice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const auth: Auth = Object.fromEntries(data.entries()) as Auth
        signIn(auth)
            .then(authResponse => dispatch(setUser(authResponse)))
            .then(() => navigate("/"))
            .catch(error => alert(error.message))
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField margin="normal"
                           required fullWidth
                           id="email"
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                           autoFocus/>
                <TextField margin="normal"
                           required fullWidth
                           id="password"
                           label="Password"
                           type="password"
                           name="password"
                           autoComplete="current-password"/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}>Submit</Button>
                <Link href="/auth/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Box>
        </Box>
    )
}

export default Login