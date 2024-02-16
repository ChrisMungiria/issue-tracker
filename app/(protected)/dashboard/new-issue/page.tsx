import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-3xl text-slate-900 font-bold">Create an Issue</h1>
      <Input placeholder="Issue title" />
      <Textarea placeholder="Type your issue description" rows={10} />
      <Button>Create new issue</Button>
    </div>
  );
};

export default NewIssuePage;
