import "./App.css";
import { DisplayTable } from "./components/table";

// interface Test {
//   age: number;
//   name: string;
// }

// function Identity<Type>(arg: Type) {
//   console.log(arg);
// }

// let output = Identity<Test>({ age: 24, name: "Mikkel" });
// let output2 = Identity({ age: 24, name: "Mikkel", age2: 24, name2: "Mikkel" });

function App() {
  return <DisplayTable></DisplayTable>;
}

export default App;
