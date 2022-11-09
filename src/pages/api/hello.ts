// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string,
  id: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  
  res.status(200).json([
    { id: 1, name: 'John Doe' }, 
    { id: 2, name: 'Walker Brum'},
    { id: 3, name: 'Patricia Oliveira'},
    { id: 4, name: 'Marlon Souza'},
    { id: 5, name: 'Márcio Guerin'},
    { id: 6, name: 'Philipe Teixeira'},
    { id: 7, name: 'Rogério Cavalcante'},
    { id: 8, name: 'Henrique Marques'}
  ]);
}
