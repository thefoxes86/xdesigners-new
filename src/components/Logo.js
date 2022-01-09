import { ReactSVG } from "react-svg";
import logo from "../images/logo.svg";

const Logo = (props) => {
  return (
    <div className="logo">
      <a className="link">
        <ReactSVG svg={logo} />
      </a>
    </div>
  );
};

export default Logo;
