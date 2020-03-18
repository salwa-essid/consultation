import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'

import ItemPsy from './Item'
import './List.css'


class ListPsy extends Component {

    constructor(props) {
        super(props);
        this.state = {
                keyword:''
          }}

    handlechange=(e)=>{
        this.setState({keyword:e.target.value})

                  }

 componentDidMount = () => {
        let token = localStorage.getItem("token");
        if (!token) {
            token = "";
        }
        axios.get(process.env.REACT_APP_BACKEND_HOST+':'+process.env.REACT_APP_BACKEND_PORT+'/psy/list',

            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then((res) => {
                this.props.updatePsyReducer(res.data.data.data);
            }).catch(e => {
                if (e.status === 401) {
                    this.props.history.push("login");
                  } else {
                      // show error
                  }
            });
    }
    render() {
        const { psys } = this.props



        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">List Psys</h1>
                                        <hr></hr>
                                        <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={this.handlechange}/>
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                            </div>
                                        <div className="table-responsive py-3">
                                            <table className="table">
                                                <thead>
                                                    <tr className="bg-blue">
                                                        <th>FullName</th>
                                                        <th>E-mail</th>
                                                        <th>Phone</th>
                                                        <th>N.Psy</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {psys.filter(el => el.Firstname.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemPsy key={index} item={el} />)}

                                                </tbody>
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
const mapStateToProps = (state) => {
    return {
        psys: state.psyReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updatePsyReducer: psys => {
            dispatch({
                type: 'UPDATE_PSY',
                psys
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListPsy);
