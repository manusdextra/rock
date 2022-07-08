import React from "react";

function Button({ choice, index, onClick }) {
  return (
    <button
      value={choice}
      onClick={onClick}
      key={index}
      className="h-full w-full rounded-lg bg-gray-400 text-xl font-bold border-2 border-slate-400 hover:border-2 hover:border-slate-700"
    >
      {choice}
    </button>
  );
}

export default Button;
