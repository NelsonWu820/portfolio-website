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
    <section class="skills_wrapper">
      <h1 class="skills_label">Skills & Tools</h1>
      <div class="skills w3-container">
              <div>
                <FaHtml5 class="html"/>
                <div>HTML</div>
              </div>
              <div>      
                <IoLogoCss3/>
                <div>CSS</div>
              </div>
              <div>
                <SiJavascript/>
                <div>JavaScript</div>
              </div>
              <div>
                <FaReact/>
                <div>React</div>
              </div>
              <div>
                <AiFillGithub/>
                <div>GitHub</div>
              </div>
              <div>
                <DiNodejs/>
                <div>Node</div>
              </div>
              <div>
                <TbSql/>
                <div>SQL</div>
              </div>
              <div>
                <DiMongodb/>
                <div>MongoDB</div>
              </div>
        </Table>
      </div>
    </section>
  )
}

export default Skills