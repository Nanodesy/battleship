import {Component, FormEvent} from "react";
import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Auth} from "../../../types/Auth";
import {signUp} from "../../../services/AuthorizationService";

type Props = {}
type State = {}

export default class Register extends Component<Props, State> {
    render() {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="given-name"
                                       name="firstName"
                                       required
                                       fullWidth
                                       id="firstName"
                                       label="First Name"
                                       autoFocus/></Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required
                                       fullWidth
                                       id="lastName"
                                       label="Last Name"
                                       name="lastName"
                                       autoComplete="family-name"/></Grid>
                        <Grid item xs={12}>
                            <TextField required
                                       fullWidth
                                       id="email"
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"/></Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"/></Grid>
                    </Grid>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}>Sign Up</Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/auth/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )
    }

    private handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const firstName: string = data.get("firstName")!.toString()
        const lastName: string = data.get("lastName")!.toString()
        const email: string = data.get("email")!.toString()
        const password: string = data.get("password")!.toString()
        const auth: Auth = {firstName: firstName, lastName: lastName, email: email, password: password}
        signUp(auth);
    }
}