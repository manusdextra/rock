import React from "react";

function Button({ choice, index, onClick }) {
  return (
    <button
      key={index}
      value={choice}
      onClick={onClick}
      className="h-full w-full rounded-lg border-2 border-slate-400 bg-gray-400 text-xl font-bold hover:border-2 hover:border-slate-700"
    >
      {choice}
    </button>
  );
}

export default Button;
