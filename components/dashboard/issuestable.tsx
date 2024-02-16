import { data, columns } from "@/data/constants";
import { Table } from "antd";

const IssuesTable = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default IssuesTable;
