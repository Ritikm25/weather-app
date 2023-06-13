import { Component } from "react";
import Test from "./Test";
import stcontext from './stcontext'

export default class Abc extends Component {

    static contextType = stcontext
    render() {
        return < >
            <
            h2 > this is Abc component < /h2> { this.context.map(ct => < > < b > { ct } < /b></ > ) } <
            Test / >
            <
            />


    }

}