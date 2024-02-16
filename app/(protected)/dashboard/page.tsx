import CustomCard from "@/components/dashboard/customcard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardPage = async () => {
  return (
    <div>
      <h1 className="text-3xl text-slate-900 font-bold">Dashboard</h1>
      {/* {JSON.stringify(session)} */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
        {/* Open issues */}
        <CustomCard />
        {/* In progress */}
        <CustomCard />
        {/* Closed issues */}
        <CustomCard />
      </div>
    </div>
  );
};

export default DashboardPage;
