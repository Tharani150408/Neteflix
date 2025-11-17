import React from "react";
import { useNavigate } from "react-router-dom";
import Neteflix from "/src/assets/Neteflix.webp";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${Neteflix})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <button
        onClick={() => navigate("/N")}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "12px 28px",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
         marginTop:"400px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Home;
