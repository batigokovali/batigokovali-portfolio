import MyNavbar from "../../Reusables/MyNavbar";
import MyFooter from "../../Reusables/MyFooter";
import emailjs from "@emailjs/browser";
import { useRef, RefObject } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cx from "classnames";
import styles from "./styles.module.css";

export const Contact = () => {
  const form: RefObject<HTMLFormElement> | null = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      // Add a null check here
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID!,
          process.env.REACT_APP_TEMPLATE_ID!,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <p id={cx(styles.header)}>Got a question? Send an email to me!</p>
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            id={cx(styles.inputs)}
            className="mb-3"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            id={cx(styles.inputs)}
            className="mb-3"
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            className="mb-3"
            id={cx(styles.inputs)}
          />
          <input type="submit" value="Send" />
        </form>
      </Container>
      <MyFooter />
    </>
  );
};
