import { useContext } from "react";
import Card from "react-bootstrap/Card";

// Context
import { store } from "../../context/store";
import { SET_CURRENT_PROJECT } from "../../context/types";

const ProjectViewer = () => {
  //const { project } = useContext(store);
  const {
     // @ts-ignore
    state: { project },
  } = useContext(store);

  return (
    <Card
      style={{
        width: "100%",
        marginRight: 10,
        marginTop: 10,
        maxHeight: "60vh",
      }}
    >
      <Card.Title style={{ fontSize: "3em", marginLeft: 10 }}>
        {project.title}
      </Card.Title>
      <Card.Img
        style={{ height: "60vh", objectFit: "cover",  }}
        src={project.imageURL}
      />
      <Card.Body style={{ paddingLeft: 10 }}>{project.description}</Card.Body>
    </Card>
  );
};

export default ProjectViewer;
