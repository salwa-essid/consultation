import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore } from 'react-toasts';



class UpdatePatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      Id: this.props.match.params.id,
      Firstname: "",
      Lastname: "",
      Address: "",
      Email: "",
      Phone: "",
      Birth:""
    };
  }

  handleChange = (e) => {
    if (e.target.name === "firstname") {
      this.setState({ Firstname: e.target.value })
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
  }

  handleSubmit = () => {
    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    axios.put("http://127.0.0.1:9000/patient/modify", {
      Id: this.state.Id,
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Address: this.state.Address,
      Phone: this.state.Phone,
      Email: this.state.Email,

    }, {
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
        if (err.status === 401) {
          this.props.history.push("login");
        }
        ToastsStore.error("Server error")
      })
  }

  getPatient = () => {

    axios.get(`http://127.0.0.1:9000/patient/${this.props.match.params.id}`,
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        })

        .then((u) => {
            this.setState({
                Firstname: u.data.data.data.Firstname,
                Lastname: u.data.data.data.Lastname,
                Address: u.data.data.data.Address,
                Email: u.data.data.data.Email,
                Phone: u.data.data.data.Phone,
                Birth: u.data.data.data.Birth,
                Diploma: u.data.data.data.Diploma,
                CreatedAt: u.data.data.data.CreatedAt,
                UpdatedAt: u.data.data.data.UpdatedAt
            });
        })
        .catch((err) => alert(err))
}

componentDidMount = () => {
    this.getPatient();
}

  render() {
    return (
      <section>
        {/*<ToastsContainer store={ToastsStore} />*/}
        <div className='contact-list-container'>
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" sm="12" md="12">
                <Card>
                  <CardBody>
                    <form>
                      <h1 className="h1 text-center text-success font-weight-bold">Update Patient</h1>
                      <hr></hr>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="firstname" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                            <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.Firstname} placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                            <small id="helpId" className="text-muted">Help text</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                            <input type="text" className="form-control" name="lastname" id="" value={this.state.Lastname} aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                            <small id="emailHelpId" className="form-text text-muted">Help text</small>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                            <input type="text" className="form-control" name="address" id="" value={this.state.Address} aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                            <small id="emailHelpId" className="form-text text-muted">Help text</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                            <input type="text" name="phone" id="" className="form-control" placeholder="" value={this.state.Phone} aria-describedby="helpId" onChange={this.handleChange} />
                            <small id="helpId" className="text-muted">Help text</small>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                            <input type="text" className="form-control" name="email" id="" aria-describedby="emailHelpId" value={this.state.Email} placeholder="" onChange={this.handleChange} />
                            <small id="emailHelpId" className="form-text text-muted">Help text</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                      </div>
                      <div>
                      <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Birth</label>
                          <input type="text" name="birth" id="" className="form-control" placeholder="" aria-describedby="helpId"
                          value={this.state.Birth} onChange={this.handleChange} />
                          <small id="helpId" className="text-muted">Help text</small>
                        </div>
                      </div>
                   </div>

                        <hr />
                        <div className="row">
                          <div className="col-md-6 d-flex justify-content-start pl-3">
                            <button type="button" name="" id="" className="btn btn-danger font-weight-bold w-25 btn-lg"><i className="fa fa-refresh pr-2"></i> Reset</button>
                          </div>
                          <div className="col-md-6 d-flex justify-content-end pr-3">
                            <button type="button" name="" id="" className="btn btn-success font-weight-bold w-25 btn-lg" onClick={this.handleSubmit}>
                              <i className="fa fa-send pr-2 "></i> Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardBody>
                </Card>

              </Col>
            </Row>
          </div>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patientReducer
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    PatientInfoReducer: patient => {
      dispatch({
        type: 'PATIENT_INFO',
        patient
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePatient);
