import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  
  const navOptions = [
    { path: "/", label: "HOME" },
    { path: "/menu", label: "OUR MENU", shortLabel: "MENU" },
    { path: "/contact", label: "CONTACT US", shortLabel: "CONTACT" },
    { path: "/dashboard", label: "DASHBOARD" },
    { path: "/shop", label: "OUR SHOP" },
  ];

  
  const renderNavLinks = (options, useShortLabels = false) => {
    return options.map((option) => (
      <li key={option.path}>
        <Link
          to={option.path}
          className={`${isActive(option.path) ? "text-yellow-500 font-bold" : ""}`}
        >
          {useShortLabels && option.shortLabel ? option.shortLabel : option.label}
        </Link>
      </li>
    ));
  };

  
  const renderDropdownContent = (options) => {
    return (
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
        {renderNavLinks(options)}
        <li>
          <button className=" font-bold">SIGN OUT</button>
        </li>
      </ul>
    );
  };

  return (
    <div className="navbar fixed top-0 z-10 bg-[#0000005f] shadow-md px-4 md:px-8 max-w-screen-xl mx-auto">
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
          {renderNavLinks(navOptions)}
          <li>
            <button className="font-bold">SIGN OUT</button>
          </li>
        </ul>
      </div>

      {/* Medium devices */}
      <div className="flex-none hidden md:flex lg:hidden text-white">
        <ul className="menu menu-horizontal px-1 gap-4 flex items-center">
          {renderNavLinks(navOptions.slice(0, 3), true)} 
          
          {/* Dropdown for remaining items */}
          <li>
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className={`${navOptions.slice(3).some(opt => isActive(opt.path)) ? "text-yellow-500 font-bold" : ""}`}
              >
                MORE
              </div>
              {renderDropdownContent(navOptions.slice(3))}
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown*/}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            MENU
          </div>
          {renderDropdownContent(navOptions)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;