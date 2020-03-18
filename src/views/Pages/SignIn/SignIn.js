import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from './img/logo.png';

import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';





class SignIn extends Component {

  constructor(props) {
		super(props);

		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			email: '',
			password: '',
    };

    dotenv.config()

	}

  validate = () => {

    let isError = false;

    const errors = {

      passwordERR:'' ,
      emailERR:'',



    };


    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // const  regpassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


    if ((this.state.email==="")||!regEmail.test(this.state.email))  {

      isError = true;
      errors.emailERR = "Email must be a valid address, e.g myname@mydomaine.com";
  }

  //   if ((this.state.password==="")||!regpassword.test(this.state.password)) {

  //     isError = true;
  //     errors.passwordERR = "Password should contain at least 8 characters,where at least one number, one lower case and one upper case characters";
  // }

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

		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}
	};

	login = () => {
    let erre=this.validate();
    if(!erre){
		// if (this.state.email === '' || this.state.password === '') {
		// 	ToastsStore.error('Enter password and email');
    // }
    //  else {
			axios
				.post(process.env.REACT_APP_BACKEND_HOST+':'+process.env.REACT_APP_BACKEND_PORT+'/patient/login', {
					Email: this.state.email,
					Password: this.state.password,
				})
				.then(success => {
          console.log(success)
					if (success.data.error === '') {
						localStorage.setItem('token', success.data.data.data);
						var payload = JwtDecode(success.data.data.data);
						if (payload.role) {
							if (payload.role === 'PATIENT') {
								this.props.history.push('/patient/planning');
							}
						} else {
							localStorage.removeItem('token');
						}
					} else {
					  ToastsStore.error(success.data.error);
					}
				})
				.catch(error => {
          console.log(error)
					ToastsStore.error(error.data.error);
				});

  }
	};
  render() {
    return (
     <div>
     <ToastsContainer store={ToastsStore} />
     <div class="menu trans_500">
		<div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
			<div class="menu_close_container"><div class="menu_close"></div></div>
			<form action="#" class="menu_search_form">
				<input type="text" class="menu_search_input" placeholder="Search" required="required"/>
				<button class="menu_search_button"><i class="fa fa-search" aria-hidden="true"></i></button>
			</form>
			<ul>
				<li class="menu_item"><a href="index.html">Home</a></li>
				<li class="menu_item"><a href="#">About us</a></li>
				<li class="menu_item"><a href="#">Services</a></li>
				<li class="menu_item"><a href="news.html">News</a></li>
				<li class="menu_item"><a href="contact.html">Contact</a></li>
			</ul>
		</div>
		<div class="menu_social">
			<ul>
				<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
			</ul>
		</div>
	</div>


      <div class="home">
      <div class="background_image bckpatt" ></div>



      <header class="header " id="header">
        <div>
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                    <div class="logo">
                    <img  src={image} alt=""/>
                    </div>
                    <div class="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                      <div class="header_top_nav">
                        <ul class="d-flex flex-row align-items-center justify-content-start">
                          <li><a href="#">Help Desk</a></li>
                          <li><a href="#">Emergency Services</a></li>
                          <li><a href="#">Appointment</a></li>
                        </ul>
                      </div>
                      <div class="header_top_phone">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>+34 586 778 8892</span>
                      </div>
                    </div>
                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_nav" id="header_nav_pin">
            <div class="header_nav_inner">
              <div class="header_nav_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                        <nav class="main_nav">
                          <ul class="d-flex flex-row align-items-center justify-content-start">
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="news.html">News</a></li>
                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </nav>
                        <div class="search_content d-flex flex-row align-items-center justify-content-end ml-auto">
                          <form action="#" id="search_container_form" class="search_container_form">
                            <input type="text" class="search_container_input" placeholder="Search" required="required"/>
                            <button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      <div id="header top-icon ">
      <div className="container bggggg p-5" >
        <div className="row height-90 align-items-center
        justify-content-center">
          <Form className="f">
              <h1 className="text" >Login</h1>
              <p className="text">Sign In to your account</p>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="email" onChange={this.handleChange} placeholder="E-mail" autoComplete="off"
                value={this.state.email}  />

              </InputGroup>


              {

                this.state.erreur===false ?

                    <p >{this.state.emailERR}</p>:null

            }
            {

                this.state.erreur===true ?

                    <p style ={{color:"red", fontSize:'13px'}}>{this.state.emailERR}</p>:null

            }


              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="password" name="password" onChange={this.handleChange} placeholder="Password"
                autoComplete="current-password"

                value={this.state.password}/>



              </InputGroup>



              <Row>
                <Col xs="6">
                  <Button color="success" className="s px-5 " onClick={this.login}  >
                  <span>Login</span></Button>
                </Col>
                <Col xs="6" className="text-right">

                  <Button color="success" className=" s px-1"><span>Forgot password</span></Button>

                </Col>

                </Row>
                <Link to="register" className="fr">
                  <span className="d-flex align-item-center justify-content-center p-2 notreg "> Not registered ?</span>

                  </Link>


            </Form>
          </div>
      </div>
      </div>















<footer class="footer">
<div class="parallax_background parallax-window k" data-parallax="scroll"
 data-speed="0.8"></div>
<div class="footer_content">
  <div class="container">
    <div class="row">


      <div class="col-lg-3 footer_col">
        <div class="footer_about">
          <div class="logo">
            <a href="#">Medium<span></span></a>
          </div>
          <div class="footer_about_text">Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</div>
          <div class="footer_social">
            <ul class="d-flex flex-row align-items-center justify-content-start">
              <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="copyright">

Copyright &copy;<script>document.write(new Date().getFullYear());
</script> All rights reserved | This template is made with
<i class="fa fa-heart-o" aria-hidden="true"></i> by
<a href="https://colorlib.com" target="_blank">Refka Messoudi</a>

</div>
        </div>
      </div>


      <div class="col-lg-5 footer_col">
        <div class="footer_contact">
          <div class="footer_contact_title">Quick Contact</div>
          <div class="footer_contact_form_container">
            <form action="#" class="footer_contact_form" id="footer_contact_form">
              <div class="d-flex flex-xl-row flex-column align-items-center justify-content-between">
                <input type="text" class="footer_contact_input" placeholder="Name" required="required"/>
                <input type="email" class="footer_contact_input" placeholder="E-mail" required="required"/>
              </div>
              <textarea class="footer_contact_input footer_contact_textarea" placeholder="Message" required="required"></textarea>
              <button class="footer_contact_button">send message</button>
            </form>
          </div>
        </div>
      </div>


      <div class="col-lg-4 footer_col">
        <div class="footer_hours">
          <div class="footer_hours_title">Opening Hours</div>
          <ul class="hours_list">
            <li class="d-flex flex-row align-items-center justify-content-start">
              <div>Monday – Thursday</div>
              <div class="ml-auto">8.00 – 19.00</div>
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
              <div>Friday</div>
              <div class="ml-auto">8.00 - 18.30</div>
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
              <div>Saturday</div>
              <div class="ml-auto">9.30 – 17.00</div>
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
              <div>Sunday</div>
              <div class="ml-auto">9.30 – 15.00</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="footer_bar">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="footer_bar_content d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-start">
          <nav class="footer_nav">
            <ul class="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <div class="footer_links">
            <ul class="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
              <li><a href="#">Help Desk</a></li>
              <li><a href="#">Emergency Services</a></li>
              <li><a href="#">Appointment</a></li>
            </ul>
          </div>
          <div class="footer_phone ml-lg-auto">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>+34 586 778 8892</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>

</div>
  </div>
    );
  }
}

export default SignIn;


