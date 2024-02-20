"use client";
import { getData } from "@/actions/getData";
import { data, columns } from "@/data/constants";
import { Table } from "antd";
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

const IssuesTable = () => {
  const [issues, setIssues] = useState<Issues[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data...");
      const data = await getData();
      // Convert the createdAt to a string
      const updatedData = data.map((issue) => ({
        ...issue,
        // Truncate to show only the date
        createdAt: issue.createdAt.toISOString().split("T")[0],
      }));
      setIssues(updatedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Table dataSource={issues} columns={columns} loading={loading} key="id" />
  );
};

export default IssuesTable;
