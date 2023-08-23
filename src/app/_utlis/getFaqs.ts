import { cache } from "react";
import { APP_URL } from "../_data/url";
import { FAQ_ROUTE } from "./../api/faqs/route";

export const REVALIDATE_DATA_MS = 3600;

export const getFaqs = cache(async () => {
  const faqs = await fetch(APP_URL + "/" + FAQ_ROUTE, {
    next: { revalidate: REVALIDATE_DATA_MS },
  }).then((res: Response) => res.json());

  return faqs.result;
});
