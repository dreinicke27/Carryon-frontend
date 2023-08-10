import one from '../assets/img/carousel/one.png';
import three from '../assets/img/carousel/three.png';
import title from '../assets/img/carryOn.png';
import "./Custom.scss"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [success, setSuccess] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE_CONTACT, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setSuccess("Success! Your message has been submitted. We will reply ASAP.");
          setName("");
          setEmail("");
          setMessage("");
      }, (error) => {
          console.log(error.text);
          setSuccess("Your message could not be submitted. Please try again.");
      });
    };

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">  
        <div className="carousel-inner">

            <div className="card-img-overlay container pt-5">
              <div className="row align-items-center py-5">
              <div className='col-6'>
                <h1 className="text-white display-2"><strong>Carry On</strong></h1>
                <p className="text-white">Keeping textiles out of landfills by giving them new life.</p>
              </div>
              <div className='py-5'>
                <a href="/#/customizer" type="button" class="btn btn-lg btn-outline-light">Customizer</a>
              </div>
              </div>
            </div>
    

          <div className="carousel-item active" data-bs-interval="3000">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100" alt="Wild Landscape"/>

          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits"/>
          </div>
        </div>
      </div> 

    <div className="container py-5">
      <div className='text-center py-5'>
        <img src={title} className='img-fluid' alt="Carry On"></img>
        <h3 className="py-3">Upcycled. Handmade. Sustainable Wares.</h3>
        <p className="pb-3 w-75 mx-auto">We make unique, wearable pieces out of material that might otherwise be discarded.  Carry On was inspired by the notion that everything old can be new again. 
        We thoughtfully craft pieces you'll love for years to come.</p>
        <a href="/#/about" type="button" className="btn btn-lg btn-outline-dark">About Us</a>
      </div>

    </div>

    <div className="row py-5 align-items-center bg-light bg-gradient">
        <div className='col'>
          <img src={one} className="rounded img-fluid" alt="femme person in floral jacket"/>
        </div> 
        <div className='col-7'>
          <div className="px-3">
          <h3>Custom Pieces, Made to Measure</h3>
          <p className="py-3 w-75">Let us make you the clothes of your dreams! Use our customizer to tell us exactly what you'd like.</p>
          <p className="py-3 w-75">The sky is the limit with your custom chore coat, and we can't wait to bring your vision to life, guaranteeing exactly the right fit and style.</p>
          <a href="/#/customizer" type="button" class="btn btn-lg btn-dark">Customizer</a>
          </div>
        </div> 
      </div>

    <figure className="text-center py-5">
        <blockquote className="blockquote pb-3">
          <h3>A well-known quote, contained in a blockquote element.</h3>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <div className="bg-light bg-gradient"> 
          <div className="row justify-content-start">
          <div className='col-4'>
              <img src={three} alt="femme person in white jacket" className='img-fluid'></img>
          </div>
          <div className="col-7 gx-5 py-3 ">
            <h3>Contact Us</h3>
            <div className="fs-6 fw-light mb-2">Questions or comments? Post your message below.</div>
            <form ref={form} id="contact_form" name="contact_form" onSubmit={sendEmail}>
                <div className="mb-3 row">
                    <div className="col">
                        <label>Your Name:</label>
                        <input type="text" required maxlength="50" class="form-control" id="name" name="name" placeholder="First Last" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="email_addr">Your Email:</label>
                        <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                            placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                </div>
                <div className="d-grid justify-content-end">
                <button type="submit" className="btn btn-outline-dark">Submit</button>
                </div>
                <span>{success}</span>
            </form>
          </div>
        </div>
      
      </div>


    </div>
    )};
  
  export default Home;

  

