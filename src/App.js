import './App.css';
import LifeCyclee from "./components/LifeCycle";
import ErrorDemo from "./errorBoundary/ErrorDemo"
import CounterDemo from "./errorBoundary/CounterErrorDemo"
import ErrorBoundaries from "./errorBoundary/ErrorBoundaries"

function App() {
  return (
    <div className="App">
      <LifeCyclee />
      <hr/>
      <ErrorBoundaries>
      <ErrorDemo name="Jack Sparrow" />
      </ErrorBoundaries>
      <hr/>
      <ErrorBoundaries>
      <CounterDemo/>
      </ErrorBoundaries>
      
    </div>
  );
}

export default App;
