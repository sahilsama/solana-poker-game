import { type NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/initSupabase";
import { PostgrestError } from "@supabase/supabase-js";
import requestParser from "./utils/requestParser";

export type LoginRequest = {
  walletId: string;
};

type LoginResponse = {
  message: string;
  status: number;
  error?: PostgrestError | null;
};

export async function POST(req: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
    const { walletId }: LoginRequest = await requestParser(req);

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          id: walletId,
          profile_image: "ad1d22a9-445a-4a9d-8ad2-117c2ae9a299-cover.png",
        },
      ])
      .select();

    // profile image is a default image for add random default image later
    if (error) {
      //@todo: log this error for internal debug. (Ps: never display final error to user !)
      return NextResponse.json({ message: `An error occured on user creation`, status: 500 });
    }
    return NextResponse.json({ message: "User created", status: 200 });
  } catch (error: any) {
    //@todo: log this error for internal debug.
    return NextResponse.json({ message: `An error occured on user creation`, status: 500 });
  }
}
