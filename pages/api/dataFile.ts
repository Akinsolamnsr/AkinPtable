import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'staticFileNew.json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory, 'utf8');
  const Contents=JSON.parse(fileContents)
  
  //Return the content of the data file in json format

  res.status(200).json(Contents);
}