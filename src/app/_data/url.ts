let URL = "http://localhost:3000";

if (typeof window !== "undefined") {
  const currentUrl = window.location.href;
  URL = currentUrl;
}

export const APP_URL = process.env.NEXT_PUBLIC_VERCEL_URL || URL;
