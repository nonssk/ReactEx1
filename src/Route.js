import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './page/main';
import Login from './page/login'

export default class Routes extends React.Component {
    render() {
        return ( 
            
            <Switch>
            <Route exact path = '/' component = { Main }/>
            <Route exact path = '/login' component = { Login }/>
            <Route render = {
                ()=>{
                    return <h1 > Not Found </h1>;
                }
            }
            />
            </Switch>
           
        );
    }
}