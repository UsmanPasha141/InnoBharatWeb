// import React from "react";
// import { Container, Form, Button } from "react-bootstrap";

// const ContactUs = () => {
//   return (
//     <section id="contact" style={{ height: "100vh" }}>
//       <Container>
//         <h2>Contact Us</h2>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Your name" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Message</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Send
//           </Button>
//         </Form>
//       </Container>
//     </section>
//   );
// };

// export default ContactUs;
///////////////////////////////////////////////////////////////////////////////////
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./ContactUs.css"; // Custom styles imported

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Contact Us</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              className="contact-input"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="contact-input"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} className="contact-input" />
          </Form.Group>
          <Button variant="primary" type="submit" className="contact-btn">
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactUs;
