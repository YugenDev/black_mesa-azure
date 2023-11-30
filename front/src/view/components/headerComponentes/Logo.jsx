import "./Logo.css";
import logoImg from "../../../assets/images/logo-bmb.png"

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImg} alt="logo" className="logo-img" />
      <div className="logo-nombre">
        <h6 className="name-black" >BLACK</h6>
        <h6 className="name-mesa" >MESA</h6>
        <h6 className="name-bank" >BANK</h6>
      </div>
    </div>
  );
}

export default Logo;
