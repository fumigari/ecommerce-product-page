import React from "react";
import logomarca from "../../../../images/logomarca.svg";
import "./index.css";

const Logo: React.FC = (): JSX.Element => {
    return (<img src={logomarca} alt="sneakers logo" className="logo" />);
}

export default Logo;