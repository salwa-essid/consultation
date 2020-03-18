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
















class Login extends Component {
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
        <Link to="contact" classe="wht">	<li class="menu_item">Contact </li></Link>
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
                            <Link to="contact" class="wht"><li>Contact</li></Link>
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
  
      <div class="home_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
                <div class="home_title ">Medical teleconsultations <br/>in video</div>
                <div class="home_text">An easy-to-use solution for medical teleconsultations
                 between doctors and patients.</div>
               {/** <div className=" d-flex flex-row align-items-center" >
                
                 <div class="button home_button">
                <Link to="register">
                 <span>Register</span>
                 <span>Register</span>
                 </Link>
                 </div>
               
                 <div class="button home_button1">
                 <Link to="signin">
                 <span>Login</span>
                 <span>Login</span>
                 </Link>
                 </div>
                 </div> */}
              <div className="p-3 d-flex bout"> 
              <Link to="authpatient">
               <button type="button" class="btn btn-danger patient">
               
               <span>I'm Patient</span>
               </button></Link>
               <Link to="authpsy">
               <button type="button" class="btn btn-danger psy">I'm Psy
               </button></Link>
              </div>
               
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  	<div class="info">
		<div class="container">
			<div class="row row-eq-height">

			
				<div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image1}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Free Consultations</div>
							<div class="info_text">Arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.</div>
							<div class="button info_button"><a href="#"><span>read more</span><span>read more</span></a></div>
						</div>
					</div>
				</div>

			
				<div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image2}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Emergency Care</div>
							<div class="info_text">Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus.</div>
							<div class="button info_button"><a href="#"><span>read more</span><span>read more</span></a></div>
						</div>
					</div>
				</div>

			
				<div class="col-lg-4 info_box_col">
					<div class="info_form_container">
						<div class="info_form_title">Make an Appointment</div>
						<form action="#" class="info_form" id="info_form">
							<select name="info_form_dep" id="info_form_dep" class="info_form_dep info_input info_select">
								<option>Department</option>
								<option>Department</option>
								<option>Department</option>
							</select>
							<select name="info_form_doc" id="info_form_doc" class="info_form_doc info_input info_select">
								<option>Doctor</option>
								<option>Doctor</option>
								<option>Doctor</option>
							</select>
							<input type="text" class="info_input" placeholder="Name" required="required"/>
							<input type="text" class="info_input" placeholder="Phone No"/>
							<button class="info_form_button">make an appointment</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
   
 




	<div class="cta">
		<div class="parallax_background parallax-window fr" data-parallax="scroll"  data-speed="0.8"></div>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="cta_container d-flex flex-xl-row flex-column align-items-xl-start align-items-center justify-content-xl-start justify-content-center">
						<div class="cta_content text-xl-left text-center">
							<div class="cta_title">Make an appointment with one of our professional Doctors.</div>
							<div class="cta_subtitle">Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas.</div>
						</div>
						<div class="button cta_button ml-xl-auto"><a href="#"><span>call now</span><span>call now</span></a></div>
					</div>
				</div>
			</div>
		</div>
	</div>


  <div class="services">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div class="section_title">Our Services</div>
					<div class="section_subtitle">to choose from</div>
				</div>
			</div>
			<div class="row icon_boxes_row">
				
		
				<div class="col-xl-4 col-lg-6">
					<div class="icon_box">
						<div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
							<div class="icon_box_icon"><img src={image3} alt=""/></div>
							<div class="icon_box_title">Cardiology</div>
						</div>
						<div class="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
					</div>
				</div>

				<div class="col-xl-4 col-lg-6">
					<div class="icon_box">
						<div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
							<div class="icon_box_icon"><img src={image4} alt=""/></div>
							<div class="icon_box_title">Gastroenterology</div>
						</div>
						<div class="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
					</div>
				</div>

			
				<div class="col-xl-4 col-lg-6">
					<div class="icon_box">
						<div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
							<div class="icon_box_icon"><img src={image5} alt=""/></div>
							<div class="icon_box_title">Medical Lab</div>
						</div>
						<div class="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
					</div>
				</div>

				<div class="col-xl-4 col-lg-6">
					<div class="icon_box">
						<div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
							<div class="icon_box_icon"><img src={image6} alt=""/></div>
							<div class="icon_box_title">Dental Care</div>
						</div>
						<div class="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
					</div>
				</div>

		
				<div class="col-xl-4 col-lg-6">
					<div class="icon_box">
						<div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
							<div class="icon_box_icon"><img src={image7} alt=""/></div>
							<div class="icon_box_title">Surgery</div>
						</div>
						<div class="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
					</div>
				</div>

				<div class="col-xl-4 col-lg-6">
					<div class="icon_box">
						<div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
							<div class="icon_box_icon"><img src={image8} alt=""/></div>
							<div class="icon_box_title">Neurology</div>
						</div>
						<div class="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
					</div>
				</div>

			</div>
			<div class="row">
				<div class="col">
          <div class="button services_button ml-auto mr-auto"><a href="#">
          <span>read more</span><span>read more</span></a></div>
				</div>
			</div>
		</div>
  </div>
  

	<div class="departments">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div class="section_title">Our Departments</div>
					<div class="section_subtitle">to choose from</div>
				</div>
			</div>
			<div class="row dept_row">
				<div class="col">
					<div class="dept_slider_container_outer">
						<div class="dept_slider_container">

							<div class="owl-carousel owl-theme dept_slider">
				
								<div class="owl-item dept_item">
									<div class="dept_image"><img src={image9} alt=""/></div>
									<div class="dept_content">
										<div class="dept_title">Neonatology</div>
										<div class="dept_link"><a href="#">Read More</a></div>
									</div>
								</div>

							
								<div class="owl-item dept_item">
									<div class="dept_image"><img src={image10} alt=""/></div>
									<div class="dept_content">
										<div class="dept_title">Dentistry</div>
										<div class="dept_link"><a href="#">Read More</a></div>
									</div>
								</div>

							
								<div class="owl-item dept_item">
									<div class="dept_image"><img src={image11} alt=""/></div>
									<div class="dept_content">
										<div class="dept_title">Orthopedics</div>
										<div class="dept_link"><a href="#">Read More</a></div>
									</div>
								</div>

						
								<div class="owl-item dept_item">
									<div class="dept_image"><img src={image12} alt=""/></div>
									<div class="dept_content">
										<div class="dept_title">Laboratory</div>
										<div class="dept_link"><a href="#">Read More</a></div>
									</div>
								</div>

							</div>
							
						</div>

						<div class="dept_slider_nav"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>

					</div>
						
				</div>
			</div>
		</div>
	</div>

  <div class="stuff">
  <div class="container">
    <div class="row">


      <div class="col-lg-7">
        <div class="faq">
          <div class="faq_title">Faq & Stuff</div>
          <div class="faq_subtitle">read all about it</div>
          <div class="elements_accordions">
            <div class="accordions">

              <div class="accordion_container">
                <div class="accordion d-flex flex-row align-items-center active"><div>Maecenas fermentum tortor id fringilla molestie.</div></div>
                <div class="accordion_panel">
                  <div>
                    <p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.</p>
                  </div>
                </div>
              </div>

              <div class="accordion_container">
                <div class="accordion d-flex flex-row align-items-center"><div>Duis quis lacinia elit. Etiam varius mi eget lacus ultricies elementum</div></div>
                <div class="accordion_panel">
                  <div>
                    <p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.</p>
                  </div>
                </div>
              </div>

              <div class="accordion_container">
                <div class="accordion d-flex flex-row align-items-center"><div>Maecenas fermentum tortor id fringilla molestie.</div></div>
                <div class="accordion_panel">
                  <div>
                    <p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    
      <div class="col-lg-5">
        <div class="news">
          <div class="news_title">Latest News</div>
          <div class="news_subtitle">read all about it</div>
          <div class="news_container">

            
            <div class="latest d-flex flex-row align-items-start justify-content-start">
              <div><div class="latest_image"><img src={image13} alt=""/></div></div>
              <div class="latest_content">
                <div class="latest_title"><a href="news.html">A simple blog post</a></div>
                <div class="latest_info">
                  <ul class="d-flex flex-row align-items-start justify-content-start">
                    <li><a href="#">by Jane Smith</a></li>
                    <li><a href="#">April 25, 2018</a></li>
                  </ul>
                </div>
                <div class="latest_comments"><a href="#">2 Comments</a></div>
              </div>
            </div>

          
            <div class="latest d-flex flex-row align-items-start justify-content-start">
              <div><div class="latest_image aa"><img src={image14} alt=""/></div></div>
              <div class="latest_content">
                <div class="latest_title"><a href="news.html">A new way to see things in medicine</a></div>
                <div class="latest_info">
                  <ul class="d-flex flex-row align-items-start justify-content-start">
                    <li><a href="#">by Jane Smith</a></li>
                    <li><a href="#">April 25, 2018</a></li>
                  </ul>
                </div>
                <div class="latest_comments"><a href="#">2 Comments</a></div>
              </div>
            </div>

           
            <div class="latest d-flex flex-row align-items-start justify-content-start">
              <div><div class="latest_image"><img src={image15} alt=""/></div></div>
              <div class="latest_content">
                <div class="latest_title"><a href="news.html">Why is Pharma industry so big?</a></div>
                <div class="latest_info">
                  <ul class="d-flex flex-row align-items-start justify-content-start">
                    <li><a href="#">by Jane Smith</a></li>
                    <li><a href="#">April 25, 2018</a></li>
                  </ul>
                </div>
                <div class="latest_comments"><a href="#">2 Comments</a></div>
              </div>
            </div>

          </div>
        </div>
      </div>

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
    );
  }
}

export default Login;
