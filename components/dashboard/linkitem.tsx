"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkItem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  return (
    <li
      className={`p-2  my-2 rounded-md  transition-all duration-150 ${
        pathname === href
          ? "bg-slate-200 text-slate-800"
          : "hover:bg-slate-100 text-slate-400"
      }`}
    >
      <Link href={href} className="block w-full ">
        {name}
      </Link>
    </li>
  );
};

export default LinkItem;
