import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: "Token required" });

    res.setHeader(
      "Set-Cookie",
      serialize("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        path: "/",
      })
    );

    return res.status(200).json({ message: "Token stored" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
