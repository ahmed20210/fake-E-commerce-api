import React, { useState } from "react";
import menu from "../images/list.png";
import documents from "../assets/documents";
import { protectedAPIsThatRequireLogin } from "../assets/documents";
function Docs() {
  const [name, setName] = useState("");
  const [docs, setDocs] = useState(documents);
  const [show, setShow] = useState("-left-56");
  const [mainRoute, setMainRoute] = useState(Object.keys(documents));

  return (
    <>
      <div
        onClick={() => setShow(show === "-left-56" ? "left-0" : "-left-56")}
        className="flex justify-end p-5 lg:hidden"
      >
        <img width={30} height={30} src={menu} alt="menu" />
      </div>
      <div className="flex w-screen">
        <div
          className={`fixed z-10 text-base top-0 w-56 p-5 pr-0 bg-gray-200 max-h-screen overflow-y-scroll ${show} lg:left-0`}
        >
          {Object.values(docs).map((value, index) => (
            <table key={index} className="mb-20">
              <thead className="h-20 text-cyan-500 font-bold text-xl">
                <tr>
                  <th className="text-start">{mainRoute[index]}</th>
                </tr>
              </thead>

              <tbody>
                {value.map((item, i) => (
                  <tr
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setShow("-left-56");
                      }
                     
                      const scroll = document.getElementById(item.description);
                       
                      scroll.scrollIntoView({ behavior: "smooth" });
                    }}
                    key={i}
                    className="text-slate-700 h-12 hover:text-blue-700"
                  >
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
        <div className="w-56 h-screen hidden lg:block"></div>
        <div className="wid">
          <div className="my-14 p-5">
            <h2 className="text-3xl text-teal-600 uppercase font-extrabold my-14">
              protectedAPIsThatRequireLogin
            </h2>
            <ul className=" text-blue-700 clear-left bg-gray-800 p-5 ">
              {protectedAPIsThatRequireLogin.map((item, i) => (
                <li className=" my-5" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul>
            {Object.values(docs).map((value, index) => (
              <li className="m-5" key={index}>
                <h1 className="text-3xl text-teal-600 uppercase font-extrabold my-14">
                  {mainRoute[index]}
                </h1>
                {value.map((item, i) => (
                  <div
                    id={item.description}
                    className="flex flex-col gap-8 my-14"
                    key={i}
                  >
                    <h2 className="text-xl uppercase font-bold">
                      {item.description}
                    </h2>
                    <div className="bg-slate-800 text-red-500 rounded-md overflow-x-scroll max-w-full">
                      <pre className="">
                        {JSON.stringify(item.request, null, 2)
                          .replace(/\\n/g, "\n")
                          .replace(/\\/g, "")
                          .slice(1, -1)}
                      </pre>
                    </div>
                    <div className=" overflow-x-scroll bg-slate-800 p-5  text-white">
                      <pre className=" text-teal-500">
                        <span className="text-white font-bold">
                          request body : {`  `}
                        </span>
                        {JSON.stringify(item.body, null, 2)
                          .replace(/\\n/g, "\n")
                          .replace(/\\/g, "")}
                      </pre>
                      <span className="text-white font-bold">
                        request param
                      </span>
                      <code className="p-4 text-purple-500">
                        {item.params ? item.params : "no params"}
                      </code>
                    </div>

                    <button
                      className="btn"
                      onClick={() => {
                        if (name === item.description) {
                          setName("");
                        } else if (name !== item.description) {
                          setName(item.description);
                        }
                      }}
                    >
                      Show Response
                    </button>
                    {name === item.description ? (
                      <div className=" bg-slate-800 overflow-x-scroll rounded-md">
                        <pre className="p-4 text-emerald-500">
                          {JSON.stringify(item.return, null, 2)
                            .replace(/\\n/g, "\n")
                            .replace(/\\/g, "")
                            .slice(1, -1)}
                        </pre>
                      </div>
                    ) : null}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Docs;
