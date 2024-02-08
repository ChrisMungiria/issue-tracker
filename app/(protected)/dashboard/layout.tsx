import SideNav from "@/components/dashboard/sidenav";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="w-screen h-screen bg-red-500 flex">
      <SideNav />
      <div className="w-full h-full bg-blue-500">{children}</div>
    </section>
  );
};

export default DashboardLayout;
