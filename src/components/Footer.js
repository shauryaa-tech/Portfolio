import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon1">
            <a href="https://www.linkedin.com/in/shaurya-pratap-singh-8240ba344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" type="_target"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/shauryaa_dgaf?igsh=MTFoaG1tcnI3eHFsNw==" type="_target"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/" type="_target"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
