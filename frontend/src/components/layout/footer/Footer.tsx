import {Component} from "react";
import {BottomNavigation, Typography} from "@mui/material";

type Props = {}
type State = {}


export default class Footer extends Component<Props, State> {
    render() {
        return (
            <footer>
                <BottomNavigation showLabels={false} sx={{display: "flex", alignItems: "center"}}>
                    <Typography>Battleship 2022</Typography>
                </BottomNavigation>
            </footer>
        )
    }
}