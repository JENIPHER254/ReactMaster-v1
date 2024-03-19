import "./App.css";
import Demo from "./components/HierComponentsDemo";
import FunctionComp from "./components/FunctionalComponents";
import ClassComp from "./components/ClassComponent";
import { StudentName, StudentAge, StudentGrade } from "./components/NamedComponent";
import { Click, Hover ,cl} from "./components/HireOrderComponents";
import ParentComp from "./components/ParentComponent";

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
    </div>
  );
}

export default App;
