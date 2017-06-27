/**
 * Created by Shikha on 17/06/17.
 */


import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

class Main extends React.Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/roster' component={Roster}/>
                    <Route path='/schedule' component={Schedule}/>
                </Switch>
            </main>
        );
    }
}

export default Main;