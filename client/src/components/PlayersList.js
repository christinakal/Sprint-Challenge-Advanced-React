import React from 'react';
import '../App.css';
import { useDarkMode } from './../hooks/useDarkMode'
import Player from './Player';
import Chart from './Chart';
import Switch from '@material-ui/core/Switch';

const PlayersList = (props) => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <Switch
                onChange={toggleMode}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <h1 className="players-info">Players Info:</h1>
            <Chart data={props.players}/>
            {props.players.map(player => (
                <Player key={player.id} name={player.name} country={player.country}/>
            ))}
        </div>
    )
};

export default PlayersList