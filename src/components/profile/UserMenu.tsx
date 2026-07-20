import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type User = {
  name: string;
  email: string;
  image?: string;
};

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-full bg-slate-800 px-2 py-1 transition hover:bg-slate-700"
      >
        <img
          src={user?.image || "https://i.pravatar.cc/150?img=12"}
          alt={user?.name}
          className="h-7 w-7 rounded-full object-cover"
        />

        <div className="text-left">
          <p className="text-sm font-semibold text-white">{user?.name}</p>

          <p className="text-xs text-primary-600">Premium User</p>
        </div>

        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-white transition h-10  ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[100] mt-2 w-48 rounded-xl border bg-white py-2 shadow-xl">
          {" "}
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm hover:bg-slate-100"
          >
            My Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
