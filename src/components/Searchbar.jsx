import { Search, TextAlignEnd } from "lucide-react";
import React from "react";

export default function Searchbar() {
  return (
    <div className="py-6 px-4 w-full flex justify-center">
      <div className="border border-zinc-400 flex rounded overflow-hidden w-full max-w-125 ">
        {/* input */}
        <input type="text" placeholder="Search here..." className="w-full h-9 px-4 outline-none"/>
        {/* search icon */}
        <button className="bg-green-500 text-white px-4"><Search className="size-6"/></button>
      </div>
    </div>
  );
}
