import Background from "./components/Background";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Background />
      <div style={{
        position: "relative",
        color: "#00ffea",
        textAlign: "center",
        paddingTop: "40vh",
        fontSize: "40px",
        fontFamily: "monospace",
        textShadow: "0 0 15px #00ffea"
      }}>
        Hello, I'm a Full-Stack Dev
      </div>
    </div>
  );
}

export default App;
