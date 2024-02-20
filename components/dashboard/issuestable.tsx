import { Table, message } from "antd";
import axios from "axios";

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
  {
    title: "Delete",
    dataIndex: "id",
    key: "id",
    render: (id: number) => {
      return (
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const response = await axios.delete("/api/issues", {
                data: { id },
              });
              if (response.status === 200) {
                message.success("Issue deleted successfully");
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              } else {
                // Handle error, e.g. show an error message
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <button
            type="submit"
            className="bg-red-500 text-sm text-white p-2 rounded-md"
          >
            Delete
          </button>
        </form>
      );
    },
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
  const [messageApi, contextHolder] = message.useMessage();
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
