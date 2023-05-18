import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
