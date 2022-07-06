import React from "react";

function Button({ choice, onClick }) {
  return (
    <button
      value={choice}
      onClick={onClick}
      className="h-full w-full rounded-lg bg-gray-400 text-xl font-bold hover:border-2 hover:border-slate-700"
    >
      {choice}
    </button>
  );
}

export default Button;
