import React from 'react'

export default function LoginButton({text, onClick}) {
  return (
    <div>
      <button
        className="p-1 w-20 rounded-lg bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 shadow-md"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
