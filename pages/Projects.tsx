// Bootstrap
import Container from "react-bootstrap/Container";

// Components
import ProjectIconList from "../components/Projects/ProjectIconList";
import ProjectViewer from "../components/Projects/ProjectViewer";

export default function Projects() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ProjectIconList />
        <ProjectViewer />
      </div>
    </div>
  );
}
 
