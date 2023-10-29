import { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-12 m-20 flex flex-col items-center">

<div className=' text-center'>
                <p className='mb-5 text-amber-400	'>---From 11:00am to 10:00pm---</p>
                <h1 className='text-3xl border-y-2 p-5 mb-10 w-80 m-auto'>FROM OUR MENU</h1>

            </div>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} adiba={item}>
            
          </MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 ">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
