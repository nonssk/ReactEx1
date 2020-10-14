import React, { Component } from "react";
import Auth from '../component/auth'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.auth=new Auth();
        this.state={
            username:'',
            password:''
        }
    }
    componentDidMount(){
        if (localStorage.getItem('Auth') !== null) {
            this.props.history.replace('/');
        }
    }
    
    login=()=>{
        // alert(this.state.username)
        this.auth.login(this.state.username,this.state.password).then(res=>{
            if(res.status){
                localStorage.setItem('Auth',JSON.stringify(res))
                this.props.history.replace('/');
            }else{
                alert("NO")
                this.setState({
                    username:'',
                    password:''
                })
            }
        })
    }

  render() {
    return (
     <>
     Login<br/>
     <input type='text' value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}} /><br/>
     <input type='password' value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} />
     <button onClick={this.login}>login</button>
     </>
    );
  }
}