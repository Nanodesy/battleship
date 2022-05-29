import {Component, ReactNode} from "react";
import {Container} from "@mui/material";

type Props = {
    children: ReactNode
}
type State = {}

export default class Content extends Component<Props, State> {
    render() {
        return (
            <Container sx={{ display: "flex", justifyContent: "center", mt: "10px", mb: "10px"}}>
                {this.props.children}
            </Container>
        )
    }
}
