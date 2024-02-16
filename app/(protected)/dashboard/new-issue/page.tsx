"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="space-y-4 max-w-xl"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/dashboard");
      })}
    >
      <h1 className="text-3xl text-slate-900 font-bold">Create an Issue</h1>
      <Input placeholder="Issue title" {...register("title")} />
      <Textarea
        placeholder="Type your issue description"
        rows={10}
        {...register("description")}
      />
      <Button>Create new issue</Button>
    </form>
  );
};

export default NewIssuePage;
