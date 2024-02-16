import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const CustomCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
        <AiOutlineExclamationCircle size={20} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">100</div>
        <p className="text-xs text-muted-foreground">+20.1% from yesterday</p>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
