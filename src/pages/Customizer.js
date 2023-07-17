//import '../assets/scss/style.scss';
import outline from '../assets/img/outline.svg';
import bpocket1 from '../assets/img/bpocket/bpocket1.svg';
import SizeChart from '../components/SizeChart';

const Customizer = () => {
    const importAll = (r) => {
        let images = {};
        r.keys().map((item) => { 
            return images[item.replace('./', '')] = r(item); 
        });
        return images;
      };
      
      const closures = importAll(require.context('../assets/img/closure', false, /\.(png|jpe?g|svg)$/));
      const collars = importAll(require.context('../assets/img/collar', false, /\.(png|jpe?g|svg)$/));
      const lengths = importAll(require.context('../assets/img/length', false, /\.(png|jpe?g|svg)$/));
      const pockets = importAll(require.context('../assets/img/pockets', false, /\.(png|jpe?g|svg)$/));


    return (
        <div className='container'> 
            <h1 className='py-5'>CUSTOMIZER</h1>
            <div>
                <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#sizeChart">
                    Size Chart                
                </button>
            </div>
            <div className='row py-5'>
            <div className='mx-auto d-grid col-8 col-md-6 py-5 position-relative'>
                <img src={outline} alt='jacket' className='d-grid col-12 position-absolute'></img>
                <img src={collars['collar1.svg']} alt='collar' className="d-grid col-12 position-absolute"></img>
                <img src={closures['closure1.svg']} alt='closure' className="d-grid col-12 position-absolute"></img>
                <img src={pockets['pockets1.svg']} alt='pockets' className="d-grid col-12 position-absolute"></img>
                <img src={lengths['length1.svg']} alt='length' className="d-grid col-12 position-absolute"></img>
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
                    <button type="button" className="btn btn-outline-dark col-12 btn-lg" data-bs-toggle="modal" data-bs-target="#finishOrder">Finish Order</button>
                </div>
            </div>
            </div>
            <div className="modal fade" id="sizeChart" tabIndex="-1" aria-labelledby="sizeChart" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="sizeChart">Size Chart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <SizeChart />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="finishOrder" tabIndex="-1" aria-labelledby="finishOrder" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="finishOrder">Finish Order</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group pb-3">
                                <label htmlFor="FabricSelect">Fabric</label>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example" id="FabricSelect">
                                    <option selected>Choose one</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group pb-3">
                                <label htmlFor="FormControlTextarea1">Notes</label>
                                <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-dark">Add to Cart</button>
                            </div>
                    </div>
                </div>
            </div>   
        </div> 
    );
  };
  
  export default Customizer;