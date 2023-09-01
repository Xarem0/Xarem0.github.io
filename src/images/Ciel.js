import React, {Component} from "react";
import logo from './ciel_quebecois.png'

export default class Ciel extends Component {

    state = {
        url: logo
    }

    render() {
        return (
            <img src={this.state.url}></img>
        )
    }
}