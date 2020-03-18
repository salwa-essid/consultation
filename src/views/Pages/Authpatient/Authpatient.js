import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from './img/logo.png';



class Authpatient extends Component {
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
      <div class="background_image bckk" ></div>
  
 
      
      <header class="header  " id="header">
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



      <div class="home_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="home_content">
              <div class="home_titlee ">
             
              To remove doubt about your <span className="sypmtome">symptoms: </span><br/>make a teleconsultation with a doctor <br/>
              <span className="online">online 
              in video</span></div>
              
             
               <div class="see-docter">
               
               <Link class="hy" to="signin">
               <button type="button" class="btn btn-danger patient d-flex align-item-center justify-content-center
              ">
               <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <span>See a doctor now </span>
               </button></Link>
               </div>
               <Link to="listpsypatient" className="hy">
               <div className="d-flex consulter justify-content-center boutt"> 
               
                     <h6 className="consulterr ">My doctor invited me to follow a teleconsultation</h6>
                     <i class="fa fa-arrow-right c" aria-hidden="true"></i>
               </div></Link>
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
        
             
               </div>
          </div>
        </div>
      </div>

     
   
 
  

</div>
  </div>



  <div className="bg" >
    <div class="fusion-fullwidth fullwidth-box fusion-parallax-none nonhundred-percent-fullwidth non-hundred-percent-height-scrolling 
    fusion-no-small-visibility fusion-no-medium-visibility boo"> 
      <div class="fusion-builder-row fusion-row d-flex ">
        <div data-animationtype="fadeIn" data-animationduration="0.8" data-animationoffset="100%"
        class="fusion-layout-column fusion_builder_column fusion_builder_column_2_5 fusion-builder-column-5 fusion-two-fifth fusion-column-first fusion-animated 2_5 ee">
          <div class="fusion-column-wrapper eee">
                  <div class="fusion-title title fusion-title-3 fusion-sep-none fusion-title-size-two fusion-border-below-title eeee">
                     <h2 class="title-heading-left eeeee" data-fontsize="46" data-lineheight="57">How it works ?</h2>
                  </div>
                  <div class="fusion-text">
                    <p style={{textAlign: "left"}}>
                       <span className="ttt">
                       It has never been easier to talk to a psychologist.
                       </span>
                    </p>
                   </div>
                  <span class="fusion-imageframe imageframe-none imageframe-1 hover-type-none">
                    <img src="https://preprod.hellocare.com/wp-content/uploads/2019/06/illustration_how-to.png" 
                    title="Parler a un medecin" class="img-responsive wp-image-22454"/>
                  </span>
                  <div class="fusion-clearfix"> </div>
          </div>
        </div>
        <div data-animationtype="fadeIn" data-animationduration="0.8" data-animationoffset="100%"
        class="fusion-layout-column fusion_builder_column fusion_builder_column_3_5 fusion-builder-column-6 
        fusion-three-fifth fusion-column-last fusion-animated 3_5 col2">
           <div class="fusion-column-wrapper col12">
              <div class="fusion-sep-clear"> </div>
              <div class="fusion-separator fusion-no-small-visibility fusion-no-medium-visibility fusion-full-width-sep sep-none">
              </div>
              <div class="fusion-content-boxes content-boxes columns row fusion-columns-1 fusion-columns-total-5 fusion-content-boxes-1 
                            content-boxes-icon-on-side content-left fusion-delayed-animation">
                 <div class="fusion-column content-box-column content-box-column content-box-column-1 col-lg-12 col-md-12 col-sm-12 fusion-content-box-hover ">
                  
                    <div class="col content-box-wrapper content-wrapper link-area-link-icon 
                    icon-hover-animation-slide fusion-animated fadeInLeft plt " data-animationtype="fadeInLeft"
                    data-animationduration="0.6" data-animationoffset="100%">
                    <div class="heading heading-with-icon icon-left">
                      <div class="icon lo" >
                      <i class="fontawesome-icon fa-frown far circle-no ico"></i>
                      </div>
                      <h2 class="content-box-heading ggg" data-inline-fontsize="true"
                      data-inline-lineheight="true" data-fontsize="24" data-lineheight="29">
                      1. I have a doubt or a question about my state of health
                      </h2>
                    </div>
                    <div class="fusion-clearfix"></div>
                    <div class="content-container r">
                        <p class="ttre">I need to speak to a doctor immediately to clear my doubts</p>
                    </div>
                    </div>
                  </div>
                 <div class="fusion-column content-box-column content-box-column content-box-column-3 col-lg-12 col-md-12 col-sm-12 fusion-content-box-hover ">
                  <div class="col content-box-wrapper content-wrapper link-area-link-icon icon-hover-animation-slide fusion-animated fadeInLeft ht" data-animationtype="fadeInLeft" data-animationduration="0.6" data-animationoffset="100%">
                     <div class="heading heading-with-icon icon-left"> 
                        <div class="icon"> 
                         <i class="fontawesome-icon fa-fingerprint fas circle-no er"></i>
                        </div>
                        <h2 class="content-box-heading h" data-inline-fontsize="true" data-inline-lineheight="true" data-lineheight="29">
                        2. I connect to Medium
                        </h2>
                        </div>
                     <div class="fusion-clearfix"></div>
                     <div class="content-container sal">
                      <p class="ttre">Wherever I am and no matter what time. My phone number and an internet connection are enough for me</p>
                     </div>
                  </div>
                 </div>
                 <div class="fusion-column content-box-column content-box-column content-box-column-3 col-lg-12 col-md-12 col-sm-12 fusion-content-box-hover ">
                 <div class="col content-box-wrapper content-wrapper link-area-link-icon icon-hover-animation-slide fusion-animated fadeInLeft ht" data-animationtype="fadeInLeft" data-animationduration="0.6" data-animationoffset="100%">
                    <div class="heading heading-with-icon icon-left"> 
                       <div class="icon"> 
                        <i class="fontawesome-icon fa-fingerprint fas circle-no er"></i>
                       </div>
                       <h2 class="content-box-heading h" data-inline-fontsize="true" data-inline-lineheight="true" data-lineheight="29">
                      

                           3. I enter a teleconsultation with a psychologist
                       </h2>
                       </div>
                    <div class="fusion-clearfix"></div>
                    <div class="content-container sal">
                     <p class="ttre">An online psychologist supports my video call, makes a diagnosis and directs me on the procedure to follow</p>
                    </div>
                 </div>
                </div>
                <div class="fusion-column content-box-column content-box-column content-box-column-3 col-lg-12 col-md-12 col-sm-12 fusion-content-box-hover ">
                <div class="col content-box-wrapper content-wrapper link-area-link-icon icon-hover-animation-slide fusion-animated fadeInLeft ht" data-animationtype="fadeInLeft" data-animationduration="0.6" data-animationoffset="100%">
                   <div class="heading heading-with-icon icon-left"> 
                      <div class="icon"> 
                       <i class="fontawesome-icon fa-fingerprint fas circle-no er"></i>
                      </div>
                      <h2 class="content-box-heading h" data-inline-fontsize="true" data-inline-lineheight="true" data-lineheight="29">
                  
                      4. I receive my prescription online
                      </h2>
                      </div>
                   <div class="fusion-clearfix"></div>
                   <div class="content-container sal">
                    <p class="ttre">
              
                    The psychologist sends me the documents ( <a href="https://hellocare.com/ordonnance-en-ligne/">
online prescription</a>, care sheet ...) for my treatment directly on my private area & secured.</p>
                   </div>
                </div>
               </div>
            
            
              </div>
                
              <div></div>
              <div></div>
              <div></div>
              <div></div>
           </div>
        </div>
      
        </div>
    </div>
  </div>
  <footer class="footer p-5">
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

export default Authpatient;


