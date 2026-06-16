import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type EnquiryPayload = {
  guests?: string;
  name?: string;
  selectedPackage?: string | null;
  travelDate?: string;
};

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid enquiry payload." }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.guests?.trim()) {
    return NextResponse.json({ ok: false, message: "Name and guests are required." }, { status: 400 });
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("enquiries").insert({
    guests: payload.guests,
    name: payload.name.trim(),
    selected_package: payload.selectedPackage || null,
    travel_date: payload.travelDate || null
  });

  if (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Could not save the enquiry in Supabase.",
        error: error.message
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your Kodaikanal enquiry has been saved."
  });
}
