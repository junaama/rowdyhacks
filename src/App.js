import "./App.css";
import { Switch, Route } from "react-router";
import Home from "./components/Dashboard/Home";
import Devices from "./components/Devices";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/devices/[:id]" component={Devices} />
      </Switch>
    </div>
  );
}

export default App;
