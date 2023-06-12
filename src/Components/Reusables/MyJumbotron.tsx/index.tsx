import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import cx from "classnames";
import styles from "./styles.module.css";
import image from "../../assets/pp_result.png";

const MyJumbotron = () => {
  return (
    <>
      <Container
        className={cx(
          styles.jumbotainer,
          "main-jumbotron text-white mt-5 d-flex flex-column justify-content-center"
        )}
      >
        <Row>
          <Col>
            <div className="d-flex flex-column align-items-end">
              <h1>BATI GÖKOVALI</h1>
              <p id="typewriter-banger" className="mt-5">
                <Typewriter
                  words={[
                    "FULLSTACK DEVELOPER",
                    "FRONTEND DEVELOPER",
                    "BACKEND DEVELOPER",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
          </Col>
          <Col>
            <img src={image} className={cx(styles.image)} alt="" />
          </Col>
        </Row>
        <div className="d-flex flex-column align-items-center"></div>
      </Container>
    </>
  );
};

export default MyJumbotron;
