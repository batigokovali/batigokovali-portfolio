import MyFooter from "../../Reusables/MyFooter";
import MyNavbar from "../../Reusables/MyNavbar";
import { Row, Col, Container } from "react-bootstrap";

export const Portfolio = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
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
      </Container>

      <MyFooter />
    </>
  );
};
