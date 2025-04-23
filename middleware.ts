import { createRouteMatcher, clerkMiddleware } from "@clerk/nextjs/server";

// The Protected routes are /courses/watch/{courseId} but /courses/{courseId} and /courses is not protected
const isPublicRoutes = createRouteMatcher([
  "/",
  "/courses",
  "/courses/[courseId]",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoutes(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
