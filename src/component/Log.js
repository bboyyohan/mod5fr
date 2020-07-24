import React from 'react'
import Card from "react-bootstrap/Card"
import {Link} from 'react-router-dom'



class Log extends React.Component {
    
    // removeLog = (e) => {
    //     console.log(e)
    //     debugger
    // }

    state = {

    }
    clickHandler = () => {
        let editObj = this.props.logObj
        this.props.getEditObj(editObj)
    }

    render(){
        // debugger
        return(
            // <div>
                <Card style={{ width: '18rem' }} >
                    <br/>
                    <Card.Body>
                        {/* change due to changing seed for date
                        <Card.Header>    Date: {this.props.logObj.date.split("T")[0]}  </Card.Header> */}
                        {/* ^ come back later to change the date to month day year */}
                        <Card.Header>    Date: {this.props.logObj.start}  </Card.Header>
                            <Card.Title> Mood Rating: {this.props.logObj.mood}</Card.Title>
   
                                <Card.Text> Drank {this.props.logObj.water} cups of water
                                
                                
                                </Card.Text>
                            <Card.Footer>
                                <button onClick={() => this.props.deleteLog(this.props.logObj)} > x </button> 
                            <Link to="/edit_log">
                                <button id="edit" onClick={this.clickHandler}> Edit</button>
                            </Link>
                            </Card.Footer>
                    </Card.Body>
                </Card>
            // </div> 
        )
    }
}

export default Log