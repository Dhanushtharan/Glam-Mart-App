
import NavBar from './NavBar';
import './NavSide.css';
import Sidebar from './SideBar';
import Home from './Home';
function NavSide() {
  return (
    
    <div className="back">
    <div className="nav2">
  
    <NavBar/>
    <div>
      <Sidebar/>
      <div >
        <h1 style={{padding:"20%"}}>
          <Home/>
        </h1>
      </div>
    </div> 
    
  {/* <Router>

      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router> */}
    </div>
    </div>
    
  );
}

export default NavSide;