import one from '../assets/img/carousel/one.png';
// import two from '../assets/img/carousel/two.png';
// import three from '../assets/img/carousel/three.png';
import title from '../assets/img/carryOn.png';
import "./Custom.scss"

const Home = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">  
        <div className="carousel-inner">
    
            <div className="card-img-overlay container py-5 ">
              <div className='h-100 d-flex flex-column justify-content-center col-3 offset-1'>
                <h1 className="text-white">Carry On</h1>
                <p className="text-white pb-2">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <a href="/#/customizer" type="button" class="btn btn-lg btn-outline-light">Customizer</a>
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
      <figure className="text-center py-5">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <div className="row py-5">
        <div className='col'>
          <img src={one} alt="femme person in floral jacket"  className="img-fluid rounded px-3"/>
        </div> 
        <div className='col'>
          <div className="px-3">
          <h3>Customizer</h3>
          <p className="py-3">Text about the customizer. Lorem ipsum something figuring out about how long the text should be.</p>
          <a href="/#/customizer" type="button" class="btn btn-dark">Customizer</a>
          </div>
        </div> 
      </div>

        <div className='text-center py-5'>
          <h3>Upcycled. Handmade. Sustainable Wears.</h3>
          <img src={title} className='img-fluid' alt="Carry On"></img>
          <p>Text about the us. Lorem ipsum something figuring out about how long the text should be.</p>
        </div>
    </div>

      <div className="py-5 bg-light bg-gradient"> 
        <div className="container">
          <h3>Contact Us</h3>
          <div className="fs-6 fw-light mb-2">Post your message below. We will get back to you ASAP</div>
          <form id="contact_form" name="contact_form" method="post">
              <div className="mb-3 row">
                  <div className="col">
                      <label>Your Name:</label>
                      <input type="text" required maxlength="50" class="form-control" id="name" name="name"/>
                  </div>
                  <div className="col">
                      <label htmlFor="email_addr">Your Email:</label>
                      <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                          placeholder="name@example.com"/>
                  </div>
              </div>
              <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="3"></textarea>
              </div>
              <div className="d-grid justify-content-end">
              <button type="submit" className="btn btn-outline-dark">Submit</button>
              </div>
          </form>
        </div>
      </div>


    </div>
    )};
  
  export default Home;

  

