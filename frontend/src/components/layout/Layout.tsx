import {Component, Fragment, ReactNode} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./content/Content";

type Props = {
    children: ReactNode
}
type State = {}

export default class Layout extends Component<Props, State> {
    render() {
        return (
            <Fragment>
                <Header/>
                <main>
                    <Content>
                        {this.props.children}
                    </Content>
                </main>
                <Footer/>
            </Fragment>
        )
    }
}