import React from 'react'
import {Link} from 'react-router-dom'


const today = new Date()

class NewLog extends React.Component {

    

    state = {
        //come back later and change, hard coded the -0 because single digit months wont display the 0 without it
        start: today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate(),
        water: '',
        mood: '',
        note: ''
    }

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
            note: this.state.note
        }
        
        this.props.createLog(newLogObj)
    }

 

    render() {
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

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Note: </label>
                            <div className="col-sm-10">
                                <input  name="note" value={this.state.value} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <input type="submit" value="Submit"/>


                </form>
            </div>
        )
    }
}

export default NewLog