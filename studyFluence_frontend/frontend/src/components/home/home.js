import Hero from './hero';
import About from './about';
import Gallery from './gallery';
import Booking from './booking';
import Resources from './resources';

function Home (){
    console.log('home page')
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
            <Resources/>


            
        </main>


        </div>
    )
}

export default Home;
