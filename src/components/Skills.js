import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from 'react-icons/fa';
import { DiNodejs, DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoRedux } from 'react-icons/bi';

const Skills = () => {
  return (
    <section className="skills_wrapper" id="skills_id">
      <h1 className="skills_label">Skills & Technologies</h1>
      <div className="skills">
          <div className="skills_element">
            <FaHtml5 className="html"/>
            <div>HTML</div>
          </div>
          <div className="skills_element">      
            <IoLogoCss3/>
            <div>CSS</div>
          </div>
          <div className="skills_element">
            <SiJavascript/>
            <div>JavaScript</div>
          </div>
          <div className="skills_element">
            <FaReact/>
            <div>React</div>
          </div>
          <div className="skills_element">
            <BiLogoRedux/>
            <div>Redux</div>
          </div>
          <div className="skills_element">
            <AiFillGithub/>
            <div>GitHub</div>
          </div>
          <div className="skills_element">
            <DiNodejs/>
            <div>Node</div>
          </div>
          <div className="skills_element">
            <TbSql/>
            <div>SQL</div>
          </div>
          <div className="skills_element">
            <DiMongodb/>
            <div>MongoDB</div>
          </div>
      </div>
    </section>
  )
}

export default Skills