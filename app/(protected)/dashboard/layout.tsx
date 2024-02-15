import SideNav from "@/components/dashboard/sidenav";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="w-screen h-screen flex">
      <div className="flex-1">
        <SideNav />
      </div>
      <div className="flex-[3] h-full bg-blue-500">{children}</div>
    </section>
  );
};

export default DashboardLayout;
