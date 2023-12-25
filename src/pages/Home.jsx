import '../App.css';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeDino from "../components/HomeDino";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <>
            <Navbar/>
            <Banner/>
            <HomeDino/>
            <HomeAbout/>
            <Footer/>
        </>
     );
}
 
export default Home;