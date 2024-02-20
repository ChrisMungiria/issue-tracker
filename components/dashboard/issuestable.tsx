import { Table } from "antd";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      return (
        <span
          className={`p-2 ${
            status === "OPEN"
              ? "bg-red-200 text-red-600"
              : status === "IN_PROGRESS"
              ? "bg-yellow-200 text-yellow-600"
              : "bg-green-200 text-green-600"
          } rounded-md`}
        >
          {status}
        </span>
      );
    },
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];
interface Issues {
  id: number;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "DONE";
  createdAt: string;
  updatedAt: Date;
  createdById: string;
}

const IssuesTable = ({
  issues,
  loading,
}: {
  issues: Issues[];
  loading: boolean;
}) => {
  return (
    <Table
      dataSource={issues}
      columns={columns}
      loading={loading}
      key="id"
      pagination={{
        pageSize: 5,
        position: ["bottomCenter"],
      }}
    />
  );
};

export default IssuesTable;
