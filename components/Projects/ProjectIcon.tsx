import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type ProjectIconProps = {
  title: string;
  description: string;
  imageURL: string;
};

const ProjectIcon = ({ title, description, imageURL }: ProjectIconProps) => {
  return (
    <Card
      style={{
        height: "30vh",
      }}
    >
      <Button style={{ overflow: "hidden" }}>
        <Card.Img variant="top" src={imageURL} />
      </Button>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectIcon;
