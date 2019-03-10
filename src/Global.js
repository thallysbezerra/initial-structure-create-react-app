import React, { Component } from "react";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";

export default class Global extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}
