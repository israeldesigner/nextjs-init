// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from "../../data";

export default function handler(request:NextApiRequest, response:NextApiResponse ) {
    const { method } = request;
    if (method === "GET") {
      return response.status(200).json(data);
    }
    // if (method === "POST") {
    //   const { body } = request;
    //   data.push({ ...body, id: data.length + 1 });
    //   return response.status(200).json(data);
    // }
  }
  