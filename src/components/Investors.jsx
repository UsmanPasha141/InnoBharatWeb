// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";

// const investors = [
//   {
//     name: "Swami Nanada",
//     role: "Founder - India",
//     image:
//       "https://media.istockphoto.com/id/2204316382/photo/portrait-of-delivery-person-wearing-uniform-with-customer-giving-delivery-stock-photo.jpg?s=1024x1024&w=is&k=20&c=h2SIM9PAvHLaMPyv05OPcVNEGB76AbdehMs6LUEfRQU=", // Replace with real photos later
//   },
//   {
//     name: "SANTOO",
//     role: "Ruler - India",
//     image:
//       "https://media.istockphoto.com/id/2204316382/photo/portrait-of-delivery-person-wearing-uniform-with-customer-giving-delivery-stock-photo.jpg?s=1024x1024&w=is&k=20&c=h2SIM9PAvHLaMPyv05OPcVNEGB76AbdehMs6LUEfRQU=",
//   },
//   {
//     name: "Krishan",
//     role: "Manager - India",
//     image:
//       "https://media.istockphoto.com/id/2204316382/photo/portrait-of-delivery-person-wearing-uniform-with-customer-giving-delivery-stock-photo.jpg?s=1024x1024&w=is&k=20&c=h2SIM9PAvHLaMPyv05OPcVNEGB76AbdehMs6LUEfRQU=",
//   },
// ];

// const Investors = () => {
//   return (
//     <section
//       id="investors"
//       className="py-8"
//       style={{ paddingTop: "100px", height: "100vh" }}
//       data-aos="fade-up"
//     >
//       <Container>
//         <h2 className="text-center mb-4">Our Investors</h2>
//         <Row className="justify-content-center">
//           {investors.map((investor, index) => (
//             <Col key={index} xs={6} md={4} className="text-center mb-4">
//               <Image
//                 src={investor.image}
//                 roundedCircle
//                 alt={investor.name}
//                 width={150}
//                 height={150}
//                 className="mb-3 shadow-sm"
//               />
//               <h5>{investor.name}</h5>
//               <p className="text-muted">{investor.role}</p>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Investors;
////////////////////////////////////////////////////////////////////////////
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Investors.css"; // External styles added

const investors = [
  {
    name: "Swami Nanada",
    role: "Founder - India",
    image:
      "https://media.istockphoto.com/id/2204316382/photo/portrait-of-delivery-person-wearing-uniform-with-customer-giving-delivery-stock-photo.jpg?s=1024x1024&w=is&k=20&c=h2SIM9PAvHLaMPyv05OPcVNEGB76AbdehMs6LUEfRQU=",
  },
  {
    name: "SANTOO",
    role: "Ruler - India",
    image:
      "https://media.istockphoto.com/id/2204316382/photo/portrait-of-delivery-person-wearing-uniform-with-customer-giving-delivery-stock-photo.jpg?s=1024x1024&w=is&k=20&c=h2SIM9PAvHLaMPyv05OPcVNEGB76AbdehMs6LUEfRQU=",
  },
  {
    name: "Krishan",
    role: "Manager - India",
    image:
      "https://media.istockphoto.com/id/2204316382/photo/portrait-of-delivery-person-wearing-uniform-with-customer-giving-delivery-stock-photo.jpg?s=1024x1024&w=is&k=20&c=h2SIM9PAvHLaMPyv05OPcVNEGB76AbdehMs6LUEfRQU=",
  },
];

const Investors = () => {
  return (
    <section id="investors" className="investors-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Our Investors</h2>
        <Row className="justify-content-center">
          {investors.map((investor, index) => (
            <Col key={index} xs={6} md={4} className="text-center mb-4">
              <div className="investor-card">
                <Image
                  src={investor.image}
                  roundedCircle
                  alt={investor.name}
                  width={150}
                  height={150}
                  className="investor-image mb-3"
                />
                <h5>{investor.name}</h5>
                <p className="text-muted">{investor.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Investors;
