// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Api$Data$Get$Response>
) {
  res.status(200).json({ email: "example@domain.com", full_name: "John Doe" });
}
