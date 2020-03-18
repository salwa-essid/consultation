




import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import { Link } from 'react-router-dom'
import './payment.css'


class Payment extends Component {

    componentDidMount = () => {

        let token = localStorage.getItem("token");
        if (!token) {
            token = "";
        }
        // window.location.reload(false)
    }
    render() {


        return (
          <div class="container-fluid ">

          <div class="creditCardForm">
              <div class="heading">
                  <h5>Confirm Purchase</h5>
              </div>
              <div class="payment">
                  <form>
                      <div class="form-group owner">
                          <label for="owner">Owner</label>
                          <input type="text" class="form-control" id="owner"/>
                      </div>
                      <div class="form-group CVV">
                          <label for="cvv">CVV</label>
                          <input type="text" class="form-control" id="cvv"/>
                      </div>
                      <div class="form-group" id="card-number-field">
                          <label for="cardNumber">Card Number</label>
                          <input type="text" class="form-control" id="cardNumber"/>
                      </div>
                      <div class="form-group" id="expiration-date">
                          <label>Expiration Date</label>
                          <select>
                              <option value="01">January</option>
                              <option value="02">February </option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                          </select>
                          <select>
                              <option value="16"> 2016</option>
                              <option value="17"> 2017</option>
                              <option value="18"> 2018</option>
                              <option value="19"> 2019</option>
                              <option value="20"> 2020</option>
                              <option value="21"> 2021</option>
                          </select>
                      </div>

                      <div class="form-group" id="credit_cards">
                          <img src="https://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/visa.jpg" id="visa"/>
                          <img src="https://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/mastercard.jpg" id="mastercard"/>
                          <img src="https://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/amex.jpg" id="amex"/>
                      </div>
                      <div class="form-group" id="pay-now">
                          <button type="submit" class="btn btn-default" id="confirm-purchase">Confirm</button>
                      </div>
                  </form>
              </div>
              <p class="examples-note">Here are some dummy credit card numbers and CVV codes so you can test out the form:</p>

          </div>


          <div class="examples">
              <div class="table-responsive">
                  <table class="table table-hover">
                      <thead>
                          <tr>
                              <th>Type</th>
                              <th>Card Number</th>
                              <th>Security Code</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Visa</td>
                              <td>4716108999716531</td>
                              <td>257</td>
                          </tr>
                          <tr>
                              <td>Master Card</td>
                              <td>5281037048916168</td>
                              <td>043</td>
                          </tr>
                          <tr>
                              <td>American Express</td>
                              <td>342498818630298</td>
                              <td>3156</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>


     );
    }
}




export default Payment;
