import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TbClockExclamation } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const CustomCard = ({ title }: { title: string }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
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
        <div className="text-2xl font-bold">100</div>
        <p className="text-xs text-muted-foreground">+20.1% from yesterday</p>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
