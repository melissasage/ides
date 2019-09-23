import React from 'react';

const Schedule = (props) => {

// so right now this takes a bunch of events and then returns them
// it should later add in , y'know, dates and such around it- the calendrical structure.

    return (
    <div>
    <div>Schedule</div>
    <ul>
    {props.events.map((event,i) => {
      return <li key={i}>{event.time + " - " + event.title}</li>
    })}
    </ul>
    </div>
    )
}

export default Schedule 