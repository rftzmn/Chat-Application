import Cards from "../components/Cards";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar></Sidebar>
        {/* <Chat></Chat> */}
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Home;
