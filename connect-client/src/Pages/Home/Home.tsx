import Events from "../../components/Events/Events";
import LastActions from "../../components/LastActions/LastActions";
import Share from "../../components/share/Share";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Events />
      <Share/>
      <LastActions />
    </div>
  );
};

export default Home;
