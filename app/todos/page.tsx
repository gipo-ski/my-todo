"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";

import giposkiLogo from "../../public/images/giposkilogoSMALL.png";
import Link from "next/link";

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([1, 2, 3]);

  return (
    <section className="flex flex-col gap-8 items-center bg-slate-400 rounded-md pt-8 pb-32">
      <div className="flex flex-row gap-0 pb-8 items-center">
        <Image
          src={giposkiLogo}
          alt="giposki logo"
          width={200}
          className="py-2 px-4"
        />
        <h1 className="text-5xl">My Todo List</h1>
      </div>
      <div className="flex gap-2 mb-7">
        <input
          type="text"
          placeholder="Enter Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-xl rounded-md shadow-md py-1 px-3"
        />
        <button className="bg-green-500 hover:bg-green-600 rounded-md shadow-md py-1 px-3">
          Add Todo
        </button>
        <button className="bg-red-500 hover:bg-red-600 rounded-md shadow-md py-1 px-3">
          Clear Todo
        </button>
      </div>
      <div className="w-4/6 flex flex-col gap-2">
        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              className="bg-slate-600 flex gap-1 justify-between items-center p-2 rounded-md shadow-md"
            >
              <div className="flex gap-2">
                <input type="checkbox" className="w-5" />
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
    </section>
  );
}
