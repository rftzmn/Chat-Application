import User from "../img/react.png";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/17613609/pexels-photo-17613609/free-photo-of-street-musician-playing-violin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello Buddy!</p>
        <img
          src="https://images.pexels.com/photos/18114403/pexels-photo-18114403/free-photo-of-white-egret-standing-in-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
