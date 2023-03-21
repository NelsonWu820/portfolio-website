import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from 'react-icons/fa';
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <h1>Skills & Tools</h1>
      <div class="skills w3-container">
        <Table>
          <Tbody>
            <Tr>
              <Td>
                <FaHtml5 class="html"/>
                <div>HTML</div>
              </Td>
              <Td>      
                <IoLogoCss3/>
                <div>CSS</div>
              </Td>
              <Td>
                <SiJavascript/>
                <div>JavaScript</div>
              </Td>
              <Td>
                <FaReact/>
                <div>React</div>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <AiFillGithub/>
                <div>GitHub</div>
              </Td>
              <Td>
                <DiNodejs/>
                <div>Node</div>
              </Td>
              <Td>
                <TbSql/>
                <div>SQL</div>
              </Td>
              <Td>
                <DiMongodb/>
                <div>MongoDB</div>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </section>
  )
}

export default Skills