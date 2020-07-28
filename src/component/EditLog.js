//Got lazy and just copied the newLog.js, and edit some stuff
// later maybe see if i can come up with a conditional inside newlog.js so i wont need this editlog.js

import React from 'react'


// const today = new Date()

class EditLog extends React.Component {

    

    state = {
        //come back later and change, hard coded the -0 because single digit months wont display the 0 without it
        start: this.props.editObject.start,
        water: this.props.editObject.water,
        mood: this.props.editObject.mood,
        title: this.props.editObject.title
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
            title: this.state.title
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

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" > Note: </label>
                            <div className="col-sm-10">
                                <input  name="title" value={this.state.title} onChange={this.changeHandler} className="form-control"  />
                            </div>
                    </div>

                    <input type="submit" value="Submit"/>


                </form>
            </div>
        )
    }
}

export default EditLog