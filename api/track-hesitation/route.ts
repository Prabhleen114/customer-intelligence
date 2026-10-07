import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// In a full implementation, we'd batch these or write to a fast store (like Redis or log file)
// For now, we write to a HesitationLog table (or log it).
export async function POST(req: Request) {
  try {
    const { type, data, url } = await req.json();

    console.log(`[HESITATION TRACKED] Type: ${type} | URL: ${url} | Data:`, data);

    // Write to a persistent generic table if needed, e.g., Event table
    await prisma.event.create({
      data: {
        userId: "anonymous", 
        type: "HESITATION_EVENT",
        metadata: {
          hesitationType: type,
          url,
          ...data
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Hesitation tracking error:", error);
    // Fail silently so we don't break the client
    return NextResponse.json({ success: false });
  }
}
