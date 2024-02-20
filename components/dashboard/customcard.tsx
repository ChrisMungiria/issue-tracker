import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TbClockExclamation } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface Issues {
  id: number;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "DONE";
  createdAt: string;
  updatedAt: Date;
  createdById: string;
}

const CustomCard = ({
  title,
  issues,
  loading,
}: {
  title: string;
  issues: Issues[];
  loading: boolean;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        {title === "Open issues" && (
          <AiOutlineExclamationCircle size={22} className="text-red-500" />
        )}
        {title === "In progress" && (
          <TbClockExclamation size={22} className="text-yellow-500" />
        )}
        {title === "Closed Issues" && (
          <IoCheckmarkCircleOutline size={22} className="text-green-500" />
        )}
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ) : title === "Open issues" ? (
          <p>{issues.filter((issue) => issue.status === "OPEN").length}</p>
        ) : title === "In progress" ? (
          <p>
            {issues.filter((issue) => issue.status === "IN_PROGRESS").length}
          </p>
        ) : title === "Closed Issues" ? (
          <p>{issues.filter((issue) => issue.status === "DONE").length}</p>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
