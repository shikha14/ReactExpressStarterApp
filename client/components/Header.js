/**
 * Created by Shikha on 17/06/17.
 */


import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/roster'>Roster</Link></li>
                        <li><Link to='/schedule'>Schedule</Link></li>
                        <li><Link to='/roster/one'>One</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;