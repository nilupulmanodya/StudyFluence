import Hero from './hero';
import About from './about';
import Gallery from './gallery';
import Booking from './booking';
import Resources from './resources';

import { useSelector } from 'react-redux';

function Home (){

    const singedInAs = useSelector((state) => state.auth.singedInAs);
    console.log('home page singedInAs',singedInAs)
    return (
        <div>
             <main>
            {/* <!-- Section hero --> */}
            <Hero/>
            

            {/* <!-- Section about --> */}
            <About/>

            {/* <!-- Section gallery --> */}
            <Gallery/>


            {/* <!-- Section booking --> */}
            <Booking/>

            {/* <!-- Section Resources --> */}
            {singedInAs !=='2' && <Resources/>
            }


            
        </main>


        </div>
    )
}

export default Home;
