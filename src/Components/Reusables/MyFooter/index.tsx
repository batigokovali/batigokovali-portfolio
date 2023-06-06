import { Col, Row, Container } from "react-bootstrap";
import {
  BsGithub,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsTwitter,
  BsSteam,
  BsSpotify,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const MyFooter = () => {
  return (
    <>
      <Container fluid className="mt-auto" id="footer">
        <Row>
          <Col xs={0} md={4} lg={6}>
            <div className="d-flex align-items-center">
              <p className="text-white mb-1 mr-1">
                <AiOutlineCopyrightCircle />
              </p>
              <p className="text-white mb-0 d-flex align-items-center">
                {" "}
                2023 - Batı Gökovalı
              </p>
            </div>
          </Col>
          <Col
            className="d-flex justify-content-end text-white"
            md={4}
            lg={6}
            id="footer-icons"
          >
            <a
              href="https://github.com/batigokovali"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/batigokovali/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="mx-2" />
            </a>
            <a
              href="https://www.youtube.com/@BatiGokovali/featured"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube className="mx-2" />
            </a>
            <a
              href="https://www.instagram.com/batigokovali/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="mx-2" />
            </a>
            <a
              href="https://twitter.com/batigokovali"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="mx-2" />
            </a>
            <a
              href="https://steamcommunity.com/id/Batocelot/"
              target="_blank"
              rel="noreferrer"
            >
              <BsSteam className="mx-2" />
            </a>
            <a
              href="https://open.spotify.com/user/batigokovali?si=90a4af67cb074e13"
              rel="noreferrer"
              target="_blank"
            >
              <BsSpotify className="mx-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
