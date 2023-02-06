import React from 'react'

export default function SearchRestaurant({ searchText, onChange, onClick }) {
  return (
    <div className="flex items-center justify-center space-x-1">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-64 p-2 outline-none"
        placeholder="search-restaurant"
        value={searchText}
        onChange={onChange}
      />
      <button
        className="p-2 w-auto rounded-lg font-semibold bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 shadow-md"
        onClick={onClick}
      >
        Order Now
      </button>
    </div>
  );
}
