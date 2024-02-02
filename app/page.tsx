import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-screen h-screen">
      <nav className="p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex gap-4">
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </nav>
    </section>
  );
}
