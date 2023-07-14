import '../assets/scss/style.scss';
import outline from '../assets/img/outline.svg';
import bpocket1 from '../assets/img/bpocket/bpocket1.svg';
import collar1 from '../assets/img/collar/collar1.svg';
import closure1 from '../assets/img/closure/closure1.svg';
import pockets1 from '../assets/img/pockets/pockets1.svg';
import length1 from '../assets/img/length/length1.svg';
import SizeChart from '../components/SizeChart';

const Customizer = () => {



    return (
        <div className='container'> 
            <h1 className='py-5'>CUSTOMIZER</h1>
            <div>
                <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#sizeChart">
                    Size Chart                
                </button>
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
                    <button type="button" className="btn btn-outline-dark col-12 btn-lg" data-bs-toggle="modal" data-bs-target="#finishOrder">Finish Order</button>
                </div>
            </div>
            </div>
            <div class="modal fade" id="sizeChart" tabindex="-1" aria-labelledby="sizeChart" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="sizeChart">Size Chart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <SizeChart />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="finishOrder" tabindex="-1" aria-labelledby="finishOrder" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="finishOrder">Size Chart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                    </div>
                </div>
            </div>   
        </div> 
    );
  };
  
  export default Customizer;