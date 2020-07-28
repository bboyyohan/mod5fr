//Got lazy and just copied the newLog.js, and edit some stuff
// later maybe see if i can come up with a conditional inside newlog.js so i wont need this editlog.js

//changed state (meals, sleeps) + handlers + added meals sleeps input

import React from 'react'
import {Link} from 'react-router-dom'



// const today = new Date()

class EditLog extends React.Component {

    

    state = {
        //come back later and change, hard coded the -0 because single digit months wont display the 0 without it
        start: this.props.editObject.start,
        water: this.props.editObject.water,
        mood: this.props.editObject.mood,
        title: this.props.editObject.title,
        // sleeps: this.props.editObject.sleeps[0].quantity,
        // meals: this.props.editObject.meals[0].quantity
        meal_name: this.props.editObject.meals[0].name,
        meal_time: this.props.editObject.meals[0].time.split("T")[1].slice(0, 5),
        sleep_start: this.props.editObject.sleeps[0].start_time.split("T")[1].slice(0, 5),
        sleep_end: this.props.editObject.sleeps[0].end_time.split("T")[1].slice(0, 5)
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value })
        // debugger
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let updateLogObj = {
            id: this.props.editObject.id,
            user_id: this.props.currentUser.id,
            start: this.state.start,
            water: this.state.water,
            mood: this.state.mood,
            title: this.state.title,
            meal_name: this.state.meal_name,
            meal_time: this.state.meal_time,
            sleep_start: this.state.sleep_start,
            sleep_end: this.state.sleep_end
            // sleeps: this.state.sleeps,
            // meals: this.state.meals
        }
        
        this.props.updateLog(updateLogObj)
    }

 

    render() {
        return(
            <div>
                <h3>Edit</h3>
                <form onSubmit={this.handleSubmit}>

                    {/* bootstrap for date
                    https://v4-alpha.getbootstrap.com/components/forms/ */}
                    <div className="form-group row">
                        <label for="example-date-input" className="col-2 col-form-label">Date</label>
                            <div class="col-10">
                                <input className="form-control" type="date" name ="start" value={this.state.start} onChange={this.changeHandler} id="example-date-input"/>
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Cups of water: </label>
                            <div className="col-sm-10">
                                <input  name="water" value={this.state.water} onChange={this.changeHandler} className="form-control" />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Mood: </label>
                            <div className="col-sm-10">
                                <input  name="mood" value={this.state.mood} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    {/* <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Meals: </label>
                            <div className="col-sm-10">
                                <input  name="meals" value={this.state.meals} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div> */}

                    {/* <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Hours Slept: </label>
                            <div className="col-sm-10">
                                <input  name="sleeps" value={this.state.sleeps} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div> */}

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_time" value={this.state.meal_time} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_name" value={this.state.meal_name} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you sleep: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_start" value={this.state.sleep_start} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you wake up: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_end" value={this.state.sleep_end} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Note: </label>
                            <div className="col-sm-10">
                                <input  name="title" value={this.state.title} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>
                    {/* <Link to="/logs"> */}
                        <input type="submit" value="Submit"/>
                    {/* </Link> */}

                </form>
            </div>
        )
    }
}

export default EditLog