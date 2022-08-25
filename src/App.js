import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Jerky from "./Jerky";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route  path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
        <Route path="/jerky" exact>
          <Jerky />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
