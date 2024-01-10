import React from "react";
import { ISkill } from "../../models/skill.models";

interface IProps {
  skill: ISkill;
}

const SkillCard: React.FC<IProps> = ({ skill }) => {
  return (
    <div className="bg-[#2d343f] rounded-[28px] px-7 md:px-12 xl:px-16 h-[30rem] mr-4 md:mr-6 xl:mr-10 space-y-6 flex flex-col justify-center">
      <div className="w-[70px] h-[70px] rounded-full bg-[#075fe4] flex items-center justify-center">
        <skill.icon className="text-4xl" />
      </div>
      <div className="space-y-6">
        <h4 className="text-xl md:text-2xl lg:text-4xl text-white font-medium">
          {skill.name}
        </h4>
        <p className="text-[#c3cad5] text-sm">{skill.description}</p>
      </div>
      <div className="bg-white w-[4rem] h-2" />
    </div>
  );
};

export default SkillCard;
