import Footer from "../components/Footer";
import Header from "../components/Header";
import Hom from "../assets/home.jpg";
import './Home.css';
import Card from "../components/Card";
import Service from "../components/Service";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <Header />

      {/* Image Section */}
      <div className="image-container">
        <img src={Hom} alt="Welcome to the site" />
        <div className="search-bar-container">
          <h2>Book Perfect Stay for Your Vacation</h2>
          
        </div>
      </div>
         {/* Card Section */}
      <div className="card-section">
        <h3 className="section-title">Our Top Rated & Highly Visited Hotels </h3>
        <Card />
      </div>


      <Service/>
      <AboutUs/>

      


      

      <Footer />
    </>
  );
};

export default Home;
