// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const services = [
//   {
//     title: "Web & Mobile App Development",
//     description: "Custom-built digital products tailored to business needs.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "AI & ML Solutions",
//     description:
//       "Intelligent systems that drive automation, insights, and growth.",
//     image:
//       "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Embedded & IoT Systems",
//     description:
//       "Seamless connectivity for smarter homes, cities, and devices.",
//     image:
//       "https://images.unsplash.com/photo-1717444308827-d0f206a4de1e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Smart Infrastructure",
//     description:
//       "Integrated solutions for smart architecture and urban planning.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1675359655447-74be08c94108?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "AgriTech Solutions",
//     description: "Tech-driven agriculture innovations for farming ecosystems.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661962971074-1554649d40d5?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Business Consulting",
//     description:
//       "Expert guidance to help businesses scale with strategic clarity.",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];
// const businessServices = [
//   {
//     title: "Business Analysis",
//     description:
//       "Data-driven insights to evaluate performance and identify opportunities.",
//     image:
//       "https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=1024x1024&w=is&k=20&c=-xbFG0w2X_ck1VUHnupztZdT86xOopFAc-y0fr2j13A=",
//   },
//   {
//     title: "Strategic Business Planning",
//     description:
//       "Structured planning to define goals and create growth pathways.",
//     image:
//       "https://media.istockphoto.com/id/1405279677/photo/close-up-of-people-pointing-to-a-graph-with-data.jpg?s=1024x1024&w=is&k=20&c=IUP5cjK_7b-ZUNGyJQffIZVXEEcMerxpZCCwhgwTx-g=",
//   },
//   {
//     title: "Problem Solving & Consulting",
//     description: "Overcome business challenges with actionable strategies.",
//     image:
//       "https://media.istockphoto.com/id/2156387160/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.jpg?s=1024x1024&w=is&k=20&c=tEK19eAzzGxgBSnK7XSwjOR6JdnLqh4tni-mNqdYm7M=",
//   },
//   {
//     title: "Management Advisory Services",
//     description:
//       "Optimize operations, teams, and resources for maximum efficiency.",
//     image:
//       "https://media.istockphoto.com/id/2176139926/photo/indian-business-woman-team-leader-show-growth-chart-ideas-whiteboard-discuss-market-graph.jpg?s=1024x1024&w=is&k=20&c=5auK_N01llnnViT1R8otIV6AsnBSXrqvvzBs6Pky8qw=",
//   },
//   {
//     title: "Marketing & Branding Support",
//     description:
//       "Position your brand to reach the right audience with compelling strategies.",
//     image:
//       "https://media.istockphoto.com/id/886772948/photo/customer-diagram.jpg?s=1024x1024&w=is&k=20&c=XD--YowkGN7yG-TVCLDs7jage-njQkg7yCnR9IsoeIU=",
//   },
// ];

// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="py-8"
//       style={{ paddingTop: "100px" }}
//       data-aos="fade-up"
//     >
//       <Container>
//         <h2 className="text-center mb-4">Our Services</h2>
//         <Row>
//           <h3> Technology Services :</h3>

//           {services.map((service, index) => (
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
//         <Row>
//           <h3>Business Consulting Services :</h3>

//           {businessServices.map((service, index) => (
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

// export default Services;
///////////////////////////////////////////////////////////////////////////////
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css"; // ⬅️ Custom CSS here

const services = [
  {
    title: "Web & Mobile App Development",
    description: "Custom-built digital products tailored to business needs.",
    image:
      "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI & ML Solutions",
    description:
      "Intelligent systems that drive automation, insights, and growth.",
    image:
      "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Embedded & IoT Systems",
    description:
      "Seamless connectivity for smarter homes, cities, and devices.",
    image:
      "https://images.unsplash.com/photo-1717444308827-d0f206a4de1e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Smart Infrastructure",
    description:
      "Integrated solutions for smart architecture and urban planning.",
    image:
      "https://plus.unsplash.com/premium_photo-1675359655447-74be08c94108?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AgriTech Solutions",
    description: "Tech-driven agriculture innovations for farming ecosystems.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962971074-1554649d40d5?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Business Consulting",
    description:
      "Expert guidance to help businesses scale with strategic clarity.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const businessServices = [
  {
    title: "Business Analysis",
    description:
      "Data-driven insights to evaluate performance and identify opportunities.",
    image:
      "https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=1024x1024&w=is&k=20&c=-xbFG0w2X_ck1VUHnupztZdT86xOopFAc-y0fr2j13A=",
  },
  {
    title: "Strategic Business Planning",
    description:
      "Structured planning to define goals and create growth pathways.",
    image:
      "https://media.istockphoto.com/id/1405279677/photo/close-up-of-people-pointing-to-a-graph-with-data.jpg?s=1024x1024&w=is&k=20&c=IUP5cjK_7b-ZUNGyJQffIZVXEEcMerxpZCCwhgwTx-g=",
  },
  {
    title: "Problem Solving & Consulting",
    description: "Overcome business challenges with actionable strategies.",
    image:
      "https://media.istockphoto.com/id/2156387160/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.jpg?s=1024x1024&w=is&k=20&c=tEK19eAzzGxgBSnK7XSwjOR6JdnLqh4tni-mNqdYm7M=",
  },
  {
    title: "Management Advisory Services",
    description:
      "Optimize operations, teams, and resources for maximum efficiency.",
    image:
      "https://media.istockphoto.com/id/2176139926/photo/indian-business-woman-team-leader-show-growth-chart-ideas-whiteboard-discuss-market-graph.jpg?s=1024x1024&w=is&k=20&c=5auK_N01llnnViT1R8otIV6AsnBSXrqvvzBs6Pky8qw=",
  },
  {
    title: "Marketing & Branding Support",
    description:
      "Position your brand to reach the right audience with compelling strategies.",
    image:
      "https://media.istockphoto.com/id/886772948/photo/customer-diagram.jpg?s=1024x1024&w=is&k=20&c=XD--YowkGN7yG-TVCLDs7jage-njQkg7yCnR9IsoeIU=",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Our Services</h2>

        <Row>
          <h3 className="sub-heading">Technology Services :</h3>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="service-card">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <h3 className="sub-heading">Business Consulting Services :</h3>
          {businessServices.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="service-card">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="service-img"
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

export default Services;
