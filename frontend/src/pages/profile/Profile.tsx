import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUser} from "../../services/AuthorizationService.slice";

const Profile = () => {
    return (
        <Box sx={{textAlign: "center"}} id="profile">
            <Typography component="h1" variant="h5" mb="15px">Profile</Typography>
            <Box sx={{textAlign: "left"}}>
                <Typography>Email: {useSelector(selectUser)?.email}</Typography>
                <Typography>Firstname: {useSelector(selectUser)?.firstName}</Typography>
                <Typography>Lastname: {useSelector(selectUser)?.lastName}</Typography>
            </Box>
        </Box>
    )
}

export default Profile;