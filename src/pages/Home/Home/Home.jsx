import Banner from "../../Banner/Banner";
import Boss from "../../Boss/Boss";
import Category from "../../Category/Category";
import Menu from "../../Menu/Menu";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testomianals from "../../Testomianals/Testomianals";

const Home = () => (
    <div>
        <Banner></Banner>
        <Category></Category>
        <Boss></Boss>
        <PopularMenu />
        <Menu></Menu>
        <Testomianals></Testomianals>
    </div>
);

export default Home;