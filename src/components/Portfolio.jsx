// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const portfolioItems = [
//   {
//     title: "G-Shop",
//     description:
//       "Connects farmers and shopkeepers with customers, ensuring fair prices, fast delivery, and quality products.",
//     image: "https://source.unsplash.com/400x300/?farmers,market",
//   },
//   {
//     title: "RytoApp",
//     description:
//       "AI-powered platform for jobs, hiring, and freelancing, making professional connections smart and seamless.",
//     image: "https://source.unsplash.com/400x300/?freelancer,ai",
//   },
//   {
//     title: "Search.it",
//     description:
//       "Smart search engine to help users create websites, explore content, and manage online businesses.",
//     image: "https://source.unsplash.com/400x300/?search,engine",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section
//       id="portfolio"
//       className="py-8"
//       style={{ paddingTop: "100px", height: "100vh" }}
//       data-aos="fade-up"
//     >
//       <Container>
//         <h2 className="text-center mb-4">Our Portfolio</h2>
//         <Row>
//           {portfolioItems.map((service, index) => (
//             <Col key={index} md={4} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 <Card.Img
//                   variant="top"
//                   style={{ height: "40vh" }}
//                   src={service.image}
//                   alt={service.title}
//                 />
//                 <Card.Body>
//                   <Card.Title>{service.title}</Card.Title>
//                   <Card.Text>{service.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Portfolio;
////////////////////////////////////////////////////////////////////////////
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Portfolio.css"; // ⬅️ Custom styles added

const portfolioItems = [
  {
    title: "G-Shop",
    description:
      "Connects farmers and shopkeepers with customers, ensuring fair prices, fast delivery, and quality products.",
    image: "https://source.unsplash.com/400x300/?farmers,market",
  },
  {
    title: "RytoApp",
    description:
      "AI-powered platform for jobs, hiring, and freelancing, making professional connections smart and seamless.",
    image: "https://source.unsplash.com/400x300/?freelancer,ai",
  },
  {
    title: "Search.it",
    description:
      "Smart search engine to help users create websites, explore content, and manage online businesses.",
    image: "https://source.unsplash.com/400x300/?search,engine",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Our Portfolio</h2>
        <Row>
          {portfolioItems.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="portfolio-card">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="portfolio-img"
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
