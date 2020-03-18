import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import image from './images/logo.png';
import image1 from "./images/info_1.jpg"
import image2 from "./images/info_2.jpg"
import image3 from "./images/info_2.jpg"
import image4 from "./images/icon_2.svg"
import image5 from "./images/icon_3.svg"
import image6 from "./images/icon_4.svg"
import image7 from "./images/icon_5.svg"
import image8 from "./images/icon_6.svg" 
import image9 from "./images/dept_1.jpg"
import image10 from "./images/dept_2.jpg"
import image11 from "./images/dept_3.jpg"
import image12 from "./images/dept_4.jpg"
import image13 from "./images/latest_1.jpg"
import image14 from "./images/latest_2.jpg"
import image15 from "./images/latest_3.jpg"
















class Authpsy extends Component {
  render() {
    return (
     <div>
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
      <div class="background_image bck" ></div>
  
 
      
      <header class="header" id="header">
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
    );
  }
}

export default Authpsy;
