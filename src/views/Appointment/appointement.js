
import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import './app.css'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios'

class Appointement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      Firstname: "",
      Lastname: "",
      Id:"",
      Email: "",
      date: Date,
      PsyId: "",
      PassId: "",
    message:"",
      Type: "",
      State: Boolean
    }
    dotenv.config()}

    handleChange = (e) => {
      if (e.target.name === "firstname") {
        this.setState({Firstname: e.target.value })
      }
      if (e.target.name === "lastname") {
        this.setState({ Lastname: e.target.value })
      }

      if (e.target.name === "email") {
        this.setState({ Email: e.target.value })
      }
      if (e.target.name === "type") {
        this.setState({ Type: e.target.value })
      }
      if (e.target.name === "date") {
        this.setState({ date: e.target.value })
      }
      if (e.target.name === "message") {
        this.setState({ message: e.target.value })
      }

    }

    handleSubmit = () => {

      let token = localStorage.getItem("token");
      if (!token) {
          token = "";
      }
      axios.post(process.env.REACT_APP_BACKEND_HOST+':'+process.env.REACT_APP_BACKEND_PORT+'/patient/rdv/add', {
       Firstname: this.state.Firstname,
        Lastname: this.state.Lastname,
        Email: this.state.Email,
        date:this.state.date,
        Type:this.state.Type,
        message:this.state.message

      },
      {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(success => {
        // if status 200 OK
        if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
          ToastsStore.error(success.data.error)
        } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
          ToastsStore.success(success.data.message)
          this.props.history.push("/psy/listRDV");
        }
      }).catch(err => {
        ToastsStore.error("Server error")
      })
    }


  render() {
    return (
      <div class="container-contact100">
      <div class="wrap-contact100">
        <form class="contact100-form validate-form">
          <span class="contact100-form-title">
          Appointement
          </span>

          <div class="wrap-input100 validate-input" data-validate="Name is required">
            <span class="label-input100">Your Name</span>
            <input class="input100" type="text" name="firstname" placeholder="Enter your name"
            onChange={this.handleChange} value={this.state.Firstname}/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <span class="label-input100">Email</span>
            <input class="input100" type="text" name="email" placeholder="Enter your email addess"
             onChange={this.handleChange} value={this.state.Email}/>
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input" data-validate = "Valid data">
            <span class="label-input100">Date du rendez-vous</span>



            <input id="date" type="date" value="2017-06-01" onChange={this.handleChange} name="date"

            value={this.state.date}></input>
            <span class="focus-input100"></span>
          </div>

        	<div class="wrap-input100 input100-select">
					<span class="label-input100">Needed Services</span>
					<div>
						<select class="selection-2" name="type" onChange={this.handleChange} >
							<option>Choose Type of Consulting</option>

							<option>Consulting with video </option>
							<option>Consulting With Modal Chat</option>
						</select>
					</div>
					<span class="focus-input100"></span>
				</div>
          <div class="wrap-input100 validate-input" data-validate = "Message is required">
            <span class="label-input100">Raison du rendez-vous</span>
            <textarea class="input100" name="message" placeholder="Your message here..." onChange={this.handleChange}></textarea>
            <span class="focus-input100"></span>
          </div>

          <div class="container-contact100-form-btn">
            <div class="wrap-contact100-form-btn">
              <div class="contact100-form-bgbtn"></div>
              <button class="contact100-form-btn" onClick={this.handleSubmit}>
                <span>
                  Submit
                  <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>

);
  }
}

export default Appointement;


