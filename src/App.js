import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import LogContainer from './container/LogContainer'
import Navbar from './component/Navbar'
import ContentContainer from './container/ContentContainer';
import {Route, Switch, Redirect} from 'react-router-dom'
//
import LogContainer from './container/LogContainer'
import Home from './component/Home'
import NewLog from './component/NewLog'
import EditLog from './component/EditLog'
import Calendar from './component/Calendar'
import Calendar2 from './component/Calendar2'



class App extends React.Component {
  state = {
    currentUser: null,
    logs: [],
    editObject: null

  }

  currentUser = (user, logs) => {
    let dateSort = logs.sort(function(a, b) {
      return new Date(a.start) - new Date(b.start)
    })
    // debugger
    // sort logs by start 
  
    this.setState({currentUser: user, logs: dateSort})
  }

  createLog = (newLogObj) => {
    // console.log(newLogObj)
    fetch("http://localhost:3000/logs", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLogObj)
    }).then(res => res.json())
    .then(newLog => {
      let updatedArr = [...this.state.logs, newLog]
      let sortedArr = updatedArr.sort(function(a, b) {
        return new Date(a.start) - new Date(b.start)
      })
      this.setState({
        logs: sortedArr
      })
    })
  }

  deleteLog = (logObj) => {
    // console.log("delete log")
    // 
    fetch(`http://localhost:3000/logs/${logObj.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this.setState({
      logs: this.state.logs.filter( log => log.id !== logObj.id)
    }))
  }

  getEditObj = (editObj) => {
    // debugger
    this.setState({
      editObject: editObj
    })
  }

  //atm the log's actual id changes since the id you see in /logs isnt the actual log's id
  updateLog = (updateObj) => {
    // console.log("edit")
    debugger
    fetch(`http://localhost:3000/logs/${updateObj.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateObj)
    }).then(res => res.json()).then(updateLog => {
      let takeLog = this.state.logs.filter(log => log.id !== updateLog.id)
      let updatedLog = [...takeLog, updateLog]
      let sortedLog = updatedLog.sort(function(a, b){
        return new Date(a.start) - new Date(b.start)
      })
      this.setState({
        logs: sortedLog
      })
      
    })

  }
  
  render() {
    return (
      <div>
        <Navbar currentUser={this.currentUser}/>
          <Switch>
              <Route exact path="/" render={() =>
                // this.state.currentUser ? <Redirect to='/logs' /> : <ContentContainer component={Home} />
                this.state.currentUser ? <Redirect to='/logs' /> : <Home />
              }/>

              <Route path="/logs" render={() =>
                // this.state.currentUser ? <ContentContainer component={LogContainer} currentUser={this.state.currentUser} logs={this.state.logs}/> : <Redirect to='/' />
                this.state.currentUser ? <LogContainer currentUser={this.state.currentUser} logs={this.state.logs} createLog={this.createLog} deleteLog={this.deleteLog} getEditObj={this.getEditObj}/> : <Redirect to='/' />
              }/>

              <Route path="/new_log" render={() =>
                this.state.currentUser ? <NewLog currentUser={this.state.currentUser} createLog={this.createLog}/> : <Redirect to='/' />
              }/>

              <Route path="/edit_log" render={() =>
                this.state.currentUser ? <EditLog currentUser={this.state.currentUser} editObject={this.state.editObject} updateLog={this.updateLog}/> : <Redirect to='/' />
              }/>

              {/* <Route path="/calendar" render={() =>
                this.state.currentUser ? <Calendar currentUser={this.state.currentUser} logs={this.state.logs} /> : <Redirect to='/' />
              }/> */}
              <Route path="/calendar" render={() =>
                this.state.currentUser ? <Calendar2 currentUser={this.state.currentUser} logs={this.state.logs} /> : <Redirect to='/' />
              }/>


            {/* <ContentContainer currentUser={this.state.currentUser} logs={this.state.logs}/> */}
          </Switch>
      </div>
    )
  }
}

export default App
