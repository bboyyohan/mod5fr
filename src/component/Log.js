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
    clickHandler = (e) => {
        debugger
        let editObj = this.props.logObj
        this.props.getEditObj(editObj)
    }
    render(){
        // let a = this.props.logObj.meals 
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
                                            <br/>
                                                {this.props.logObj.meals.map(mealObj => { 
                                                return( 
                                                    <div> 
                                                          Food: {mealObj.name} <br/>
                                                    
                                                          Time: {mealObj.time.split("T")[1].slice(0, 5)} 
                                                    
                                                    </div>
                                                )})}
                                                <br/>
                                            Meals Count: {this.props.logObj.meals.length}
                                            {/* Ate {this.props.logObj.meals[0] ? this.props.logObj.meals[0].name : null} at {this.props.logObj.meals[0] ? this.props.logObj.meals[0].time.split("T")[1].slice(0, 5) : null} */}
                                            <br/>
                                            {/* Slept at {this.props.logObj.sleeps[0] ? this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5) : null} */}
                                            {/* Slept at {this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5)} */}

                                            {this.props.logObj.sleeps.map(sleepObj => {
                                                return(
                                                    <div> 
                                                        Slept around: {sleepObj.start_time.split("T")[1].slice(0, 5)} 
                                                        <br/>
                                                        Woke up: {sleepObj.end_time.split("T")[1].slice(0, 5)}
                                                    
                                                    </div>
                            
                                                )
                                            })}
                                           
                                            {/* <br/>
                                            Woke up at {this.props.logObj.sleeps[0].end_time.split("T")[1].slice(0, 5)} */}

                                            {/* Woke up at {this.props.logObj.sleeps[0] ? this.props.logObj.sleeps[0].end_time.split("T")[1].slice(0, 5) : null} */}

                                            {/* Slept at {this.props.logObj} */}
                                
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