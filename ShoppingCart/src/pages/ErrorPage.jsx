import React from "react";
import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-evenly ">
      <FaExclamationTriangle style={{ color: "yellow", fontSize: "12vw" }} />
      <p className="mt-[10vh] p-5 font-bold text-5xl notFound h-[10%] bgPrimary fontSecondary rounded">
        404 Not Found
      </p>
      <button>
        <NavLink to="/" className="font-bold fontPrimary">
          Go Home
        </NavLink>
      </button>
    </div>
  );
}

export default ErrorPage;
