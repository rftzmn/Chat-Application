import User from "../img/react.png";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" id="" placeholder="Find a User" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/17613609/pexels-photo-17613609/free-photo-of-street-musician-playing-violin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="usrChatInfo">
          <span>Rifat</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
