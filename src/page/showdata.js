import React, { Component } from "react";

export default class Show extends Component {
    render() {
            return (
                <>
                    User :{this.props.data.username}<br />
                    Name :{this.props.data.name}<br />
                    Nick :{this.props.data.nick}<br />
                    Age :{this.props.data.age}<br />
                    <button onClick={()=>{this.props.logout()}}>Logout</button>
                </>
            );

    }
}