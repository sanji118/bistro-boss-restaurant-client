import { Link, useLocation } from "react-router-dom";
import { Home, Utensils, ShoppingCart, Contact, LayoutDashboard, LogOut } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      {/* Logo/Brand section */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">BISTRO BOSS</span>
          <span className="text-lg text-gray-500">RESTAURANT</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <Link 
              to="/" 
              className={`flex items-center ${location.pathname === "/" ? "active" : ""}`}
            >
              <Home className="w-5 h-5" />
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`flex items-center ${location.pathname === "/contact" ? "active" : ""}`}
            >
              <Contact className="w-5 h-5" />
              <span>CONTACT US</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              className={`flex items-center ${location.pathname === "/dashboard" ? "active" : ""}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>DASHBOARD</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`flex items-center ${location.pathname === "/menu" ? "active" : ""}`}
            >
              <Utensils className="w-5 h-5" />
              <span>OUR MENU</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/shop" 
              className={`flex items-center ${location.pathname === "/shop" ? "active" : ""}`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>OUR SHOP</span>
            </Link>
          </li>
          <li>
            <button className="flex items-center text-error">
              <LogOut className="w-5 h-5" />
              <span>SIGN OUT</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/" className="flex items-center">
                <Home className="w-5 h-5" />
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center">
                <Contact className="w-5 h-5" />
                <span>CONTACT US</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center">
                <LayoutDashboard className="w-5 h-5" />
                <span>DASHBOARD</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className="flex items-center">
                <Utensils className="w-5 h-5" />
                <span>OUR MENU</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="flex items-center">
                <ShoppingCart className="w-5 h-5" />
                <span>OUR SHOP</span>
              </Link>
            </li>
            <li>
              <button className="flex items-center text-error">
                <LogOut className="w-5 h-5" />
                <span>SIGN OUT</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;