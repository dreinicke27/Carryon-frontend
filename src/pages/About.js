import bio from '../assets/img/bio.png';
import "./Custom.scss"
import two from '../assets/img/carousel/two.svg';


const About = () => {
    return (
    <div>
        <div className="container pt-5 pb-3">
            <h1>ABOUT US</h1>
        </div>
        <div class="row justify-content-end">
            <div className='col-6 align-self-end'>
                <img src={two} alt="masc person in jacket made from coffee bean burlap sack" className='img-fluid d-inline-block rounded'/>
            </div>
        </div>
       
    <div className="container">
      <h2 className="text-center pt-5 pb-3">Our Promise</h2>
      <p className="text-center pb-5">Lorem ipsum stuff about what we do and how long should this section be.</p>
      
      <h2>Our Process</h2>
      <div className="row gx-5 py-3">
        <div className='col-6'>
            <p>Hi! We're Cole and Danica, and we started Carry On to keep 
                textiles out of landfills. We create one-of-a-kind clothing and 
                wares from upcycled fabric, thrifted and found items, and more.</p>
            <p>Carry On is queer owned, and based in Seattle, WA. </p>
            <a href="/#/customizer" type="button" class="btn btn-outline-dark">Shop Custom</a>
        </div>
        <div className="col">
            <img src={bio} alt="carryon's founders" className="img-fluid"/>
        </div>
      </div>
      <div className="row gx-5 py-5">
        <div className="col">
            <img src={bio} alt="carryon's founders" className="img-fluid"/>
        </div>
        <div className='col-6'>
            <h4>Title</h4>
            <p>Hi! We're Cole and Danica, and we started Carry On to keep 
                textiles out of landfills. We create one-of-a-kind clothing and 
                wares from upcycled fabric, thrifted and found items, and more.</p>
            <p>Carry On is queer owned, and based in Seattle, WA. </p>
            <a href="/#/customizer" type="button" class="btn btn-outline-dark">Shop Pre-Made</a>

        </div>
      </div>


      <div className='py-5'>
        <h3 className="text-center">FAQ</h3>
      </div>


      <div className="accordion accordion-flush pb-5" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}

export default About;