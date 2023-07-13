import '../assets/scss/style.scss';
import outline from '../assets/img/outline.svg';

const Customizer = () => {

    return (
        <div className='container'> 
            <h1 className='py-5'>CUSTOMIZER</h1>
            <div>
                <p><a href="#../components/SizeChart" className="link-secondary">size chart</a></p>
            </div>
            <div className='mx-auto d-grid col-8 col-md-6 py-5'>
                <img src={outline} alt='jacket' className='d-grid col-12'></img>
                <div id="collar" className="collar1 d-grid col-12"></div>
                <div id="closure" className="closure1 d-grid col-12"></div>
                <div id="pockets" className="pockets1 d-grid col-12"></div>
                <div id="length" className="length1 d-grid col-12"></div>
                <div id="bpocket" className="bpocket1 d-grid col-12"></div>
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


//<div id="outline"></div>