
import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';
import './loginadmin.css'




class Login extends Component {
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



  handleChange = (e) => {

		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}
	};


  validate = () => {

    let isError = false;

    const errors = {

      passwordERR:'' ,
      emailERR:'',



    };


    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const  regpassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


    if ((this.state.email==="")||!regEmail.test(this.state.email))  {

      isError = true;
      errors.emailERR = "Email must be a valid address, e.g myname@mydomaine.com";
  }

    if ((this.state.password==="")||!regpassword.test(this.state.password)) {

      isError = true;
      errors.passwordERR = "Password should contain at least 8 characters,where at least one number, one lower case and one upper case characters";
  }

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
	login = () => {
		let erre=this.validate();
    if(!erre){
			axios
				.post(process.env.REACT_APP_BACKEND_HOST+':'+process.env.REACT_APP_BACKEND_PORT+'/admin/login', {
					Email: this.state.email,
					Password: this.state.password,
				})
				.then(success => {
          console.log(success)
					if (success.data.error === '') {
						localStorage.setItem('token', success.data.data.data);
						var payload = JwtDecode(success.data.data.data);
						if (payload.role) {
							if (payload.role === 'ADMIN') {
								this.props.history.push('/admin/list');
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
      <div className="y">
      <div className="app flex-row align-items-center ">
      <Container>
        <ToastsContainer store={ToastsStore} />
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
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
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-off"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </InputGroup>
                    {

                      this.state.erreur===false ?

                          <p >{this.state.passwordERR}</p>:null

                  }
                  {

                      this.state.erreur===true ?

                          <p style ={{color:"red", fontSize:'13px'}}>{this.state.passwordERR}</p>:null

                  }
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.login}>
                          Login
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
    </div>

   );
  }
}

export default Login;
