import { Outlet } from "react-router-dom";
import Nabvar from "../pages/Shared/Nabvar/Nabvar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
           <Nabvar></Nabvar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;