import React from "react";

export default function Sidebar({isNavOpen}) {
  return <aside className={`fixed bg-green-500 top-0 left-0 bottom-0 w-1/2 duration-700 ${isNavOpen? "translate-x-0": "-translate-x-full"} md:hidden`}>Sidebar</aside>;
}
