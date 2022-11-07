// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  id: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  
  res.status(200).json([
    { id: 1, name: 'john doe' }, 
    { id: 2, name: 'walker brum'},
    { id: 3, name: 'patricia oliveira'},
    { id: 4, name: 'marlon souza'},
    { id: 5, name: 'márcio guerin'},
    { id: 6, name: 'philipe teixeira'},
    { id: 7, name: 'rogério cavalcante'},
    { id: 8, name: 'henrique marques'}
  ])
}
