import { signOut } from "firebase/auth";
import User from "../img/react.png";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <span className="logo">Live Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
