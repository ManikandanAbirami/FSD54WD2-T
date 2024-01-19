import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' }
    }
    componentDidMount() {
        console.log("After load!!!!");
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <h1>{this.state.greeting}, {this.props.name}</h1>
        )
    }
}

export default Welcome