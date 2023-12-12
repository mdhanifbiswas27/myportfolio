import Banner from "./Banner";
import MyLatesProject from "./MyLatesProject";
import MyServices from "./MyServices";
import MySkill from "./MySkill";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkill></MySkill>
            <MyServices></MyServices>
            <MyLatesProject></MyLatesProject>
        </div>
    );
};

export default Home;