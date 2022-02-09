import "./App.css";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import ChildToParent from "./Hooks/ChildToParent";
import UseState from "./Hooks/UseState";

function App() {
  return (
    <div className="App">
      {/* <ChildToParent /> */}
      <ClickCounter />
      <HoverCounter/>
    </div>
  );
}

export default App;
