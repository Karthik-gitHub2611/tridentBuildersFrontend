import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/icons/logo.png"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { navBarMenu } from "../../common/constants";
import EmailIcon from '@mui/icons-material/Email';
import "./styles.scss"

type Tprops = {

}

export const Footer: React.FC<Tprops> = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <section className="logo-section">
                    <img src={Logo} />
                    <p>Trident Builders has gained immense expertise in Design of Multi-storey Buildings, Industrial Structures, Aero Bridges for Air port, Towers, Churches and other all types of structures.</p>
                </section>
                <section className="navigation-section">
                    <h4>Quick Links</h4>
                    <div className="links-wrapper">
                        {navBarMenu.map((data, index: number) => <Link to={`${data.route}`} key={index}><span>{data.label}</span></Link>)}
                    </div>
                </section>
                <section className="contact-section">
                    <h4>Contact</h4>
                    <div className="contact-wrapper">
                        <p>2B, Tudors Place,</p>
                        <p>134,P.V Rajamannar Salai,</p>
                        <p>  K.K Nagar, Chennai - 600 078.</p>
                        <span><LocalPhoneIcon />+91 98403 76116, <br/> +91 98410 97110</span>
                        <span><EmailIcon />tridentbuilders@gmail.com</span>
                    </div>
                </section>
            </div>
        </footer>
    )
}