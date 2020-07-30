import React from 'react'
import Card from "react-bootstrap/Card"
import {Link} from 'react-router-dom'
import Modal from "react-bootstrap/Modal"




class Log extends React.Component {
    
    // removeLog = (e) => {
    //     console.log(e)
    //     debugger
    // }

    state = {
        meals: false,
        sleeps: false
    }
    clickHandler = (e) => {
        // debugger
        let editObj = this.props.logObj
        this.props.getEditObj(editObj)
    }

    mealsModal = (e) => {
        this.setState({
            meals: !this.state.meals
        })
      
    }

    sleepsModal = (e) => {
        // debugger
        // let end = this.props.logObj.sleeps[0].end_time.split("T")[1].slice(0, 5)

        // let start = parseInt((this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5).split(":")[0]))
        // let end = parseInt((this.props.logObj.sleeps[0].end_time.split("T")[1].slice(0, 5).split(":")[0]))
        // let minutesStart = parseInt((this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5).split(":")[1]))
        // let minutesEnd = parseInt((this.props.logObj.sleeps[0].end_time.split("T")[1].slice(0, 5).split(":")[1]))
        // if (start > end) {
        //    let a = 24 - start + end
        //     return a
        // } else {
        //     let b = end - start
        //     return b
        // }


        // ^get number from 1st

        // let start = this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5)
        // debugger

        this.setState({
            sleeps: !this.state.sleeps
        })
      
    }

    closeMeal = (e) => {
        this.setState({
          meals: false
        })    
    }

    closeSleep = (e) => {
        // debugger
        this.setState({
          sleeps: false
        })    
    }

    render(){
        // let a = this.props.logObj.meals 
        // debugger
        return(
            
            <div>
                    {/* {this.state.meals} */}
                    <Modal show={this.state.meals} onHide={this.mealsModal} >
                        <Modal.Header closeButton>
                            <Modal.Title>Meals</Modal.Title>
                        </Modal.Header>

                            <Modal.Body>
                            <form onSubmit={this.closeMeal}>
                                {this.props.logObj.meals.map(mealObj => { 
                                    return( 
                                        <div> 
                                                Food: {mealObj.name} <br/>
                                        
                                                Time: {mealObj.time.split("T")[1].slice(0, 5)} 
                                        
                                        </div>
                                )})}

                                <input type="submit" value="close" />
                            </form>
                            </Modal.Body>
                        </Modal>

                        <Modal show={this.state.sleeps} onHide={this.sleepsModal} >
                            <Modal.Header closeButton>
                                <Modal.Title>Sleep</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <form onSubmit={this.closeSleep}>
                                    {this.props.logObj.sleeps.map(sleepObj => { 
                                        return( 
                                            <div> 
                                                    Start: {sleepObj.start_time.split("T")[1].slice(0, 5)} <br/>
                                            
                                                    End: {sleepObj.end_time.split("T")[1].slice(0, 5)} <br/>

                                                    {/* Total Hours:  */}
                                            
                                            </div>
                                    )})}

                                    <input type="submit" value="close" />
                                </form>
                            </Modal.Body>
                        </Modal>
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
                                                {/* {this.props.logObj.meals.map(mealObj => { 
                                                return( 
                                                    <div> 
                                                          Food: {mealObj.name} <br/>
                                                    
                                                          Time: {mealObj.time.split("T")[1].slice(0, 5)} 
                                                    
                                                    </div>
                                                )})} */}
                                                <br/>
                                            <p name='meals' onClick={this.mealsModal}>Meal Count: {this.props.logObj.meals.length}</p>
                                            {/* Ate {this.props.logObj.meals[0] ? this.props.logObj.meals[0].name : null} at {this.props.logObj.meals[0] ? this.props.logObj.meals[0].time.split("T")[1].slice(0, 5) : null} */}
                                            <br/>
                                            {/* Slept at {this.props.logObj.sleeps[0] ? this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5) : null} */}
                                            {/* Slept at {this.props.logObj.sleeps[0].start_time.split("T")[1].slice(0, 5)} */}


                                            <p name='sleeps' onClick={this.sleepsModal}>Sleep Pattern </p>

                                            
                                                        {/* important below */}
                                            {/* {this.props.logObj.sleeps.map(sleepObj => {
                                                let hour = new Date(sleepObj.start_time).getHours()
                                                var d = new Date(date);
                                    var hh = d.getHours();
                                    var m = d.getMinutes();
                                    var s = d.getSeconds();
                                    var dd = "AM";
                                    var h = hh;
                                    if (h >= 12) {
                                                    hour = hh - 12
                                                    dd = "PM"
                                                }
                                                  if (h == 0) {
                                                    h = 12;
                                                  }
                                                  m = m < 10 ? "0" + m : m;
                                                } */}

                                                {/* return(
                                                    <div> 
                                                        Slept around: {sleepObj.start_time.split("T")[1].slice(0, 5)} 
                                                        <br/>
                                                        Woke up: {sleepObj.end_time.split("T")[1].slice(0, 5)}
                                                    
                                                    </div>
                            
                                                )
                                            })} */}
                                           
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
            </div> 
        )
    }
}

export default Log