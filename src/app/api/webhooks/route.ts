import createUser from "@/server/actions/user/user.create";
import { TCreateUserParams } from "@/types/action.params";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log("Webhook event ID:", id);

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

      const userData: TCreateUserParams = {
        clerkId: id!,
        email: email_addresses[0].email_address!,
        firstName: first_name!,
        lastName: last_name!,
        userName: username!,
        avatar: image_url!,
        locked: locked,
        banned: banned,
      };

      const result = await createUser(userData);

      if (result.status === "error") {
        console.error("Error creating user:", result.message);
        return new Response(result.message, { status: 500 });
      }

      console.log("User created successfully:", result.data);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
