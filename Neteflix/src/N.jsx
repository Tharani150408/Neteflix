import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Modal.css";


function N() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showModal, setShowModal] = useState(false);
const [welcomeText, setWelcomeText] = useState("");
const navigate = useNavigate();


const handleLogin = () => {
if (username === "Tharani" && password === "Rudhra@15") {
setWelcomeText("Welcome User");
setShowModal(true);


setTimeout(() => {
setShowModal(false);
navigate("/Movies");
}, 3000);


} else if (username === "Thara" && password === "Rudhra") {
setWelcomeText("Welcome Admin");
setShowModal(true);


setTimeout(() => {
setShowModal(false);
navigate("/Movies");
}, 3000);


} else {
alert("Invalid username or password");
}
};


return (
<div className={showModal ? "blur-background" : ""}>
<div className="login-container">
<h2 className="title">Hello</h2>


<input
type="text"
placeholder="Enter Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>


<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>


<button onClick={handleLogin}>Login</button>
</div>


{showModal && (
<div className="modal-overlay" color="white">
<div className="modal-content" color="white">
<h2>{welcomeText}</h2>
</div>
</div>
)}
</div>
);
}


export default N;
