import Events from "../../components/Events/Events";
import LastActions from "../../components/LastActions/LastActions";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Events />
      <LastActions />
    </div>
  );
};

export default Home;
