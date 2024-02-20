"use server";
import { auth } from "@/auth";
import prisma from "@/prisma/client";

async function getData() {
  const uid = await auth().then((session) => session?.user.id);
  const issues = await prisma.issue.findMany({
    where: {
      createdById: uid,
    },
  });
  console.log("Issues: ", issues);
  return issues;
}

export { getData };
