import { useDispatch } from 'react-redux';
import { setSingedInAs, setNavigationView } from '../../store/authSlice';

function NavBar (props) {
    const client =props.client
    const dispatch = useDispatch();


    function submitLogout(e) {
        e.preventDefault();
        client.post(
          "/api/logout",
          {withCredentials: true}
        ).then(function(res) {
          dispatch(setSingedInAs('0'));
        });
      }

      function setNavigationForum(e){
        e.preventDefault();
        console.log('setting navigation',e)
        dispatch(setNavigationView('forum'));
    }
    function setNavigationResources(e){
        e.preventDefault();
        console.log('setting navigation',e)
        dispatch(setNavigationView('resoureces'));
    }

    function setNavigationContact(e){
        e.preventDefault();
        console.log('setting navigation',e)
        dispatch(setNavigationView('booking'));
    }

    function setNavigationTests(e){
        e.preventDefault();
        console.log('setting navigation',e)
        dispatch(setNavigationView('tests'));
    }

    function setNavigationAbout(e){
        e.preventDefault();
        console.log('setting navigation',e)
        dispatch(setNavigationView('about'));
    }

    
    function setNavigationHome(e){
        e.preventDefault();
        console.log('setting navigation',e)
        dispatch(setNavigationView('home'));
    }



    return (


        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
        <div className="container">
            <img src="assets/images/logo_StudyFluence.png"  height = "60" alt=""/>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">

                    
                    <li className="nav-item">
                        <a id="home" onClick={setNavigationHome} className="nav-link" href="#hero">Home</a>
                    </li>

                    <li className="nav-item">
                        <a onClick={setNavigationAbout} className="nav-link" href="#about">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a onClick={setNavigationContact} className="nav-link" href="#booking">Contact</a>
                    </li>

                    <li className="nav-item">
                        <a id="forum" onClick={setNavigationResources} className="nav-link" href="#resources">Resources</a>
                    </li>
                    <li className="nav-item">
                        <button onClick={setNavigationTests} className="nav-link button-forum-nav">Tests</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={setNavigationForum} className="nav-link button-forum-nav">Forum</button>
                    </li>
                    
                </ul>
            </div>
            <div className="nav-item">
            <form onSubmit={e => submitLogout(e)}>
                  <button className="nav-link">Sign out <i className="fa fa-sign-out"></i></button>
             </form>
                
            </div>

        </div>
    </nav>

    )
}



            

export default NavBar