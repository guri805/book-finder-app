"use client";
import { useEffect, useState } from "react";

export default function Search() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      let response = await fetch("http://localhost:3001/search");
      let data = await response.json();
      setCategories(data);
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        let response = await fetch(
          `http://localhost:3001/search/${category}`
        );
        let data = await response.json();
        setBooks(data);
      } else {
        let response = await fetch("http://localhost:3001/books");
        let data = await response.json();
        setBooks(data); // Update book details state with all books
      }
    };
    fetchData();
  }, [category]);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Book Finder
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover books by selecting a category or view all.
        </p>
      </header>

      {/* Dropdown */}
      <div className="flex flex-col items-center mb-8">
        <label
          htmlFor="books"
          className="text-xl font-medium text-gray-800 mb-4"
        >
          Select a Book Category:
        </label>
        <select
          name="books"
          value={category}
          id="books"
          onChange={handleChange}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        >
          <option value={""}>All</option>
          {categories.map((curEle, index) => (
            <option key={index} value={curEle}>
              {curEle}
            </option>
          ))}
        </select>
      </div>

      {/* Books List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {books.map((curEle, index) => (
          <div
            key={curEle.id || index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {curEle.heading}
            </h2>
            <p className="text-gray-600 mb-4">{curEle.text}</p>
            <p className="text-sm text-gray-500 italic">
              Category: {curEle.field}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Book Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}
