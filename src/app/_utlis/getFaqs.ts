import { cache } from "react";
import { APP_URL } from "../_data/url";
import { ApiResult } from "../_types/ApiResult";

export const REVALIDATE_DATA_MS = 15;

export type Faq = {
  id: number;
  title: string;
  content: string;
};

const FAQ_ROUTE = "/api/faqs";

export const getFaqs = cache(async (): Promise<ApiResult<Faq>> => {
  const faqs = await fetch(APP_URL + "/" + FAQ_ROUTE, {
    next: { revalidate: REVALIDATE_DATA_MS },
  }).then((res: Response) => res.json());

  return { result: faqs.result.rows, rowCount: faqs.rowCount };
});
