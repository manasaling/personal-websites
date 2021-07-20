import Card from "react-bootstrap/Card";

import { useAppContext } from "../../context/state";

const ProjectViewer = () => {
  const context = useAppContext();

  const project = context.project;

  return (
    <Card style={{ width: "70%" }}>
      <Card.Title>{project.title}</Card.Title>
      <Card.Body>{project.description}</Card.Body>
      <Card.Img src={project.image} />
    </Card>
  );
};

export default ProjectViewer;
