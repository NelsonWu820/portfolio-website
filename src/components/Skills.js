import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from 'react-icons/fa';
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Skills = () => {
  return (
    <div class="skills">
      <h1>Skills</h1>
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
              <img src="" class="skills_express"/>
              <div>Express</div>
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
  )
}

export default Skills