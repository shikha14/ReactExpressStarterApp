/**
 * Created by Shikha on 17/06/17.
 */
import React from 'react';
import { PlayerAPI } from '../PlayerAPI';
import { Link } from 'react-router-dom';

class Player extends React.Component {

    render() {
        const player = PlayerAPI.get(
            parseInt(this.props.match.params.number, 10)
        )
        if (!player) {
            return <div>Sorry, but the player was not found</div>
        }
        return(
            <div>
                <h1>{player.name} (#{player.number})</h1>
                <h2>{player.position}</h2>
                <Link to='/roster'>Back</Link>
            </div>);
    }
}

export default Player;