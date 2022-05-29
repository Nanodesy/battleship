import {Component, FormEvent} from "react";
import {Box, Button, Link, TextField, Typography} from "@mui/material";
import {Auth} from "../../../types/Auth";
import {signIn} from "../../../services/AuthorizationService";

type Props = {}
type State = {}

export default class Login extends Component<Props, State> {
    render() {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={this.handleSubmit}>
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
        );
    }

    private handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email: string = data.get("email")!.toString()
        const password: string = data.get("password")!.toString()
        const auth: Auth = {email: email, password: password}
        signIn(auth);
    }
}