import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const rndTechnologies = [
  {
    title: "IT & Software Engineering",
    description:
      "We innovate in IT and software to build sustainable, real-world digital solutions.",
    image:
      "https://images.unsplash.com/photo-1637563680361-3e7ee7599318?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Empowering automation and predictive tech for smarter decision-making.",
    image:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Agriculture & Rural Development",
    description:
      "Revolutionizing agri-tech and sustainable practices for a food-secure future.",
    image:
      "https://media.istockphoto.com/id/1154958041/photo/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-cultivated-agricultural-field.jpg?s=1024x1024&w=is&k=20&c=N7MgagA2hIhIcWFxdFoHXCX8Ez46dFJpzmwWAT4i678=",
  },
  {
    title: "Architecture & Smart Systems",
    description:
      "Designing tech-integrated, sustainable infrastructure for future-ready spaces.",
    image:
      "https://media.istockphoto.com/id/1319407056/photo/modern-villa-exterior-with-plexus-smart-home-concept-control-with-mobile-app-and-technology.jpg?s=1024x1024&w=is&k=20&c=73Y_2U294o4zKet2ByxLXXLOB_NvTCDRQr5G2YFNOxs=",
  },
  {
    title: "Finance & Marketing",
    description:
      "Transforming financial systems and marketing strategies with digital intelligence.",
    image:
      "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=1024x1024&w=is&k=20&c=JZprgGDQ8xqa6iu0fyKJfKOlAvae0w9U-AdHeCT2kg4=",
  },
  {
    title: "Business Statistics & Data Science",
    description:
      "Uncovering insights to optimize operations and drive growth through data.",
    image:
      "https://media.istockphoto.com/id/2193247029/photo/business-team-analyzing-interactive-digital-dashboards-with-data-visualizations.jpg?s=1024x1024&w=is&k=20&c=P78tpz5vzcieYNBwVaiiBjG4s_8TwZ6W6ItGGRnnUdE=",
  },
];

const RnDTechnologies = () => {
  return (
    <section
      id="rnd"
      className="py-8"
      style={{ paddingTop: "100px" }}
      data-aos="fade-up"
    >
      <Container>
        <h2 className="text-center mb-4">R&D Technologies</h2>
        <Row>
          {rndTechnologies.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  style={{ height: "40vh" }}
                  src={service.image}
                  alt={service.title}
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

export default RnDTechnologies;
