// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import ProjectIconList from "../components/Projects/ProjectIconList";
import ProjectViewer from "../components/Projects/ProjectViewer";



export default function Projects() {
  return (
    <div>
      <Container fluid style={{ height: "90vh" }}>
        <Row style={{ maxHeight: "100%" }}>
          <Col lg={2} style={{ maxHeight: "100%" }}>
            <ProjectIconList />
          </Col>
          <Col lg={10} style={{ maxHeight: "100%" }}>
            <ProjectViewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
