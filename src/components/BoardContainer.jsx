import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Board from './Board'
class BoardContainer extends Component {
    render() { 
        return (
            <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh',minwidth: '300px' }}
            >

            <Grid item style={{minWidth: '300px' }}>
                <Board />
            </Grid>   

            </Grid>
        );
    }
}
 
export default BoardContainer;