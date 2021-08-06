import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import ProjectIcon from "./ProjectIcon";
import { useMediaQuery } from "../../util/useMediaQuery";
import { tmp_project_list } from "../../constants/userInfo";

const ProjectIconList = () => {
  const smallScreen = useMediaQuery("(max-width: 990px)");

  const projectsNormal = (
    <Container
      style={{
        flex: 1,
        display: "grid",
        paddingLeft: 10,
        overflowY: "auto",
        overflowX: "hidden",
        height: "90vh",
      }}
    >
      {React.Children.toArray(
        tmp_project_list.map((proj) => {
          return (
            <Col xs style={{ marginTop: 10 }}>
              <ProjectIcon
                title={proj.title}
                description={proj.description}
                imageURL={proj.imageURL}
              />
            </Col>
          );
        })
      )}
    </Container>
  );

  const projectsSmall = (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {React.Children.toArray(
        tmp_project_list.map((proj) => {
          return (
            <div style={{ minWidth: 300 }}>
              <ProjectIcon
                title={proj.title}
                description={proj.description}
                imageURL={proj.imageURL}
              />
            </div>
          );
        })
      )}
    </div>
  );

  if (!smallScreen) return projectsNormal;
  else return projectsSmall;
};

export default ProjectIconList;
