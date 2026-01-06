import axios from "axios";
import { useEffect, useState } from "react";
import type { CloudImgObj } from "../types";
import { NavLink } from "react-router";

const Index = () => {
  const [projects, setProjects] = useState<CloudImgObj[]>([]);

  projects.map((project) => {
    return console.log(project)}
  )

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/images`)
      .then((res) => {
        // console.log(res.data.resources);
        setProjects(res.data.resources);
      })
      .catch((err) => console.error("Error fetching project images:", err));
  }, []);

  return (
    <div>
      <ul>
        {projects.map(
          (project) =>
            project.metadata && (
              <li key={project.public_id}>
                <NavLink to={`/${project.metadata?.text.replace(/ /g, "_")}`} state={{ item: project }}>
                  {project.metadata.text}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Index;
