// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const AboutUs = () => {
//   return (
//     <section
//       id="about"
//       style={{
//         minHeight: "100vh",
//         paddingTop: "100px",
//         backgroundColor: "#f8f9fa",
//       }}
//       data-aos="fade-up"
//     >
//       <Container>
//         <Row className="align-items-center justify-content-center">
//           <Col md={6}>
//             <img
//               src="https://media.istockphoto.com/id/500878416/photo/businessman-presenting-concept-about-consulting-and-expert-advices.jpg?s=1024x1024&w=is&k=20&c=1DaXHAy5dYxK6ZxUPzLYeekcnTqHoTF_LrCEMF5U9W4="
//               alt="About Us"
//               className="img-fluid rounded shadow"
//             />
//           </Col>
//           <Col md={6}>
//             <h2 className="text-center mb-4">About Us</h2>
//             <p>
//               <strong>
//                 M-SANTOO! Innovations and Business Consulting Services
//               </strong>{" "}
//               is a next-generation research and development organization,
//               dedicated to solving real-world challenges through the convergence
//               of diverse technologies and strategic collaboration.
//             </p>
//             <p>
//               We empower innovation by building a community-driven ecosystem
//               that brings together startups, companies, and professionals to
//               co-develop impactful solutions and manage business operations more
//               effectively.
//             </p>
//             <p>
//               At the core of our mission lies <strong>Inno-Bharat-Hub</strong>,
//               our flagship collaborative platform that enables shared growth,
//               cross-sector innovation, and sustainable development.
//             </p>
//             <p>
//               With our dual focus on <strong>Technology Services</strong> and{" "}
//               <strong>Business Consulting</strong>, we offer end-to-end support
//               for turning ideas into scalable and efficient realities.
//             </p>
//             <p>
//               We believe in harnessing the power of{" "}
//               <strong>data and digital intelligence</strong> to drive strategic
//               decisions, optimize performance, and unlock new growth
//               opportunities across all sectors.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default AboutUs;
///////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css"; // ⬅️ Import custom styles

const AboutUs = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <img
              src="https://media.istockphoto.com/id/500878416/photo/businessman-presenting-concept-about-consulting-and-expert-advices.jpg?s=1024x1024&w=is&k=20&c=1DaXHAy5dYxK6ZxUPzLYeekcnTqHoTF_LrCEMF5U9W4="
              alt="About Us"
              className="about-image"
            />
          </Col>
          <Col md={6}>
            <h2 className="about-heading">About Us</h2>
            <p>
              <strong>
                M-SANTOO! Innovations and Business Consulting Services
              </strong>{" "}
              is a next-generation research and development organization...
            </p>
            <p>
              We empower innovation by building a community-driven ecosystem...
            </p>
            <p>
              At the core of our mission lies <strong>Inno-Bharat-Hub</strong>
              ...
            </p>
            <p>
              With our dual focus on <strong>Technology Services</strong>...
            </p>
            <p>
              We believe in harnessing the power of{" "}
              <strong>data and digital intelligence</strong>...
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
