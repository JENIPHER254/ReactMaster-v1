import "./App.css";
import Demo from "./components/HierComponentsDemo";
import FunctionComp from "./components/FunctionalComponents";
import ClassComp from "./components/ClassComponent";
import {
  StudentName,
  StudentAge,
  StudentGrade,
} from "./components/NamedComponent";
import { Click, Hover, cl } from "./components/HireOrderComponents";
import ParentComp from "./components/ParentComponent";
import ClassProps from "./components/ClassProps";
import FunctionProps from "./components/FunctionalProps";
import SatesDemo from "./components/States";

function App() {
  return (
    <div>
      <h1>Hello Welcome to React-Master</h1>
      <FunctionComp></FunctionComp>
      <ClassComp></ClassComp>
      <StudentName></StudentName>
      <StudentAge></StudentAge>
      <StudentGrade></StudentGrade>
      <Click></Click>
      <Hover></Hover>
      <Demo></Demo>
      <ParentComp></ParentComp>
      <ClassProps name="learner 1" course="React" />
      <ClassProps name="learner 2" course="Flutter">
        <div>
          <h4>Building Skills</h4>
          <p>This is such an amazing experience</p>
        </div>
      </ClassProps>
      <FunctionProps name="learner 3" course="HTML" />
      <SatesDemo></SatesDemo>
    </div>
  );
}

export default App;
