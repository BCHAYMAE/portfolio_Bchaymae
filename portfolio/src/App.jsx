import Background from "./components/Background";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Background />
      <NavBar/>
      <Hero />  
    </div>
  );
}

export default App;
