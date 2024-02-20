export const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "home",
  },
  {
    name: "Issues",
    href: "/dashboard/issues",
    icon: "user",
  },
];

export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

export const data = [
  {
    key: "1",
    name: "Issue Logging in",
    status: "open",
    createdAt: "2021-06-01",
  },
  {
    key: "2",
    name: "Issue with the API",
    status: "closed",
    createdAt: "2021-06-02",
  },
  {
    key: "3",
    name: "Issue with the Database",
    status: "open",
    createdAt: "2021-06-03",
  },
];
