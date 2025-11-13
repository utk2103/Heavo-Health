import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import user from "@/models/user";
import { formSchema } from "@/types/form";
import { z } from "zod";

export async function GET() {
  await connectToDatabase();
  const users = await user.find().sort({ createdAt: -1 }).limit(100).lean();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  await connectToDatabase();

  console.log("1");

  try {
    console.log("2");
    const body = await req.json();
    console.log(body, "body");
    const data = formSchema.parse(body);
    console.log(data ,"data");
    const user_created = await user.create(data);
    console.log(user_created, "user")
    return NextResponse.json({ ok: true, user_created }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, message: err.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}


