import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';

class ItemRdv extends Component {
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

    deletepatient = () => {
      const { item } = this.props
      axios.delete(`http://127.0.0.1:9000/patient/delete/${item.Id}`)
          .then(() => this.props.deletePatientReducer(item.Id))
          .catch((err) => alert(err))
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
                <td >{item.date}</td>
                <td >{item.numero}</td>
                <td >
                    <div className="row ">

                    <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                    <button type="button" name="" id="" className="btn btn-success font-weight-bold "  onClick={this.handleSubmit}>
                    <i className="fa fa-send pr-2"></i> Accept</button>
                     </div>
                    <div className="col-xs-4 col-md-3 d-flex  justify-content-start">

                    <button type="button" name="" id="" className="btn btn-dangerr font-weight-bold  ">
                    <i className="fa fa-refresh pr-2"></i> Refuse</button>
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
        deleteRdvReducer: Id => {
            dispatch({
                type: 'REMOVE_RDV',
                Id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemRdv);
