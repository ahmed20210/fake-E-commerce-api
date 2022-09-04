import React from "react";
import { Link} from "react-router-dom";
function Header() {
 
  return (
    
    <div className="">
      <ul className="flex gap-5 justify-center bg-slate-300">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="docs">Docs</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
