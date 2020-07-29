import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './Event-utils'
import '../calendar.css'

export default class DemoApp extends React.Component {

//   state = {
//     weekendsVisible: true,
//     currentEvents: []
//   }

constructor(props){
    super(props)
    this.state = {
      weekendsVisible: true,
      currentEvents: this.props.logs,
      meal: [],
      water: [],
      sleep: []
    }
  }


//   handleChange = (e) => {
//     let name  = e.target.name
//     this.setState({
//       [e.target.name]: this.props.logs.map(log => log.e.target.name
// )
//     })
    
//   }
//   {
//     initialView: 'timeline', 
//     duration: { days: 3 }
//   });
  render() {
      // debugger
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <select value={this.state.value} onChange={this.handleChange}>
            <option name="all" value={this.state.meal}>All</option>
            <option name="meal" value={this.state.meal}>Meal</option>
            <option name="water" value={this.state.water}>Water</option>
            <option name="sleep" value={this.state.sleep}>Sleep</option>
        </select>        
        {/* <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
          <span class="caret"></span> </button>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
        </div> */}

        <div className='demo-app-main'>
          <FullCalendar
            
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            // right: ''

            }}
            initialView='dayGridMonth'
            // initialView='timeline'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            // initialEvents={INITIAL_EVENTS}
             // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          //  customButtons={this.renderButton()}

           initialEvents={this.formatEvents()}
           //after formatting events, filter the events, make sure each one has diff color, before u send you send events, filter those events
           // if else statement. if button is clicked water, then event should feed from this thing. initialevents 
           // if button is cliked on water, then initialevents = this.water.events else w.e
           // what's my mood, see each event in diff color
           // after that work on clickign to see more details 
           // 
          // events={INITIAL_EVENTS}

          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    // debugger
    return (
      <div className='demo-app-sidebar'>
        {/* <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div> */}
        {/* <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div> */}
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  // renderDropDown() {

  // }

  // renderButton() {
  //   customButtons: {
  //     myCustomButton: {
  //       text: 'custom!',
  //       click: function() {
  //         alert('clicked the custom button!');
  //       }
  //     }
  //   },
  //   headerToolbar: {
  //     left: 'prev,next today myCustomButton',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
  //   }
  // }



//   handleWeekendsToggle = () => {
//     this.setState({
//       weekendsVisible: !this.state.weekendsVisible
//     })
//   }

  handleDateSelect = (selectInfo) => {
    //redirect or doing this form in a modal
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  formatEvents = () => {
    // debugger
    return this.state.currentEvents.map(log => {
      const {title, start} = log
      

      let startTime = new Date(start).toISOString().replace(/T.*$/, '')
      
      //make a condition here or turnary inside return
      //red = bad, blue = good

      let ptAvg = log.mood + log.water 
      if (log.mood < 3){
      return {
        id: log.id,
        title: title,
        start: startTime,
        allDay: true,
        display: 'background',
        color: '#ff9f89',

        
        extendedProps: {...log}
      }}else {
        return {
        id: log.id,
        title: title,
        start: startTime,
        allDay: true,
        display: 'background',
        color: '#33BBFF',

        
        extendedProps: {...log}
        }
      }
    
    })

}
}

function renderEventContent(eventInfo) {
  debugger
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <br></br>
      <i>{eventInfo.event.extendedProps.water}</i>
      <br></br>
      <i>{eventInfo.event.extendedProps.meals.length}</i>
      <i></i>
      {/* this makes it so i can render any */}
    </>
  )
}
function renderSidebarEvent(event) {
console.log(event)
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <br></br>
      <i>Note: {event.title}</i>
      <br></br>
      <i>Mood Rating: {event.extendedProps && event.extendedProps.mood}</i>
      <br></br>
      <i>Cups: {event.extendedProps && event.extendedProps.water} cups</i>
      <br></br>
      <i>Meals: {event.extendedProps && event.extendedProps.meals.length} </i>
  {/* <i>Sleep: {event.extendedProps && event.extendedProps.sleeps}</i> */}
      {/* if there are extendedprops render mood, if not render ntohing */}
    </li>
  )
}