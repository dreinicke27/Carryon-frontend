import '../assets/scss/style.scss';
import outline from "../assets/img/outline.svg"

const Customizer = () => {
    return (
        <div className='container'> 
            <h1 className='py-5'>CUSTOMIZER</h1>
            <div>
                <p><a href="#../components/SizeChart" className="link-secondary">size chart</a></p>
            </div>
            <div>
                <img src={outline} className="mx-auto d-block py-5" alt='jacket'></img>
            </div>
            <div className="d-grid col-12 py-5">
                <div className="btn-group" role="group" aria-label="Jacket attribute selectors">
                    <button type="button" className="btn btn-outline-dark">
                        <span><small className="text-muted">Size</small></span>
                        <span><p className="h6">Medium</p></span>
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                        <span><small className="text-muted">Length</small></span>
                        <span><p className="h6">Short</p></span>
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                        <span><small className="text-muted">Collar</small></span>
                        <span><p className="h6">Pointed</p></span>
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                        <span><small className="text-muted">Pockets</small></span>
                        <span><p className="h6">Outside</p></span>
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                        <span><small className="text-muted">Closure</small></span>
                        <span><p className="h6">Buttons</p></span>
                    </button>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-dark col-12 btn-lg">Finish Order</button>
                </div>
            </div>
        </div>
    );
  };
  
  export default Customizer;

        // <div>
        //     <div id="outline"></div>
        //     <div id="collar" className="eyes1"></div>
        //     <div id="closure" className="ears1"></div>
        //     <div id="pockets" className="nose1"></div>
        //     <div id="length" className="mouth1"></div>
        //     <div id="bpocket" className="clothes1"></div>
        // </div>