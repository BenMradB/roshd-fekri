import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    if (eventType === "user.created") {
      const {
        email_addresses,
        username,
        first_name,
        last_name,
        image_url,
        locked,
        banned,
      } = evt.data;

      console.log("User created event details:");
      console.log("Email addresses:", email_addresses);
      console.log("Username:", username);
      console.log("First name:", first_name);
      console.log("Last name:", last_name);
      console.log("Profile image URL:", image_url);
      console.log("Locked:", locked);
      console.log("Banned:", banned);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
