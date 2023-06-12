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
            To sum up my work experience and career path, I am responsible,
            adaptable, open-minded with a teamwork-oriented person. I have
            proven myself on adaptability and flexibility in managing both
            serial and prototype productions, meeting all required deadlines
            with a problem-solving and punctual mindset. Experienced in
            corporate workflow and bureaucracy within a company of 3500+
            employees. My multidisciplinary background includes designing
            process routes for pyrotechnics systems, such as ignition systems,
            electrical and mechanical components, and safe-arm devices.
          </p>
        </div>
        <div>
          <p className={cx(styles.text)}>
            Also, I am passionate about computer science and coding, I completed
            EPICODE's full-stack developer course, acquiring skills in
            JavaScript, TypeScript, React, and NodeJS. Currently seeking a
            full-stack developer position in the EU to enhance my skills and
            contribute as a valuable asset to a company.
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
