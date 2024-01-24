"use client";

// import Image from "next/image";
import { useState } from "react";
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([1, 2, 3]);

  return (
    <main className="flex flex-col gap-8 items-center justify-between p-24">
      <div className="flex flex-col gap-2 bg-slate-400 rounded-md p-5">
        <div className="flex flex-col gap-8 pb-8 items-center">
          <h1 className="text-3xl">My Todo List</h1>
        </div>
        <div className="flex gap-2 mb-7">
          <input
            type="text"
            placeholder="Enter Todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="text-xl border rounded-md shadow-md py-1 px-3"
          />
          <button className="bg-green-500 hover:bg-green-600 rounded-md py-1 px-3 shadow-md">
            Add Todo
          </button>
          <button className="bg-red-500 hover:bg-red-600 rounded-md py-1 px-3">
            Clear Todo
          </button>
        </div>
        <div className="w-5/6 flex flex-col gap-2">
          {todos.map((todo, index) => {
            return (
              <div
                key={index}
                className="bg-slate-600 flex gap-1 justify-between items-center p-2 rounded-md shadow-md"
              >
                <div className="flex gap-2">
                  <input type="checkbox" className="w-5"/>
                  <p className="text-lg text-white">Write some code</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-500 hover:bg-green-600 rounded-md shadow-md p-1 flex gap-1">
                    <FaPenToSquare className="text-xl pt-1" />
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 rounded-md shadow-md p-1 flex gap-1">
                    <FaTrashCan className="text-xl pt-1" />
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
