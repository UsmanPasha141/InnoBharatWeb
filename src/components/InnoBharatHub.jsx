// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const hubCards = [
//   {
//     title: "Collaborative Co-Development",
//     description:
//       "Collaborators work together to co-develop innovative projects and manage business operations.",
//     image:
//       "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Content, Marketing & Outreach",
//     description:
//       "Teams create compelling content, pre-user acquisition strategies, and public communication.",
//     image:
//       "https://images.unsplash.com/photo-1712903276026-9a2381d3b464?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Resource & Equity Distribution",
//     description:
//       "Shared infrastructure, resources, and equity models ensure fairness and mutual growth.",
//     image:
//       "https://media.istockphoto.com/id/899471458/photo/purchase-agreement-for-new-house.jpg?s=1024x1024&w=is&k=20&c=QNNSNzrXTkokAVytv27sGNKJzwx_bJo2Q7VKCi2rv60=",
//   },
// ];

// const InnoBharatHub = () => {
//   return (
//     <section
//       id="hub"
//       className="py-8"
//       style={{ paddingTop: "100px" }}
//       data-aos="fade-up"
//     >
//       <Container>
//         <h2 className="text-center mb-4">Inno-Bharat-Hub </h2>
//         <p>
//           Inno-Bharat-Hub is a community-driven, open innovation ecosystem
//           launched and managed by M SANTOO! It brings together developers,
//           researchers, entrepreneurs, and technology enthusiasts to co-create
//           next-generation solutions for India's and the world's most pressing
//           challenges
//         </p>
//         <h2> Vision : </h2>
//         <p>
//           To become a catalyst for innovation by enabling inclusive,
//           collaborative, and sustainable R&D and business development across
//           diverse sectors
//         </p>
//         <Row>
//           {hubCards.map((service, index) => (
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
//         <h3>How It Works?</h3>
//         <div>
//           <h4>1. Project Identification :</h4>
//           <p>
//             Ideas or project proposals are initiated by collaborators or core
//             teams — either from their own ventures or client requirements. Once
//             proposed, all community members collectively evaluate the
//             feasibility, potential impact, and strategic alignment of the
//             project.
//           </p>
//           <h4>2. Team Formation :</h4>
//           <p>
//             After thorough analysis, collaborators form dedicated development
//             teams or assign the project to a suitable venture within the
//             ecosystem. Team members are selected based on expertise, interest,
//             and availability to ensure effective execution.
//           </p>
//           <h4>3. Co-Development & Research :</h4>
//           <p>
//             Community members work together to design, build, and refine the
//             solution by contributing their skills in technology, research, and
//             management—ensuring the final product is high-quality, scalable, and
//             impactful.
//           </p>
//           <h4>4. Deployment & Marketing :</h4>
//           <p>
//             Once the solution is validated, it is launched into the market with
//             the unified support of the Inno-Bharat-Hub community — including
//             marketing, outreach, and user onboarding.
//           </p>
//           <h4> 5. Revenue & Equity Sharing :</h4>
//           <p>
//             All contributors and core team members involved in the project
//             receive a fair, predefined share of revenue, equity, or commission,
//             based on their role and contribution, ensuring shared ownership and
//             mutual growth. Who Can Join? Visionary Developers Innovators &
//             Researchers Early-stage Startups Business Consultants & Mentors
//             Marketing & Content Creators Investors & Accelerators Why Join?
//             Access to innovative projects and collaboration opportunities
//             Co-ownership and shared success National-level networking with
//             like-minded changemakers
//           </p>
//           <h4>Who Can Join?</h4>
//           <h6>Visionary Developers</h6>
//           <h6>Innovators & Researchers</h6>
//           <h6>Early-stage Startups</h6>
//           <h6>Business Consultants & Mentors</h6>
//           <h6>Marketing & Content Creators</h6>
//           <h6>Investors & Accelerators</h6>

//           <h4> Why Join?</h4>
//           <h6>Access to innovative projects and collaboration opportunities</h6>
//           <h6> Co-ownership and shared success</h6>
//           <h6>National-level networking with like-minded changemakers</h6>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default InnoBharatHub;
//////////////////////////////////////////////////////////////////
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./InnoBharatHub.css"; // ⬅️ Include styles

const hubCards = [
  {
    title: "Collaborative Co-Development",
    description:
      "Collaborators work together to co-develop innovative projects and manage business operations.",
    image:
      "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Content, Marketing & Outreach",
    description:
      "Teams create compelling content, pre-user acquisition strategies, and public communication.",
    image:
      "https://images.unsplash.com/photo-1712903276026-9a2381d3b464?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Resource & Equity Distribution",
    description:
      "Shared infrastructure, resources, and equity models ensure fairness and mutual growth.",
    image:
      "https://media.istockphoto.com/id/899471458/photo/purchase-agreement-for-new-house.jpg?s=1024x1024&w=is&k=20&c=QNNSNzrXTkokAVytv27sGNKJzwx_bJo2Q7VKCi2rv60=",
  },
];

const InnoBharatHub = () => {
  return (
    <section id="hub" className="hub-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Inno-Bharat-Hub</h2>

        <p className="intro-text">
          Inno-Bharat-Hub is a community-driven, open innovation ecosystem
          launched and managed by M SANTOO!...
        </p>

        <h3 className="sub-heading">Vision:</h3>
        <p className="vision-text">
          To become a catalyst for innovation by enabling inclusive,
          collaborative...
        </p>

        <Row>
          {hubCards.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="hub-card">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="hub-img"
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="sub-heading">How It Works?</h3>
        <div className="how-it-works">
          <h4>1. Project Identification :</h4>
          <p>Ideas or project proposals are initiated by collaborators...</p>
          <h4>2. Team Formation :</h4>
          <p>
            After thorough analysis, collaborators form dedicated development
            teams...
          </p>
          <h4>3. Co-Development & Research :</h4>
          <p>Community members work together to design, build, and refine...</p>
          <h4>4. Deployment & Marketing :</h4>
          <p>
            Once the solution is validated, it is launched with support from the
            community...
          </p>
          <h4>5. Revenue & Equity Sharing :</h4>
          <p>
            All contributors receive a fair, predefined share based on their
            role and contribution...
          </p>

          <h4>Who Can Join?</h4>
          <ul className="join-list">
            <li>Visionary Developers</li>
            <li>Innovators & Researchers</li>
            <li>Early-stage Startups</li>
            <li>Business Consultants & Mentors</li>
            <li>Marketing & Content Creators</li>
            <li>Investors & Accelerators</li>
          </ul>

          <h4>Why Join?</h4>
          <ul className="why-join-list">
            <li>
              Access to innovative projects and collaboration opportunities
            </li>
            <li>Co-ownership and shared success</li>
            <li>National-level networking with changemakers</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default InnoBharatHub;
