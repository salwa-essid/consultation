import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class ItemPatient extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };

    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }


    // deleteadmin = () => {
    //     let token = localStorage.getItem("token");
    //     if (!token) {
    //         token = "";
    //     }
    //     const { item } = this.props
    //     axios.delete(`http://127.0.0.1:5001/admin/${item.id}`,
    //     {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }})
    //         .then(() => this.props.deleteAdminReducer(item.id))
    //         .catch((err) => alert(err))
    // }


    render() {
        const { item } = this.props
        return (
            <tr>
                <td >{item.Firstname} {item.Lastname}</td>
                <td >{item.Email}</td>


                <td >{item.Phone}</td>
               <td >
                    <div className="row ">
                    <Link to={`/patient/info/${item.Id}`}>
                        <div name="col-xs-6 col-md-6 d-flex justify-content-start">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getPatient}></i>
                        </div>
                        </Link>
                        <div className="col-xs-6 col-md-6 d-flex justify-content-end">
                            <i className="fa fa-lock t-blue fa-lg" ></i>
                        </div>


                    </div>
                </td>
            </tr>

            //    </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePatientReducer: id => {
            dispatch({
                type: 'REMOVE_PATIENT',
                id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemPatient);
