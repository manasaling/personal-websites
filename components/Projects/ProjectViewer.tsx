import { useContext } from "react";
import Card from "react-bootstrap/Card";

// Context
import { store } from "../../context/store";
import { SET_CURRENT_PROJECT } from "../../context/types";

const ProjectViewer = () => {
  //const { project } = useContext(store);
  const {
    state: { project },
  } = useContext(store);

  return (
    <Card style={{ width: "70%", marginRight: 10 }}>
      <Card.Title style={{ fontSize: "3em" }}>{project.title}</Card.Title>
      <Card.Img
        style={{ height: "300px", objectFit: "cover" }}
        src={project.imageURL}
      />
      <Card.Body style={{ paddingLeft: "0", paddingRight: "0" }}>
        {project.description}
      </Card.Body>
    </Card>
  );
};

export default ProjectViewer;
