import '../assets/scss/style.scss';
import outline from '../assets/img/outline.svg';
import bpocket1 from '../assets/img/bpocket/bpocket1.svg';
import collar1 from '../assets/img/collar/collar1.svg';
import closure1 from '../assets/img/closure/closure1.svg';
import pockets1 from '../assets/img/pockets/pockets1.svg';
import length1 from '../assets/img/length/length1.svg';

const Customizer = () => {



    return (
        <div className='container'> 
            <h1 className='py-5'>CUSTOMIZER</h1>
            <div>
                <p><a href="#../components/SizeChart" className="link-secondary">size chart</a></p>
            </div>
            <div className='row py-5'>
            <div className='mx-auto d-grid col-8 col-md-6 py-5 position-relative'>
                <img src={outline} alt='jacket' className='d-grid col-12 position-absolute'></img>
                <img src={collar1} alt='collar' className="d-grid col-12 position-absolute"></img>
                <img src={closure1} alt='closure' className="d-grid col-12 position-absolute"></img>
                <img src={pockets1} alt='pockets' className="d-grid col-12 position-absolute"></img>
                <img src={length1} alt='length' className="d-grid col-12 position-absolute"></img>
                <img src={bpocket1} alt='breastpocket'className="d-grid col-12 position-absolute"></img>
            </div>
            </div>
            <div className='row py-5 my-5'> 
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
        </div>
    );
  };
  
  export default Customizer;