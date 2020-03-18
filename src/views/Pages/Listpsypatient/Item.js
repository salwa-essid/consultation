import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class ItemPsy extends Component {
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
                <td >{item.numero}</td>

                <td >
                    <div className="row ">

                        <Link to="signin" >
                        <button type="button" class="btn btn-danger">make appointment</button>
                        </Link>
                      




                    </div>
                </td>
            </tr>

            //    </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePsyReducer: id => {
            dispatch({
                type: 'REMOVE_PSY',
                id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemPsy);
