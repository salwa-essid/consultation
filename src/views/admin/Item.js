import React, { Component } from 'react';
import axios from 'axios'
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


    deletepsy = () => {
      const { item } = this.props
      axios.delete(`http://127.0.0.1:9000/psy/delete/${item.Id}`)
          .then(() => this.props.deletePsyReducer(item.Id))
          .catch((err) => alert(err))
  }


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
                    <Link to={`/admin/info/${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getPsy}></i>
                        </div>
                        </Link>
                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-lock t-blue fa-lg" ></i>
                        </div>
                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-trash t-red fa-lg" onClick={this.deletepsy} ></i>
                        </div>
                        <Link to={`/admin/update/${item.Id}`}>
                        <div className="col-xs-4 col-md-3 d-flex  justify-content-start">
                            <i className="fa fa-edit t-green fa-lg"></i>
                        </div>
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
        deletePsyReducer: Id => {
            dispatch({
                type: 'REMOVE_PSY',
                Id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemPsy);
