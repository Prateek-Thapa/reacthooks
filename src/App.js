import "./App.css";
import TextForm from "./components/TextForm"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
        <NavBar />
      <div className="container mt-5">
        <TextForm heading="enter the text to convert"/>
      </div>
    </>
  );
}

export default App;