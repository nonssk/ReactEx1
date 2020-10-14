import React, { Component } from "react";
import Show from './showdata';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            active: false,
        }
    }
    componentDidMount() {
        if (localStorage.getItem('Auth') === null) {
            this.props.history.replace('/login');
        } else {
            let data = JSON.parse(localStorage.getItem('Auth'));
            this.setState({
                data:data.data,
                active:data.status
            })
        }
    }

    logout=()=>{
        localStorage.removeItem('Auth');
        this.props.history.replace('/login');
    }

    render() {
        if (this.state.active) {
            return (
                <>
                <Show 
                data={this.state.data}
                logout={this.logout}
                />
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }


    }
}