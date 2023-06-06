import "./App.css";
import Navigation from "./components/Navigation";
import Routing from "./components/Routing";
import "primereact/resources/themes/luna-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-column min-h-screen">
      <div className="sticky top-0 z-5">
        <Navigation />
      </div>
      <div className="flex-grow-1">
        <Routing />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
