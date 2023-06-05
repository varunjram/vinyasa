import "./App.css";
import Navigation from "./components/Navigation";
import Routing from "./components/Routing";
import "primereact/resources/themes/luna-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";

function App() {
  return (
    <>
      <Navigation />
      <Routing />
    </>
  );
}

export default App;
