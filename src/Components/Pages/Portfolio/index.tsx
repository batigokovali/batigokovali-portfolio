import MyFooter from "../../Reusables/MyFooter";
import MyNavbar from "../../Reusables/MyNavbar";
import { Row, Col, Container } from "react-bootstrap";
import cx from "classnames";
import styles from "./styles.module.css";
import CV from "../../assets/BatiGokovali_CV.pdf";

export const Portfolio = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
        <p className={cx(styles.header, "mb-3")}>Tech Stack</p>
        <Row>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/html_txesmj.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680997908/portfolio/icons/css_ddpjtc.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880649/portfolio/icons/js_arqpiz.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/ts_q9vyqa.png"
              alt=""
            />
          </Col>
          <Col className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880726/portfolio/icons/bs_zjcqm1.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880787/portfolio/icons/react_g7k5uy.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/Redux_mv93yn.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680997317/portfolio/icons/expressjs_logo_wzixvp_2295cb.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880857/portfolio/icons/node_vthzgb.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880942/portfolio/icons/mongo_dpryoe.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680880938/portfolio/icons/postgresql_d6uyhn.png"
              alt=""
            />
          </Col>
          <Col lg={2} className="mb-3">
            <img
              className="roundedCircle logos p-3"
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680878838/portfolio/icons/postman_iothff.png"
              alt=""
            />
          </Col>
        </Row>
        <div>
          <p className={cx(styles.header, "mb-3 mt-5")}>Projects</p>
          <p className={cx(styles.text)}>
            Currently doing some improvements on my previous projects. You can
            check them in my{" "}
            <a
              className={cx(styles.anchor)}
              href="https://github.com/batigokovali?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Github!
            </a>
          </p>
        </div>
        <div>
          <p className={cx(styles.header, "mb-3 mt-5")}>CV</p>
          <p className={cx(styles.text)}>
            Click{" "}
            <a className={cx(styles.anchor)} href="#">
              here
            </a>{" "}
            to download my CV!
          </p>
        </div>
      </Container>

      <MyFooter />
    </>
  );
};
