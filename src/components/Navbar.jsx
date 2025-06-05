import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  return (
    <div className="navbar fixed top-0 z-10 bg-[#0000005f] shadow-md px-4 md:px-8">
      {/* Logo section */}
      <div className="flex-1 cinzel text-white">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold">BISTRO BOSS</span>
          <span className="text-lg">RESTAURANT</span>
        </Link>
      </div>

      {/* Desktop Navigation*/}
      <div className="flex-none hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link 
              to="/" 
              className={`${isActive("/") ? "text-yellow-500 font-bold" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${isActive("/contact") ? "text-yellow-500 font-bold" : ""}`}
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              className={`${isActive("/dashboard") ? "text-yellow-500 font-bold" : ""}`}
            >
              DASHBOARD
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`${isActive("/menu") ? "text-yellow-500 font-bold" : ""}`}
            >
              OUR MENU
            </Link>
          </li>
          <li>
            <Link 
              to="/shop" 
              className={`${isActive("/shop") ? "text-yellow-500 font-bold" : ""}`}
            >
              OUR SHOP
            </Link>
          </li>
          <li>
            <button className="text-error font-bold">
              SIGN OUT
            </button>
          </li>
        </ul>
      </div>

      {/*for medium devices*/}
      <div className="flex-none hidden md:flex lg:hidden text-white">
        <ul className="menu menu-horizontal px-1 gap-4 flex items-center">
          <li>
            <Link 
              to="/" 
              className={`${isActive("/") ? "text-yellow-500 font-bold" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`${isActive("/menu") ? "text-yellow-500 font-bold" : ""}`}
            >
              MENU
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${isActive("/contact") ? "text-yellow-500 font-bold" : ""}`}
            >
              CONTACT
            </Link>
          </li>
          
          {/* Dropdown for medium*/}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className={` ${isActive("/dashboard") || isActive("/shop") ? "text-yellow-500 font-bold" : ""}`}>
              MORE
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`${isActive("/dashboard") ? "text-yellow-500 font-bold" : ""}`}
                >
                  DASHBOARD
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop" 
                  className={`${isActive("/shop") ? "text-yellow-500 font-bold" : ""}`}
                >
                  OUR SHOP
                </Link>
              </li>
              <li>
                <button className="text-error font-bold">
                  SIGN OUT
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      {/* Mobile dropdown */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            MENU
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li>
              <Link 
                to="/" 
                className={`${isActive("/") ? "text-yellow-500 font-bold" : ""}`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`${isActive("/contact") ? "text-yellow-500 font-bold" : ""}`}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard" 
                className={`${isActive("/dashboard") ? "text-yellow-500 font-bold" : ""}`}
              >
                DASHBOARD
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={`${isActive("/menu") ? "text-yellow-500 font-bold" : ""}`}
              >
                OUR MENU
              </Link>
            </li>
            <li>
              <Link 
                to="/shop" 
                className={`${isActive("/shop") ? "text-yellow-500 font-bold" : ""}`}
              >
                OUR SHOP
              </Link>
            </li>
            <li>
              <button className="text-error font-bold">
                SIGN OUT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;