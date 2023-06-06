import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import cx from "classnames";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="ml-auto d-flex">
              <Link to={"/"} className={cx(styles.buttons, "mb-0 me-4")}>
                <p className="mb-0">Home</p>
              </Link>
              <Link to={"/about"} className={cx(styles.buttons, "mb-0 me-4")}>
                <p className="mb-0">About</p>
              </Link>
              <Link
                to={"/portfolio"}
                className={cx(styles.buttons, "mb-0 me-4")}
              >
                <p className="mb-0">Portfolio</p>
              </Link>
              <Link to={"/contact"} className={cx(styles.buttons, "mb-0 me-4")}>
                <p className="mb-0">Contact</p>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
