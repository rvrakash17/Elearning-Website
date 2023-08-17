
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from './img/fb.png';
import wa from './img/wa.png';
import lin from './img/in.png';
import ins from './img/ig.png';
import yt from './img/yt.png';
import mail from './img/mail.png';
import logo from './img/logo.png';

function Bottambar() {
  return (
   
    <footer className="page-footer shadow">
    <div className="d-flex flex-column mx-auto py-5" style={{width: "80%"}}>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="align-self-center">
        <button className="btn btn-primary btn-flat p-2">
            <img alt="logo" src={logo} width="30px" />
            </button>   
            <span className="ms-3 h5 font-weight-bold">RVR CONSULTING GROUP</span>
          <div className="mt-5">
            <button className="btn btn-primary btn-flat p-2">
              <img src={fb}width="30" height="30"></img>
            </button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success btn-flat p-2">
            <img src={wa}width="30" height="30"></img>
            </button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger btn-flat p-2">
            <img src={ins}width="30" height="30"></img>
            </button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-flat p-2">
            <img src={lin}width="30" height="30"></img>
            </button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger btn-flat p-2">
            <img src={yt}width="30" height="30"></img>
            </button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-info btn-flat p-2">
            <img src={mail}width="30" height="30"></img>
            </button>
          </div>
        </div>
        <div>
          <p className="h5 mb-4" style={{fontWeight: "600"}}>Courses</p>
          <ul className="p-0" style={{listStyleType: "none" , cursor: "pointer"}}>
            <li className="my-2">
              <a className="text-dark" href="/">Categories</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Documents</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Roadmap</a>
            </li>
            <li className="my-2"><a className="text-dark" href="/">Blog</a></li>
          </ul>
        </div>
        <div>
          <p className="h5 mb-4" style={{fontWeight: "600"}}>Essentials</p>
          <ul className="p-0" style={{listStyleType: "none" , cursor: "pointer"}}>
            <li className="my-2">
              <a className="text-dark" href="/">Features</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">About</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Privacy</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="h5 mb-4" style={{fontWeight: "600"}}>Help</p>
          <ul className="p-0" style={{listStyleType: "none" , cursor: "pointer"}}>
            <li className="my-2">
              <a className="text-dark" href="/">Support</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Contact us</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      <small className="text-center mt-5">&copy; Akash Racichandran, 2023. All rights reserved.</small>
    </div>
  </footer>
   );
}

export default Bottambar;
