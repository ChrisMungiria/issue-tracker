"use client";
import { getIssues } from "@/actions/getData";
import CustomCard from "@/components/dashboard/customcard";
import IssuesTable from "@/components/dashboard/issuestable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Issues {
  id: number;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "DONE";
  createdAt: string;
  updatedAt: Date;
  createdById: string;
}

const DashboardPage = () => {
  const [issues, setIssues] = useState<Issues[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIssues();
      const updatedData = data.map((issue) => ({
        ...issue,
        createdAt: issue.createdAt.toISOString().split("T")[0],
      }));
      setIssues(updatedData);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-slate-900 font-bold">Dashboard</h1>
      {/* {JSON.stringify(session)} */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Open issues */}
        <CustomCard title="Open issues" issues={issues} loading={loading} />
        {/* In progress */}
        <CustomCard title="In progress" issues={issues} loading={loading} />
        {/* Closed issues */}
        <CustomCard title="Closed Issues" issues={issues} loading={loading} />
      </div>
      {/* Add Issues button */}
      <Button>
        <Link href="/dashboard/new-issue">Create an Issue</Link>
      </Button>
      {/* Issues Table */}
      <IssuesTable issues={issues} loading={loading} />
    </div>
  );
};

export default DashboardPage;
