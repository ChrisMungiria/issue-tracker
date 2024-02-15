"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkItem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  return (
    <li
      className={`p-2 border  my-2 rounded-md hover:bg-slate-100 transition-all duration-150 ${
        pathname === href ? "bg-slate-200 " : ""
      }`}
    >
      <Link href={href} className="block w-full ">
        {name}
      </Link>
    </li>
  );
};

export default LinkItem;
