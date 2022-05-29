import {Component} from "react";
import {Typography} from "@mui/material";

type Props = {}
type State = {}

export default class NotFound extends Component<Props, State> {
    render() {
        return (
            <Typography>Page not found!</Typography>
        )
    }
}