import ben from '../assets/img/ben.png';
import yellow from '../assets/img/yellow.png';
import "./Custom.scss"
import two from '../assets/img/carousel/two.png';


const About = () => {
    return (
    <div>
        <div class="row justify-content-end align-items-center bg-light bg-gradient">
            <div className="col-5">
                <h1>ABOUT US</h1>
            </div>
            <div className='col-5 align-self-end'>
                <img src={two} alt="masc person in jacket made from coffee bean burlap sack" className='img-fluid d-inline-block'/>
            </div>
        </div>
       
    <div className="container">
      <h2 className="text-center pt-5 pb-3">Our Promise</h2>
      <p className="text-center pb-5 w-75 mx-auto">Sustainable clothing with a story you'll love to tell. We guarantee one-of-a-kind pieces you'll treasure for years to come.</p>

      
      <h2>Our Process</h2>
      <div className="row gx-5 py-3">
        <div className='col-6'>
            <p className="py-3">It all started with sewing on thrifted and found fabrics as a low-stakes and fun way to practice working with new patterns, and creating our own. Now, we can't imagine buying new fabric! </p>
            <p className="pb-3">We work with textiles like curtains, blankets, and burlap green coffee sacks and re-imagine them into one-of-a-kind garments and ware</p>
            <p className="pb-3">Custom jackets are made-to-measure, just for you. They are fully lined, comfy, and lightweight.</p>
            <a href="/#/customizer" type="button" class="btn btn-outline-dark">Shop Custom</a>
        </div>
        <div className="col">
            <img src={ben} alt="Customer wearing a custom-made burlap jacket" className="img-fluid rounded"/>
        </div>
      </div>
      <div className="row gx-5 py-5">
        <div className="col">
            <img src={yellow} alt="Yellow pre-made jacket with vintage buttons" className="img-fluid rounded"/>
        </div>
        <div className='col-6'>
            <p className="py-3">Once discarded or donated, over 66% of textiles end up in landfills. This amounts to about 21 billion pounds of textile waste each year. </p>
            <p className="pb-3">Our mission is to repurpose and reuse textiles, keeping them in circulation and out of landfills.</p>
            <p className="pb-3">We make sustainable fashion you'll feel great wearing.</p>
            <a href="https://fbb3a3.myshopify.com/collections/all" target="_blank" rel="noreferrer" type="button" class="btn btn-outline-dark">Shop Pre-Made</a>

        </div>
      </div>

      <div className='py-3'>
        <h3 className="text-center">FAQ</h3>
      </div>

      <div className="accordion accordion-flush pb-5 w-75 mx-auto" id="accordionFlushExample">
        <div className="accordion-item py-3">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                When will I receive my custom order?
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body py-3">You should expect two weeks of fabrication time per item, from when you place your order.  We'll let you know when the order is ready for pickup or shipment.</div>
            </div>
        </div>
        <div className="accordion-item py-3">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Can I order custom items that aren't jackets?
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body py-3">Yes! Get in touch via our contact form with any other ideas or requests you have.  We're happy to work with you!</div>
            </div>
        </div>
        <div className="accordion-item py-3">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How do you source your materials?
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body py-3">We thrift many of the fabrics that we work with.  Local coffee shops have been kind enough to donate many of the burlap coffee bean sacks we work with.</div>
            </div>
        </div>
        <div className="accordion-item py-3">
            <h2 className="accordion-header" id="flush-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Can I bring my own fabric?
            </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body py-3">Yes! If you'd like to provide the fabric, we're happy to accommodate that. </div>
            </div>
        </div>
        <div className="accordion-item py-3">
            <h2 className="accordion-header" id="flush-headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Where can I see pre-made items? 
            </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body py-3">You can shop pre-made items on our instagram, @carryon.xo, linked in this site's footer. 
                                                You can find us irl every month at Pioneer Square Art Walk in the studios at Project 106 in Seattle, 
                                                and sporadically at other markets in the Seattle area.  Keep up to date by following our instagram.</div>
            </div>
        </div>
        <div className="accordion-item py-3">
            <h2 className="accordion-header" id="flush-headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                What is your return policy? 
            </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body py-3">If you're unhappy with your custom item, we're happy to exchange it for another.
                                                Pre-made items can be returned for a refund, or exchanged. It's important to us that you love your item!
                                                If an item is damaged, we're happy to repair it, fee to be negotiated. </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}

export default About;