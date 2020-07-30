import React from 'react'
import {Link, Redirect} from 'react-router-dom'


const today = new Date()

class NewLog extends React.Component {

    

    state = {
        //come back later and change, hard coded the -0 because single digit months wont display the 0 without it
        start: today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate(),
        water: '',
        mood: '',
        title: '',
        sleep_start: '',
        sleep_end: '',
        sleep_start2: '',
        sleep_end2: '',
        sleep_start3: '',
        sleep_end3: '',
        meal_time: '',
        meal_name: '',
        meal_time2: '',
        meal_end2: '',
        meal_time3: '',
        meal_end3: '',
        change_page: false

        

    }
    //array of sleeps, everytime ou press plus button it pushes a sleep and adds an input


    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value })
        // debugger
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newLogObj = {
            user_id: this.props.currentUser.id,
            start: this.state.start,
            water: this.state.water,
            mood: this.state.mood,
            title: this.state.title,
            sleep_start: this.state.sleep_start,
            sleep_end: this.state.sleep_end,
            sleep_start2: this.state.sleep_start2,
            sleep_end2: this.state.sleep_end2,
            sleep_start3: this.state.sleep_start3,
            sleep_end3: this.state.sleep_end3,
            meal_time: this.state.meal_time,
            meal_name: this.state.meal_name,
            meal_time2: this.state.meal_time2,
            meal_name2: this.state.meal_name2,
            meal_time3: this.state.meal_time3,
            meal_name3: this.state.meal_name3
        }
        
        this.props.createLog(newLogObj)
         this.setState({
            change_page: true
        })
    }

 

    // try to make it so when you click button to add another input field to also doa fetchcall to create what u have so far
    // fetch to sleep + associate it with params[:log_id]

    //calll each individual log after mapping the array of the meal + sleep 
    // sleep.find iterate through the array
    render() {
        if (this.state.change_page === true) {
            return( <Redirect to='/logs'/>)
        }
        return(
            <div>
                <h3>How was your day?</h3>
                <form onSubmit={this.handleSubmit}>

                    {/* bootstrap for date
                    https://v4-alpha.getbootstrap.com/components/forms/ */}
                    <div className="form-group row">
                        <label for="example-date-input" class="col-2 col-form-label">Date</label>
                            <div class="col-10">
                                <input className="form-control" type="date" name ="start" value={this.state.start} onChange={this.changeHandler} id="example-date-input"/>
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Cups of water: </label>
                            <div className="col-sm-10">
                                <input  name="water" value={this.state.value} onChange={this.changeHandler} className="form-control" />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Mood: </label>
                            <div className="col-sm-10">
                                <input  name="mood" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    {/* <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Meals: </label>
                            <div className="col-sm-10">
                                <input  name="meals" value={this.state.meals} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div> */}

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_time" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_name" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_time2" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_name2" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_time3" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What did you eat: </label>
                            <div className="col-sm-10">
                                <input  name="meal_name3" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you sleep: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_start" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you wake up: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_end" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you sleep: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_start2" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you wake up: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_end2" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you sleep: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_start3" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > What time did you wake up: </label>
                            <div className="col-sm-10">
                                <input  name="sleep_end3" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Note: </label>
                            <div className="col-sm-10">
                                <input  name="title" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>
                
                    <input type="submit" value="Submit"/>


                </form>
            </div>
        )
    }
}

export default NewLog