import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10">
      <div className="flex justify-center">
      <button className="btn bg-purple-700 my-10">
        <Link to="docs">Read Docs</Link>
      </button>
      </div>
      <div>
        <h1 className="text-4xl font-bold my-5">
          {" "}
          Fake E-commerce API Fake store{" "}
        </h1>
        <ul className="p-5 w-72 bg-cyan-100 flex flex-col gap-3">
          <li> rest API for your e-commerce or shopping website.</li>
          <li>real Api but fake data</li>
          <li>
            all features are available free to use no signup required all data
            are
          </li>
          <li>in json format</li>
          <li> easy to use with clear document</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-2xl my-5">Features</h2>
        <ul className="bg-gray-200 rounded-md p-5 text-gray-800 w-72 flex flex-col gap-5">
          <li>200 Products</li>
          <li>Categories list</li>
          <li>Subcategories list</li>
          <li>add, delete and update you review</li>
          <li>Shoping cart </li>
          <li>Complete and delet Orders </li>
          <li>Search products</li>
          <li>Sort products</li>
          <li> Sign Up </li>
          <li> Login Oauth</li>
          <li> Logout </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
