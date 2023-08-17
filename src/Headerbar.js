import logo from './img/logo.png';
import search from './img/search.png'
function Headerbar() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      &nbsp; <b>ED-TECH</b>
    </a>
<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>
<form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search Courses" aria-label="Search"/>
      <button className="btn btn-outline-light" type="submit">Search</button>
    </form>

<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>
<a className="navbar-brand" href="#"></a>

<a className="navbar-brand" href="#">Courses</a>
<a className="navbar-brand" href="#">Resources</a>
<a className="navbar-brand" href="#">Contests</a>
<a className="navbar-brand" href="#">Support</a>
<a className="navbar-brand" href="#">About Us</a> 
<a className="navbar-brand" >&nbsp;|&nbsp;</a>
<a className="navbar-brand" href="#">Sign in</a>


  
    </div>
</nav>
     
  </header>
  );
}
export default Headerbar;
  