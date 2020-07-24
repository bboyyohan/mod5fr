import React from 'react'
import Log from '../component/Log.js'
import CardDeck from "react-bootstrap/CardDeck"
import NewLog from '../component/NewLog'
import {Link} from 'react-router-dom'



class LogContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            date: null
            
        }
    }

    // createLog = () => {
    //     fetch("http://localhost:3000/logs", {
    //        method: 'POST',
    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify({

    //        }) 
    //     })
    // }

    // createLog = (e) => {
       
    // }


    render(){
        return(
            <div>
                <CardDeck>
                    {this.props.logs.map(log => <Log logObj={log} key={log.id} deleteLog={this.props.deleteLog} update={this.props.updateLog} getEditObj={this.props.getEditObj}/>)}
                </CardDeck>

                <Link to="/new_log">
                    {/* <NewLog createLog={this.props.createLog} currentUser={this.props.currentUser}/>  */}
                    <button > + </button>
                </Link>
                {/* <button onClick={this.createLog} > Create new log</button> */}
                
            </div>
        )
    }
}

export default LogContainer