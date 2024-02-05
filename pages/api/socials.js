// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { socials } from "./data/socials";
import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req, res) {
  res.status(200).json(socials);
}
