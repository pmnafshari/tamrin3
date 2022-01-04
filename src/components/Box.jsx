import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import TableCell from '@material-ui/core/TableCell';
const useStyles = theme => ({
    root: {},
    tableBorder: {
        borderWidth: 0,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        borderStyle: 'solid',
        cursor: 'pointer'
    },
});

class Box extends Component {
    state = {  }
    render() { 
        const {classes} = this.props;
        if(this.props.data === "Reset")
            return ( <TableCell onClick={this.props.clickHandler}style={{width:"33%",backgroundColor:'#e74c3c',color:'white',fontSize:'15px'}} className={classes.tableBorder} align="center">{this.props.data}</TableCell> );
        return ( <TableCell onClick={this.props.clickHandler}style={{width:"33%"}} className={classes.tableBorder} align="center">{this.props.data}</TableCell> );
    }
}
 
export default withStyles(useStyles)(Box);