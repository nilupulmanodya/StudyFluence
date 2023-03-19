import { useSelector } from 'react-redux';

import NavBar from './navbar/navbar'
import Footer from './footer/footer';
import Home from './home/home';
import Forum from './forum/forum';
import Booking from './home/booking';
import Gallery from './home/gallery';
import About from './home/about';
import Hero from './home/hero';
import Resources from './home/resources';
import Tests from './home/tests';
import { useEffect } from 'react';

function AuthenticatedFrame(props){
    const client = props.client
    const navigationView = useSelector((state) => state.auth.navigationView);

    useEffect(()=>{
        switchNavigation(navigationView)
        window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[navigationView])

    const switchNavigation = (navigationView) => {
        switch(navigationView) {
  
          case 'home':   return <Home />;
          case 'about':   return <About />;
          case 'gallery': return <Gallery />;
          case 'resoureces':  return <Resources />;
          case 'booking':  return <Booking />;
          case 'hero':  return <Hero />;
          case 'tests':  return <Tests client={client} />;
          case 'forum':  return <Forum client={client} />;
  
          default:return <Home />
        }
      }
  
    return (
        
        <div>
            <NavBar client={client}/>

            {/* navigation views
                    1.home
                    2.about
                    3.gallery
                    4.resoureces
                    5.booking
                    6.hero
                    7.timeline
                    8.forum  */}


                {switchNavigation(navigationView)}
                
            <Footer/>
        </div>
        

    )
}

export default AuthenticatedFrame;