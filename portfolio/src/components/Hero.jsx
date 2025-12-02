import legoVideo from "../assets/lego.mp4";
import "./Hero.css"; 

export default function Hero() {
  return (
    <div className="intro-wrapper">
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}>
      <video 
        src={legoVideo}
        autoPlay
        loop
        muted
         style={{
      width: "150px",
      position: "absolute",
      top: "140px",
      left: "100px",
      animation: "moveLeft 4s ease-in-out infinite",
      border: "3px solid #ffea4a",          
      borderRadius: "10px",                 
      boxShadow: "0 10px 20px #aaff4a"
        }}
      />
     <div className="intro-block">
      <h1>BELLAHCENE CHAYMAE</h1>
      <p>
        A Full-Stack Developer who loves turning concepts into real experiences. 
        Curious, creative, and committed, I strive to make every project functional, clear, and enjoyable.
      </p>
      <button onClick={() => window.location.href = "mailto:bellahcene.chaymae@gmail.com"}>
        Lets Work Together
      </button>
    </div>
      </div>
      </div>
  );
}
