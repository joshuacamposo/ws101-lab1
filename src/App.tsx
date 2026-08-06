import { add, capitalize } from "./utils";

function App() {
  const result = add(10, 5);
  const name = capitalize("juan");

  return (
    <div>
      <p>10 + 5 = {result}</p>
      <p>Capitalized: {name}</p>
    </div>
  );
}

export default App;