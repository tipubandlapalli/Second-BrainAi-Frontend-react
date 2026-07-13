import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "../ui/ThemeToggle";
import User from "./components/User";
import SearchBar from "./components/SearchBar";

const Navbar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <Link to="/product">
              <img src={logo} alt="TipuCo Synapse" className="h-10 w-auto" />
            </Link>{" "}
          </div>

          <SearchBar />

          <ThemeToggle />

          <User />
        </div>
        {/* Page content here */}
        <div className="p-4">Page Content</div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Navbar;
