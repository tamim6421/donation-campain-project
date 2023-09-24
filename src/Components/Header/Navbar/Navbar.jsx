import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:flex justify-between items-center px-8 py-7 shadow-lg">
        <div>
          <img className=" w-38 " src="https://i.ibb.co/th93S3X/Logo.png" alt="" />
        </div>
      <ul className="flex gap-5 font-semibold mt-3">

        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline font-white" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline font-white" : ""
            }
          >
            Donation
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline font-white" : ""
            }
          >
            Statistics
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;

