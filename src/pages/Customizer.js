import outline from '../assets/img/outline.svg';
import bpocketImg from '../assets/img/bpocket/bpocket.svg';
import SizeChart from '../components/SizeChart';
import { useState } from 'react';

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
      const sizes = {S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL'};

      //collars = {pointed.svg: ..., none.svg:..., round.svg: ...},
      const parts = {
        closure: closures,
        collar: collars, 
        length: lengths,
        pockets: pockets, 
        size: sizes,  
      }

      const initialAttributes = {
        size: 'S',
        collar: 'Pointed', 
        closure: 'Buttons', 
        pockets: 'Outside', 
        length: 'Short', 
        bpocket: false, 
        fabric: null, 
        notes: null, 
        price: 150
      };

      const [attributes, setAttributes] = useState(initialAttributes);
      let pocketCheck = attributes.bpocket;
      
      const onCheck = () => {
        pocketCheck = !attributes.bpocket;
        return pocketCheck;
      };
      
      const onChange = (event) => {
        if (pocketCheck === attributes.bpocket) {
            const newAttributes = {
                ...attributes,
                [event.target.value]: event.target.name
              };
              setAttributes(newAttributes);
        } else {
            const newAttributes = {
                ...attributes,
                [event.target.value]: event.target.name, bpocket:pocketCheck
              };
              setAttributes(newAttributes);
        };
      };

      //write function to assign active bg-dark to only the correct dropdown-item

      

      const bpocketShown = attributes.bpocket ? bpocketImg : outline;

      const findImage = (part, selection) => {
        const svg = selection.toLowerCase()+'.svg';
        const image = parts[part][svg];
        return image;
      };

    return (
        <div className='container'> 
            <h1 className='py-5'>CUSTOMIZER</h1>
            <div>
                <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#sizeChart">
                    Size Chart                
                </button>
            </div>
            <div>
            <div className='mx-auto d-grid col-7 col-md-5 position-relative'>
                <img src={outline} alt='jacket' className='col-12 position-relative'></img>
                <img src={findImage('collar', attributes.collar)} alt='collar' className="col-12 position-absolute"></img>
                <img src={findImage('closure', attributes.closure)} alt='closure' className="col-12 position-absolute"></img>
                <img src={findImage('pockets', attributes.pockets)} alt='pockets' className="col-12 position-absolute"></img>
                <img src={findImage('length', attributes.length)} alt='length' className="col-12 position-absolute"></img>
                <img src={bpocketShown} alt='breastpocket'className="col-12 position-absolute"></img>
            </div>
            </div>
            <div> 
                <div className="d-grid col-12 py-5">
                    <div className="btn-group dropup" role="group" aria-label="Jacket attribute selectors">
                        <button type="button" className="btn btn-outline-dark dropdown-toggle" id='sizeDrop' data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            <span><small className="text-muted">Size</small></span>
                            <span><p className="h6">{attributes.size}</p></span>
                        </button>
                        <ul className="dropdown-menu"  aria-labelledby="sizeDrop" onClick={onChange}>
                            <li><button className="dropdown-item active bg-dark" value='size' name='S'>S</button></li>
                            <li><button className="dropdown-item" value='size' name='M'>M</button></li>
                            <li><button className="dropdown-item" value='size' name='L'>L</button></li>
                            <li><button className="dropdown-item" value='size' name='XL'>XL</button></li>
                            <li><button className="dropdown-item" value='size' name='XXL'>XXL</button></li>
                        </ul>
                        <button type="button" className="btn btn-outline-dark dropdown-toggle" id='lengthDrop' data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            <span><small className="text-muted">Length</small></span>
                            <span><p className="h6">{attributes.length}</p></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="lengthDrop" onClick={onChange}>
                            <li><button className="dropdown-item active bg-dark" value='length' name='Short'>Short</button></li>
                            <li><button className="dropdown-item" value='length' name='Mid'>Mid</button></li>
                            <li><button className="dropdown-item" value='length' name='Long'>Long</button></li>
                        </ul>
                        <button type="button" className="btn btn-outline-dark dropdown-toggle" id='collarDrop' data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            <span><small className="text-muted">Collar</small></span>
                            <span><p className="h6">{attributes.collar}</p></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby='collarDrop' onClick={onChange}>
                            <li><button className="dropdown-item active bg-dark" value='collar' name='Pointed'>Pointed</button></li>
                            <li><button className="dropdown-item" value='collar' name='Round'>Round</button></li>
                            <li><button className="dropdown-item" value='collar' name='None'>None</button></li>
                        </ul>
                        <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            <span><small className="text-muted">Pockets</small></span>
                            <span><p className="h6">{attributes.pockets}</p></span>
                        </button>
                        <ul className="dropdown-menu" onClick={onChange}>
                            <li><button className="dropdown-item active bg-dark" value='pockets' name='Outside'>Outside</button></li>
                            <li><button className="dropdown-item" value='pockets' name='Inside'>Inside</button></li>
                            <li><div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={onCheck}/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Breast Pocket
                                </label>
                            </div></li>
                        </ul>
                        <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            <span><small className="text-muted">Closure</small></span>
                            <span><p className="h6">{attributes.closure}</p></span>
                        </button>
                        <ul className="dropdown-menu" onClick={onChange}>
                            <li><button className="dropdown-item active bg-dark" value='closure' name='Buttons'>Buttons</button></li>
                            <li><button className="dropdown-item" value='closure' name='Zipper'>Zipper</button></li>
                        </ul>
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
                                    <option defaultValue>Choose one</option>
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