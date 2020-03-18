




import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import { Link } from 'react-router-dom'
// import './List.css'
import './planning.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../../App.scss'
class Planning extends Component {
  constructor(){
    super();
    this.state={
      date:""
    }
  }
  handleChange(evt){
    console.log(evt.target.value)
    this.setState({date:evt.target.value})

  }

  render() {
    if(this.state.date ===""){
      return (
        <div>
        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
        events={[
          { title: 'Add appointment', date: '2019-11-06' ,start: new Date()},
          { title: 'Add appointment', date: '2019-11-06' ,start: new Date()},
          { title: 'Add appointment', date: '2019-11-06' ,start: new Date()},
          { title: 'Add appointment', date: '2019-11-06' ,start: new Date()},
          { title: 'Add appointment', date: '2019-11-10' },
          { title: 'Add appointment', date: '2019-11-10' },
          { title: 'Add appointment', date: '2019-11-10' },
          { title: 'Add appointment', date: '2019-11-15' },
          { title: 'Add appointment', date: '2019-11-15' },
           { title: 'Add appointment', date: '2019-11-15' },
           { title: 'Add appointment', date: '2019-11-19' },
           { title: 'Add appointment', date: '2019-11-19' },
            { title: 'Add appointment', date: '2019-11-19' },


        ]}
        value={this.state.date}
        onClick={evt=>this.handleChange(evt)}/>

        </div>
    );
    }


  }
}
export default Planning

