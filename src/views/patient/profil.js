import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import { Link } from 'react-router-dom'
// import './List.css'
import axios from 'axios';
import image from '../patient/users/1.jpg';
import { connect } from 'react-redux';
class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
        collapse: true,
        fadeIn: true,
        timeout: 300,
        Id: this.props.match.params.Id,
        Firstname: "",
        Lastname: "",
        Address: "",
        Email: "",
        Phone: "",
        Birth:"",
        Diploma:"",
        CreatedAt: "",
        UpdatedAt: ""
    };
}
getPatient = () => {

    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    axios.get(`http://127.0.0.1:9000/patient/auth/profile`,
{
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem("token")
          }
      })

      .then((u) => {
        this.props.updatePatient(u.data.data.data)
          this.setState({
              Firstname: u.data.data.data.Firstname,
              Lastname: u.data.data.data.Lastname,
              Address: u.data.data.data.Address,
              Email: u.data.data.data.Email,
              Phone: u.data.data.data.Phone,
              Birth: u.data.data.data.Birth,

              CreatedAt: u.data.data.data.CreatedAt,
              UpdatedAt: u.data.data.data.UpdatedAt
          });
      })
      .catch((err) => alert(err))
}
    componentDidMount = () => {


        this.getPatient();
        // window.location.reload(false)
    }
    render() {

const {patientsList}=this.props
        return (

            <div>



            <div id="main-wrapper" data-navbarbg="skin6" data-theme="light" data-layout="vertical"
            data-sidebartype="full" data-boxed-layout="full">

                <div class="page-wrapper">

                    <div class="page-breadcrumb">
                        <div class="row">
                            <div class="col-5 align-self-center">
                                <h4 class="page-title">Profile</h4>
                            </div>
                            <div class="col-7 align-self-center">
                                <div class="d-flex align-items-center justify-content-end">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <a class=" text-info"href="#">Home</a>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">Profile</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                           <div class="row">

                            <div class="col-lg-4 col-xlg-3 col-md-5">
                                <div class="card">
                                    <div class="card-body">
                                        <center class="m-t-30">
                                        <img src={image}
                                        class="rounded-circle" width="150" />
                                            <h4 class="card-title m-t-10">{patientsList.Firstname}</h4>

                                        </center>
                                    </div>
                                    <div>
                                        <hr/>
                                       </div>

                                </div>
                            </div>

                            <div class="col-lg-8 col-xlg-9 col-md-7">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="form-horizontal form-material">
                                            <div class="form-group">
                                                <label class="col-md-12">{this.state.Firstname}</label>
                                                <div class="col-md-12">
                                                    <input type="text" placeholder="Johnathan Doe"
                                                    class="form-control form-control-line" value={this.state.FirstName}/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="example-email" class="col-md-12">Email</label>
                                                <div class="col-md-12">
                                                    <input type="email" placeholder="johnathan@admin.com"
                                                     class="form-control form-control-line"
                                                     name="example-email" id="example-email"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-12">Password</label>
                                                <div class="col-md-12">
                                                    <input type="password" value="password" class="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-12">Phone No</label>
                                                <div class="col-md-12">
                                                    <input type="text" placeholder="23 456 780" class="form-control form-control-line"/>
                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <button class="btn btn-success">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

              </div>

            </div>
        </div>
  );
    }
}

const mapStateToProps = state => {
  return{
      patientsList: state.patientReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updatePatient: patients => {
          dispatch({
              type: 'UPDATE_PATIENT',
              patients
          })
      },
      editProfil: patientInfos => {
        dispatch({
            type: 'EDIT_PATIENT',
            patientInfos
        })
    },

  }
}


export default connect  (mapStateToProps, mapDispatchToProps)(Profil);
