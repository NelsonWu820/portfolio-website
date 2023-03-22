import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from 'react-icons/fa';
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

const Skills = () => {
  return (
    <section class="skills_wrapper" id="skills_id">
      <h1 class="skills_label">Skills & Technologies</h1>
      <div class="skills">
          <div class="skills_element">
            <FaHtml5 class="html"/>
            <div>HTML</div>
          </div>
          <div class="skills_element">      
            <IoLogoCss3/>
            <div>CSS</div>
          </div>
          <div class="skills_element">
            <SiJavascript/>
            <div>JavaScript</div>
          </div>
          <div class="skills_element">
            <FaReact/>
            <div>React</div>
          </div>
          <div class="skills_element">
            <AiFillGithub/>
            <div>GitHub</div>
          </div>
          <div class="skills_element">
            <DiNodejs/>
            <div>Node</div>
          </div>
          <div class="skills_element">
            <TbSql/>
            <div>SQL</div>
          </div>
          <div class="skills_element">
            <DiMongodb/>
            <div>MongoDB</div>
          </div>
      </div>
    </section>
  )
}

export default Skills