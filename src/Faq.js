import React, { useState } from "react";
import { data } from "./utils.js";

const Faq = () => {
  const [show, setShow] = useState(null);
  const [changeselection, setchange] = useState(false);
  const [multi, setmulti] = useState([]);

  const handlemulti = (index) => {
    const copymu = [...multi];
    const find = copymu.indexOf(index);
    if (find === -1) {
      copymu.push(index);
    } else {
      copymu.splice(find, 1);
    }
    console.log(copymu);
    
    setmulti(copymu);
  };

  const showHandle = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className="w-full min-h-fit flex flex-col items-center py-10">
      <div className="max-w-4xl w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <button
          className="w-fit h-fit p-5 border bg-sky-400 m-5 rounded-lg"
          onClick={() => setchange(!changeselection)}
        >
          {changeselection
            ? "enable single-selection"
            : "enable multi-selection"}
        </button>
        {data.map((i, index) => (
          <div key={index} className="w-full mb-4">
            <div className="bg-white border rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-lg font-semibold text-gray-800">
                  {i?.question}
                </span>
                <button
                  onClick={
                    !changeselection
                      ? () => showHandle(index)
                      : () => handlemulti(index)
                  }
                  className="text-lg font-semibold text-green-600 focus:outline-none"
                >
                  {show === index || multi.includes(index)? "-" : "+"}
                </button>
              </div>
              {(show === index ||multi.includes(index))&& (
                <div className="mt-4 text-gray-700 text-base">
                  <p>{i?.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
