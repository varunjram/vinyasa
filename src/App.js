import "./App.css";
import logo from "./logo.png";
import Navigation from "./components/Navigation";
import Routing from "./components/Routing";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import "/node_modules/primeflex/primeflex.css";

function App() {
  return (
    <>
      <>
        <Navigation />
        <Routing />
      </>
    </>
  );
}

export default App;
