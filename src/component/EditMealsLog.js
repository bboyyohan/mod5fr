import React from 'react'

class EditMealsLog extends React.Component {

    state = {
        meal_name: '',
        meal_time: ''
    }
    componentDidMount(){
        this.setState({
            meal_name: this.props.mealObj.name,
            meal_time: this.props.mealObj.time.split("T")[1].slice(0, 5)
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            
        <div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" > What time did you eat: </label>
                    <div className="col-sm-10">
                        <input  name='meal_time' value={this.state.meal_time} onChange={this.changeHandler} className="form-control"  />
                    </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label" > What did you eat: </label>
                    <div className="col-sm-10">
                        <input  name='meal_name' value={this.state.meal_name} onChange={this.changeHandler} className="form-control"  />
                    </div>
            </div>
        </div>

        )

    }


}

export default EditMealsLog