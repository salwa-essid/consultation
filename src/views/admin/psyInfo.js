import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'



class PsyInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            Id: this.props.match.params.Id,
            firstname: "",
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

    getPsy = () => {

        axios.get(`http://127.0.0.1:9000/psy/${this.props.match.params.id}`,
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
        this.getPsy();
    }

    render() {
        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">Psy Info</h1>
                                        <hr></hr>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="font-weight-bold">Firstname</td>
                                                        <td>{this.state.Firstname}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Lastname</td>
                                                        <td>{this.state.Lastname}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Address</td>
                                                        <td>{this.state.Address}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Email</td>
                                                        <td>{this.state.Email}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="font-weight-bold">Phone</td>
                                                    <td>{this.state.Phone}</td>
                                                </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Birth</td>
                                                        <td>{this.state.Birth}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="font-weight-bold">Diploma</td>
                                                    <td>{this.state.Diploma}</td>
                                                </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Created at</td>
                                                        <td>
                                                            <Moment format="DD-MM-YYYY">{this.state.createdAt}</Moment>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Updated at</td>
                                                        <td>
                                                            <Moment format="DD-MM-YYYY">{this.state.updatedAt}</Moment>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <Link   to='/admin/list'>
                                                    <div className=" d-flex justify-content-start pl-5 ">
                                                        <button type="button" name="" id="" className="btn btn-danger listinfo font-weight-bold w-25 btn-lg ">
                                                            <i className="fa fa-refresh pr-3 "></i> <span >List</span></button>
                                                    </div>
                                                </Link>
                                            </table>

                                        </div>
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
export default PsyInfo;
