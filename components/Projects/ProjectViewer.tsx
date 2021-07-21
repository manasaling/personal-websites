import Card from "react-bootstrap/Card";

import { useAppContext } from "../../context/state";

const ProjectViewer = () => {
  const context = useAppContext();

  const project = context.project;

  return (
    <Card style={{ width: "70%", padding: "2em" }}> 
      <Card.Title style={{ fontSize: "3em"}}>{project.title}</Card.Title>
      <Card.Img style={{ height: "300px", objectFit: "cover"}}src={project.image} />
      <Card.Body style={{ paddingLeft: "0", paddingRight: "0"}}>{project.description}</Card.Body>
    </Card>
  );
};

export default ProjectViewer;
