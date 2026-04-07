import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Neteflix from "/src/assets/Neteflix.webp";

function Home() {
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = () => {
     navigate("/N");
  };

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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "12px 28px",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "400px",
        }}
      >
        Login
      </button>

      {message && <h1>{message}</h1>} 
    </div>
  );
}

export default Home;

