import "./App.css";
import Shopping from "../src/Pages/Shopping";
import CartDB from "./DataStore/CartDB";

function App() {
  const pm = new CartDB("abc");

  return <Shopping pm={pm}></Shopping>;
}

export default App;
