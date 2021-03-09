import './App.css';
import LifeCyclee from "./components/LifeCycle";
import ErrorDemo from "./errorBoundary/ErrorDemo"
import CounterDemo from "./errorBoundary/CounterErrorDemo"
import ErrorBoundaries from "./errorBoundary/ErrorBoundaries"
import Destructering from '../../react-d/src/components/Destructering';

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

      <Destructering data={{weapon:'pistol',vehicle:'ship'}}/>
      
    </div>
  );
}

export default App;
