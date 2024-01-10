import React from "react";
import { IProject } from "../../models/projects.models";
import { Link } from "react-router-dom";

interface IProps {
  project: IProject;
}

const ProjectCard: React.FC<IProps> = ({ project }) => {
  return (
    <li className="bg-[#2d343f] rounded-[28px] p-6 md:p-10 space-y-6 w-full max-w-[35rem] h-[38rem] md:h-[50rem] list-none overflow-hidden hover:cursor-pointer relative">
      <Link to={`/projects/${project.id}`} className="space-y-6 w-full h-full">
        <div className="flex justify-end">
          <ul className="list-none list-inside flex space-x-4">
            {project?.stack?.map((el, idx) => (
              <li
                key={idx}
                className="p-2 md:p-4 bg-[#5d6c83] rounded-[10px] text-sm md:text-normal"
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-2 items-center">
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            src={project.logo}
            alt={`${project.title} logo`}
          />
          <p className="text-xl md:text-2xl font-medium">{project.name}</p>
        </div>
        <p className="text-2xl md:text-4xl font-medium">{project.title}</p>
        <img
          className="absolute bottom-0 left-0 h-[20rem] md:h-[30rem] w-full object-center object-cover rounded-b-[28px] transition-transform transform scale-100 group-hover:scale-105 duration-300"
          src={project.background_image}
          alt="background"
        />
      </Link>
    </li>
  );
};

export default ProjectCard;
