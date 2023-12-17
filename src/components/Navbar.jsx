import User from "../img/react.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Live Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/17613609/pexels-photo-17613609/free-photo-of-street-musician-playing-violin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Rifat</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
