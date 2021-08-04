// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import ProjectIconList from "../components/Projects/ProjectIconList";
import ProjectViewer from "../components/Projects/ProjectViewer";



export default function Projects() {
  return (
    <div  >
      <Container  fluid>
        <Row>
          <Col lg={2}>
            <ProjectIconList />
          </Col>
          <Col  lg={10}>
            <ProjectViewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
