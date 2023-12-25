import Navbar from '../components/Navbar';
import Data from '../components/Data';
import Footer from '../components/Footer';

const Dinopedia = () => {
    return ( 
        <>
        <Navbar />
        <div className="flex flex-col mt-8">
        <div className="flex flex-col items-center justify-center mt-10 mb-4 md:px-10 px-4 max-w-screen-2xl mx-auto">
            <h2 className="font-logo text-2xl md:text-4xl text-white">
                <span className="text-secondary">Dino</span>Pedia Information
            </h2>
            <p className="text-xs text-slate-300">Dinopedia berisi informasi tentang dinosaurus</p>
            <p className="text-xs text-slate-300">yang pernah ada didunia.</p>
        </div>
        <Data />
        <Footer />
        </div>
        </>
     );
}
 
export default Dinopedia;