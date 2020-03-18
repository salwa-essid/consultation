

import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      Firstname: "",
      Lastname: "",
      Address: "",
      Email: "",
      Phone: "",
      Password:"",
      Birth:"",


      firstnameERR: "",
      lastnameERR:'',
      addressERR:'',
      emailERR:'',
      phoneERR:'',
      passwordERR:'' ,
      birthERR:'',


    };
    dotenv.config()
  }
  validate = () => {

    let isError = false;

    const errors = {
      firstnameERR: "",
      lastnameERR:'',

      phoneERR:'',
      passwordERR:'' ,
      emailERR:'',
      birthERR:'',
      addressERR:'',


    };

    const regex1=/^[a-zA-Z0-9._-]+$/;
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const  regpassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const regphone =/^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{2}/
    const regbirth = /^\d{2}[./-]\d{2}[./-]\d{4}$/

    if ((this.state.Firstname==="")||(this.state.Firstname.length > 15)||(this.state.Firstname.length <3)
    ||!regex1.test(this.state.Firstname)) {

        isError = true;
        errors.firstnameERR = "Please Enter the FirstName";
    }


    if ((this.state.Lastname==="")||(this.state.Lastname.length > 15)||(this.state.Lastname.length <3)){

        isError = true;
        errors.lastnameERR = "Please add the LastName ";
    }
    if ((this.state.Phone==="")||!regphone.test(this.state.Phone)) {

      isError = true;
      errors.phoneERR = "Please add the phone ";
    }
    if ((this.state.Address==="")||(this.state.Address.length > 15)) {

      isError = true;
      errors.addressERR = "Please check your address ";
    }
    if ((this.state.Password==="")||!regpassword.test(this.state.Password)) {

      isError = true;
      errors.passwordERR = "Password should contain at least 8 characters,where at least one number, one lower case and one upper case characters";
  }
  if ((this.state.Email==="")||!regEmail.test(this.state.Email))  {

    isError = true;
    errors.emailERR = "Email must be a valid address, e.g myname@mydomaine.com";
}
if ((this.state.Birth==="")||!regbirth.test(this.state.Birth))  {

  isError = true;
  errors.birthERR = "Please check your birth";
}





    if (isError) {
        this.setState({
            ...this.state,
            ...errors
        })
    }

    console.log("errrr ", isError);


    this.setState({
        erreur:isError
    });

    return isError;
};

  handleChange = (e) => {
    if (e.target.name === "firstname") {
      this.setState({Firstname: e.target.value })
    }
    if (e.target.name === "lastname") {
      this.setState({ Lastname: e.target.value })
    }
    if (e.target.name === "birth") {
        this.setState({ Birth: e.target.value })
      }
    if (e.target.name === "address") {
      this.setState({ Address: e.target.value })
    }
    if (e.target.name === "email") {
      this.setState({ Email: e.target.value })
    }
    if (e.target.name === "phone") {
      this.setState({ Phone: e.target.value })
    }
    if (e.target.name === "password") {
      this.setState({ Password: e.target.value })
    }
  }

//   handleSubmit = () => {
//     let token = localStorage.getItem("token");
//     if (!token) {
//         token = "";
//     }
//     Axios.post("http://127.0.0.1:5001/admin", {
//      username: this.state.username,
//       lastname: this.state.lastname,
//       address: this.state.address,
//       email: this.state.email,
//       password: this.state.password,
//       phone: this.state.phone
//     },
//     {
//       headers: {
//           Authorization: 'Bearer ' + token
//       }
//   }).then(success => {
//       // if status 200 OK
//       if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
//         ToastsStore.error(success.data.error)
//       } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
//         ToastsStore.success(success.data.message)
//         this.props.history.push("/admin/list");
//       }
//     }).catch(err => {
//       ToastsStore.error("Server error")
//     })
//   }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  add=()=>
    {
        const {value}=this.state
        if(value==="")
        return {}
        this.props.addReducer(value)
        this.setState({
            value:''
        })
    }

    handleSubmit = () => {
      let erre=this.validate();
        if(!erre){

      let token = localStorage.getItem("token");
      if (!token) {
          token = "";
      }
      axios.post(process.env.REACT_APP_BACKEND_HOST+':'+process.env.REACT_APP_BACKEND_PORT+'/patient/register', {
       Firstname: this.state.Firstname,
        Lastname: this.state.Lastname,

        Address: this.state.Address,
        Email: this.state.Email,
        Password: this.state.Password,
        Phone: this.state.Phone,
        Birth: this.state.Birth,

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
          this.props.history.push("/psy/list");
        }
      }).catch(err => {
        ToastsStore.error("Server error")
      })
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
       { /* <ToastsContainer store={ToastsStore} />*/}
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardBody>
                <form>
                  <h1 className="h1 text-center text-success font-weight-bold">Add Patient Plug</h1>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                        <input type="text" name="firstname" id="" className="form-control" placeholder="" aria-describedby="helpId"
                        onChange={this.handleChange} value={this.state.Firstname}/>
                        {

                          this.state.erreur===false ?

                              <p >{this.state.firstnameERR}</p>:null

                      }
                      {

                          this.state.erreur===true ?

                              <p style ={{color:"red", fontSize:'13px'}}>{this.state.firstnameERR}</p>:null

                      }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                        <input type="text" className="form-control" name="lastname" id="" aria-describedby="emailHelpId" placeholder=""
                        onChange={this.handleChange}   value={this.state.Lastname}/>
                        {

                          this.state.erreur===false ?

                              <p >{this.state.lastnameERR}</p>:null

                      }
                      {

                          this.state.erreur===true ?

                              <p style ={{color:"red" ,fontSize:'13px'}}>{this.state.lastnameERR}</p>:null

                      }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                        <input type="text" className="form-control" name="address" id="" aria-describedby="emailHelpId" placeholder=""
                        onChange={this.handleChange} value={this.state.Address}/>
                        {

                          this.state.erreur===false ?

                              <p >{this.state.addressERR}</p>:null

                      }
                      {

                          this.state.erreur===true ?

                              <p style ={{color:"red" ,fontSize:'13px'}}>{this.state.addressERR}</p>:null

                      }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                        <input type="text" name="phone" id="" className="form-control" placeholder="" aria-describedby="helpId"
                        onChange={this.handleChange} value={this.state.Phone}/>
                        {

                          this.state.erreur===false ?

                              <p >{this.state.phoneERR}</p>:null

                      }
                      {

                          this.state.erreur===true ?

                              <p style ={{color:"red",fontSize:'13px'}}>{this.state.phoneERR}</p>:null

                      }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                        <input type="text" className="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder=""
                        onChange={this.handleChange} value={this.state.Email} />
                        {

                          this.state.erreur===false ?

                              <p >{this.state.emailERR}</p>:null

                      }
                      {

                          this.state.erreur===true ?

                              <p style ={{color:"red",fontSize:'13px'}}>{this.state.emailERR}</p>:null

                      }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"> <i className="fa fa-lock fa-lg pr-2"></i> Password</label>
                        <input type="password" name="password" id="" className="form-control" placeholder="" aria-describedby="helpId"
                        onChange={this.handleChange} value={this.state.Password}/>
                        {

                          this.state.erreur===false ?

                              <p >{this.state.passwordERR}</p>:null

                      }
                      {

                          this.state.erreur===true ?

                              <p style ={{color:"red",fontSize:'13px'}}>{this.state.passwordERR}</p>:null

                      }
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Birth</label>
                      <input type="text" name="birth" id="" className="form-control" placeholder="" aria-describedby="helpId"
                      onChange={this.handleChange} value={this.state.Birth}/>
                      {

                        this.state.erreur===false ?

                            <p >{this.state.birthERR}</p>:null

                    }
                    {

                        this.state.erreur===true ?

                            <p style ={{color:"red",fontSize:'13px'}}>{this.state.birthERR}</p>:null

                    }
                    </div>
                  </div>
               </div>


                    <hr />
                    <div className="row">
                      <div className="col-md-6 d-flex justify-content-start pl-3">
                        <button type="button" name="" id="" className="btn btn-dangerr font-weight-bold w-25 btn-lg"><i className="fa fa-refresh pr-2"></i> Reset</button>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end pr-3">
                        <button type="button" name="" id="" className="btn btn-success font-weight-bold w-25 btn-lg"  onClick={this.handleSubmit}>
                          <i className="fa fa-send pr-2"></i> Submit</button>
                      </div>
                    </div>

                    </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

// const mapDispatchToProps=(dispatch)=>{
//   return{
//       addReducer:newpatient=>{
//           dispatch({
//                type:'ADD_PATIENT',
//                newpatient
//           })
//       }

//   }
//   }
  // export default connect(null,mapDispatchToProps) (AddPatient);
  export default AddPatient


