import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Box from './Box';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Board extends Component {
    state = {
        board:[{id:0,val:""},{id:1,val:""},{id:2,val:""},{id:3,val:""},{id:4,val:""},{id:5,val:""},{id:6,val:""},{id:7,val:""},{id:8,val:""}],
        turn:'X',
        winx:0,
        wino:0,
        winner:"",
        movecount:0
    }
    checkwin = () =>{
        let board = this.state.board;
        let wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
        for (let i = 0; i < wins.length; i++) {
            if(board[wins[i][0]].val!==""&&board[wins[i][0]].val===board[wins[i][1]].val&&board[wins[i][0]].val===board[wins[i][2]].val){
                this.setState({winner:board[wins[i][0]].val});
                if(board[wins[i][0]].val==="X"){
                    let temp = this.state.winx;
                    temp++;
                    this.setState({winx:temp});
                }else if(board[wins[i][0]].val==="O"){
                    let temp = this.state.wino;
                    temp++;
                    this.setState({wino:temp});
                }
                return;
            }
        }
        if(this.state.movecount === 8){
            this.setState({winner:"draw"});
        }
    }
    clickhandler = (id) =>{
        let temp = this.state.board;
        let nturn = this.state.turn;
        if(temp[id].val === "" && this.state.winner === ""){
            temp[id].val=nturn;
            nturn = (nturn==='X')?'O':'X';
            let moves = this.state.movecount;
            moves++;
            this.setState({board:temp,turn:nturn,movecount:moves});
            this.checkwin();
        }
    }
    
    resethandler = () =>{
        this.setState({
            board:[{id:0,val:""},{id:1,val:""},{id:2,val:""},{id:3,val:""},{id:4,val:""},{id:5,val:""},{id:6,val:""},{id:7,val:""},{id:8,val:""}],
            turn:'X',
            wino: this.state.wino,
            winx: this.state.winx,
            winner: "",
            movecount: 0
        })
    }
    render() { 
        return (
            <React.Fragment>
            <TableContainer component={Paper}>
                <Table className="board" aria-label="customized table">
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        <TableRow style={{height:100}}>
                        <Box clickHandler={()=>this.clickhandler(0)} data={this.state.board[0].val} />
                        <Box clickHandler={()=>this.clickhandler(1)} data={this.state.board[1].val} />
                        <Box clickHandler={()=>this.clickhandler(2)} data={this.state.board[2].val} />
                        </TableRow>
                        <TableRow style={{height:100}}>
                        <Box clickHandler={()=>this.clickhandler(3)} data={this.state.board[3].val} />
                        <Box clickHandler={()=>this.clickhandler(4)} data={this.state.board[4].val} />
                        <Box clickHandler={()=>this.clickhandler(5)} data={this.state.board[5].val} />
                        </TableRow>
                        <TableRow style={{height:100}}>
                        <Box clickHandler={()=>this.clickhandler(6)} data={this.state.board[6].val} />
                        <Box clickHandler={()=>this.clickhandler(7)} data={this.state.board[7].val} />
                        <Box clickHandler={()=>this.clickhandler(8)} data={this.state.board[8].val} />
                        </TableRow>
                        <TableRow style={{height:50}}>
                        <Box clickHandler={()=>this.resethandler()} data='Reset' />
                        <Box data={this.state.winner===""?this.state.turn+"'s turn":(this.state.winner==="draw"?"Draw!":this.state.winner+" Won!")} />
                        <Box data= {`X : ${this.state.winx}  O : ${this.state.wino}`} />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </React.Fragment>
        );
    }
}
 
export default Board;