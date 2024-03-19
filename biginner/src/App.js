import "./App.css";
import FunctionComp from "./components/FunctionalComponents";
import ClassComp from "./components/ClassComponent";
import { StudentName, StudentAge, StudentGrade } from "./components/NamedComponent";
import { Click, Hover } from "./components/HireOrderComponents";

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
    </div>
  );
}

export default App;
