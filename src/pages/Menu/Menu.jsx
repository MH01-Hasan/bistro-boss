import './Menu.css'
import featuredImg from '../../assets/contact/home/featured.jpg'
const Menu = () => {
    return (
      <div className='feature'>
         <div className="featured-item">
           
        </div>
        <div className="feature-body">
                <div>
                    <img className='image' src={featuredImg} alt="" />
                </div>
                <div className="">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="">Order Now</button>
                </div>
            </div>
       
      </div>

       
    );
};

export default Menu;