/**
 * Created by Shikha on 17/06/17.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster';
import Player from './Player';
import One from './one';

class Roaster extends React.Component {
    render() {
        return(
            <div>
                <h2>This is a roster page!</h2>
                <Switch>
                    <Route exact path='/roster' component={FullRoster}/>
                    <Route path='/roster/:number' component={Player}/>
                    <Route path='/roster/one' component={One}/>
                </Switch>
            </div>
        );
    }
}

export default Roaster;