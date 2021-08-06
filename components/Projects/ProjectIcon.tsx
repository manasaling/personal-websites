// React
import { useContext } from "react";

// Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Context
import { store } from "../../context/store";
import { SET_CURRENT_PROJECT } from "../../context/types";

type ProjectIconProps = {
  title: string;
  description: string;
  imageURL: string;
  dispatch: Function;
};

const ProjectIcon = ({ title, description, imageURL }: ProjectIconProps) => {
  // @ts-ignore
  const { dispatch } = useContext(store);

  const handleImageClicked = () => {
    console.log("clicked");
    dispatch({
      type: SET_CURRENT_PROJECT,
      payload: { title, description, imageURL },
    });
    console.log(title, description, imageURL);
  };

  return (
    <Card>
      <div
        style={{ height: 100, overflow: "hidden", cursor: "pointer" }}
        onClick={handleImageClicked}
      >
        <Card.Img variant="top" src={imageURL} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectIcon;
