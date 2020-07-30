import React from 'react'

class EditSleepsLog extends React.Component {

    state = {
        sleep_start: '',
        sleep_end: ''
    }
    componentDidMount(){
        this.setState({
            sleep_start: this.props.sleepObj.start_time.split("T")[1].slice(0, 5),
            sleep_end: this.props.sleepObj.end_time.split("T")[1].slice(0, 5)
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.props.sleepArr(e.target.name, e.target.value, this.props.sleepObj.id))
    }

    render(){
        return(
            
        <div id={this.props.sleepObj.id}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" > What time did you sleep: </label>
                    <div className="col-sm-10">
                        <input  name='sleep_start' value={this.state.sleep_start} onChange={this.changeHandler} className="form-control"  />
                    </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" > What time did you wake up: </label>
                    <div className="col-sm-10">
                        <input  name='sleep_end' value={this.state.sleep_end} onChange={this.changeHandler} className="form-control"  />
                    </div>
            </div>
        </div>

        )

    }


}

export default EditSleepsLog