import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";

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
          <Chips />
        </Route>
        <Route path="/jerky" exact>
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
