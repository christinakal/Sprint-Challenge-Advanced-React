import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Player = (props) => {
    return (
        <div className="player-card-wrapper">
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.country}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Player;