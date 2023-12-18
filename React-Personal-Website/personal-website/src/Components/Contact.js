import { Col, Row } from "react-bootstrap";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const Contact = () => {
  console.log("Thank You");
  const componentContent = (
    <>
      <h2>Contact</h2>
      <p>
        For all the services, please include your name, email address, and
        reason for contact and I will get back as soon as possible!
      </p>
      <br />
      <form
        action="https://formsubmit.co/bjornbjornssonn@gmail.com"
        method="POST"
      >
        <label for="name" id="name">
          name
        </label>
        <input
          name="name"
          value=""
          type="name"
          id="name"
          placeholder="name"
          required
        />

        <div>
          <label for="email" id="email">
            email address
          </label>
          <input
            name="email"
            value=""
            type="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="email@..."
            title="Not Valid"
            required
          />
        </div>

        <br />
        <label for="Services" id="Services">
          services required
        </label>
        <br />
        <textarea
          name="Service"
          cols="50"
          rows="10"
          placeholder="Services "
          required
        ></textarea>
        <br />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
  return standardPanel(componentContent);
};
export default Contact;
