import CustomCard from "@/components/dashboard/customcard";
import IssuesTable from "@/components/dashboard/issuestable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-slate-900 font-bold">Dashboard</h1>
      {/* {JSON.stringify(session)} */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Open issues */}
        <CustomCard title="Open issues" />
        {/* In progress */}
        <CustomCard title="In progress" />
        {/* Closed issues */}
        <CustomCard title="Closed Issues" />
      </div>
      {/* Add Issues button */}
      <Button>
        <Link href="/dashboard/new-issue">Create an Issue</Link>
      </Button>
      {/* Issues Table */}
      <IssuesTable />
    </div>
  );
};

export default DashboardPage;
