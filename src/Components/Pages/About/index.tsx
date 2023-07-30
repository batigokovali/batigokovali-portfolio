import MyNavbar from "../../Reusables/MyNavbar";
import MyFooter from "../../Reusables/MyFooter";
import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import cx from "classnames";

export const About = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <div className="mt-3">
          <p className={cx(styles.header)}>About Me</p>
        </div>
        <div>
          <p className={cx(styles.text)}>
            Highly skilled process engineer with 2 years of expertise in both
            serial and prototype productions. Proficient in designing process
            routes for pyrotechnics systems, including ignition systems of solid
            propellant rocket motors, electrical and mechanical components, and
            safe-arm devices. Recently completed an immersive boot camp at
            EPICODE, fueling a strong passion for technology and software
            development. Currently, actively seeking a new career path as a
            full-stack developer to leverage my problem-solving abilities,
            analytical mindset, and dedication to delivering innovative
            solutions in the software industry.
          </p>
        </div>
        <div>
          <p className={cx(styles.text)}></p>
        </div>
      </Container>
      <MyFooter />
    </>
  );
};
