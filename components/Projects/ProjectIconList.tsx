import ProjectIcon from "./ProjectIcon";

const tmp_project_list = [
  {
    title: "Test Title",
    description: "hihihihihi",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png",
  },
];

const ProjectIconList = () => {
  return (
    <div style={{ width: 200 }}>
      {tmp_project_list.map((proj) => {
        return (
          <ProjectIcon
            title={proj.title}
            description={proj.description}
            imageURL={proj.imageURL}
          />
        );
      })}
    </div>
  );
};

export default ProjectIconList;
