import { Link } from "react-router-dom";

const Navber = () => {
  const navItem = (
    <>
      <li className="text-xl">
        <Link to="/">Blog</Link>
      </li>
      <li className="text-xl">
        <Link to="/">Offer</Link>
      </li>
      <li className="text-xl">
        <Link to="/">Airlines</Link>
      </li>
      <li className="text-xl">
        <Link to="/">About</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100">
      <div className="navbar z-50   top-3  bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navItem}
            </ul>
          </div>
          <Link className="text-xl">
            <img src="https://i.ibb.co/qjffCHy/LOGO.png" alt="LOGO" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#006CE4] hover:bg-[#006CE4] text-white text-xl">
            Sing in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
