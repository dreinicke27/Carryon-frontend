import carmen from '../assets/img/carousel/carmen.png';
import cole from '../assets/img/carousel/cole.png';
import danica from '../assets/img/carousel/danica.png';
import logo from '../assets/img/logoIcon.png';
import carryOn from '../assets/img/carryOn.png';

const Home = () => {
  return (
    <div className="container py-5">
      <div className='d-flex flex-row justify-content-around py-5'>
        <img src={logo} alt="Carry On logo"></img>
        <img src={carryOn} alt="Carry On"></img>
      </div>
      <div className='d-flex flex-row justify-content-center pb-5'>
          <h3>Upcycled. Handmade. Sustainable Wears.</h3>
      </div>
      <div className='mx-auto col-md-6'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={cole} className="d-block w-100" alt="A man outside a coffee shop in a jacket made from a burlap green coffee bean sack"/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={carmen} className="d-block w-100" alt="A woman in a handmade jacket made out of a white curtain"/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={danica} className="d-block w-100" alt="A femme person in a handmade jacket made out of a colorful floral curtain"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    )};
  
  export default Home;